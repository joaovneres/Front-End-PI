import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';
import Categoria from '../../../models/Categoria';
import { buscar, buscaId, put, post } from '../../../services/Service';
import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Slide, toast } from 'react-toastify';

function CadastroProduto() {
  let navigate = useNavigate();

  const { idProduto } = useParams<{ idProduto: string }>();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const usuarioId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  );

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    idCategoria: 0,
    tipoCategoria: '',
    tamanhoCategoria: '',
    alimenticiaCategoria: false

  });

  const [produto, setProduto] = useState<Produto>({
    idProduto: 0,
    nomeProduto: '',
    valorProduto: 0,
    qtdProduto: 0,
    descProduto: '',
    imgProduto: '',
    enderecoProduto: '',
    categoria: null,
    usuario: null
  });

  const [usuario, setUsuario] = useState<Usuario>({
    idUsuario: +usuarioId,
    nomeUsuario: '',
    emailUsuario: '',
    senhaUsuario: '',
    fotoUsuario: ''
  });

  useEffect(() => {
    if (token === "") {

      toast.warning('Você precisa logar, para cadastrar um produto.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });

      navigate('/logar');
    }
  }, [token]);

  async function buscarCategoria() {
    await buscar('/categoria/buscar', setCategorias);
  }

  useEffect(() => {
    buscarCategoria();
    if (idProduto !== undefined) {
      findByIdProduto(idProduto);
    }
  }, [idProduto]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
      usuario: usuario
    });
  }, [categoria]);

  async function findByIdProduto(idProduto: string) {
    await buscaId(`/produto/buscar/${idProduto}`, setProduto);
  }

  function updateProduto(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (idProduto !== undefined) {
      try {
        await put('/produto', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Produto alterado com sucesso.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });

      } catch (error) {
        console.log(`Erro: ${error}`);

        toast.error('Erro ao alterar produto.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
      }
    } else {
      try {
        await post('/produto', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Produto cadastrado com sucesso.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });

      } catch (error) {
        console.log(`Erro: ${error}`);

        toast.error('Erro ao cadastrar produto.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });

      }
    }
    back();
  }

  function back() {
    navigate('/produto');
  }

  return (
    <>
      <Container maxWidth="sm" className='topo'>
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Cadastrar produto
          </Typography>

          <TextField
            id="nomeProduto"
            label="Nome do produto"
            variant="outlined"
            name="nomeProduto"
            margin="normal"
            fullWidth
            value={produto.nomeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />
          <TextField
            id="valorProduto"
            label="Valor do produto"
            variant="outlined"
            name="valorProduto"
            margin="normal"
            fullWidth
            multiline
            value={produto.valorProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />
          <TextField
            id="qtdProduto"
            label="Quantidade do produto"
            variant="outlined"
            name="qtdProduto"
            margin="normal"
            fullWidth
            multiline
            value={produto.qtdProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />
          <TextField
            id="descProduto"
            label="Descrição do produto"
            variant="outlined"
            name="descProduto"
            margin="normal"
            fullWidth
            multiline
            value={produto.descProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />

          <TextField
            id="imgProduto"
            label="Link da imagem do produto"
            variant="outlined"
            name="imgProduto"
            margin="normal"
            fullWidth
            multiline
            value={produto.imgProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />

          <TextField
            id="enderecoProduto"
            label="Endereço do produto"
            variant="outlined"
            name="enderecoProduto"
            margin="normal"
            fullWidth
            multiline
            value={produto.enderecoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />

          <FormControl fullWidth variant='filled'>
            <InputLabel id="selectCategoria-label">Categoria</InputLabel>
            <Select
              labelId="selectCategoria-label"
              id="selectCategoria"
              onChange={(e) =>
                buscaId(`/categoria/buscar/${e.target.value}`, setCategoria)
              }
            >
              {categorias.map((categoria) => (
                <MenuItem value={categoria.idCategoria}>{categoria.tipoCategoria}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha uma categoria para o produto</FormHelperText>

            <Button type="submit" variant="contained" color="primary">
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  )
}

export default CadastroProduto