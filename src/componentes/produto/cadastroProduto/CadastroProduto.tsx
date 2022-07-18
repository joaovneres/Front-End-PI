import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';
import Categoria from '../../../models/Categoria';
import { buscar, buscaId, put, post } from '../../../services/Service';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Slide, toast } from 'react-toastify';
import { Box } from '@mui/material';
import "./CadastroProduto.css";

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
        await put('/produto/atualizar', produto, setProduto, {
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
        await post('/produto/cadastrar', produto, setProduto, {
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
    <Grid xs={12} className='containerProduto'>
      <Box className="boxForms">
        <div className='formsProduto'>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
              className='tituloProd fontFamily'>
              Anunciar Produto
            </Typography>
            <Box className='inputs-Prod'>
              <TextField
                id="nomeProduto"
                label="Nome"
                variant="outlined"
                name="nomeProduto"
                margin='dense'
                value={produto.nomeProduto}
                fullWidth
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <TextField
                id="valorProduto"
                label="Qual o valor? "
                variant="outlined"
                name="valorProduto"
                margin="dense"
                fullWidth
                value={produto.valorProduto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <TextField
                id="qtdProduto"
                label="Quantidade"
                variant="outlined"
                name="qtdProduto"
                margin="dense"
                fullWidth
                value={produto.qtdProduto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <TextField
                id="descProduto"
                label="Descrição"
                variant="outlined"
                name="descProduto"
                margin="dense"
                fullWidth
                value={produto.descProduto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <TextField
                id="imgProduto"
                label="Anexe uma imagem"
                variant="outlined"
                name="imgProduto"
                margin="dense"
                fullWidth
                value={produto.imgProduto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <TextField
                id="enderecoProduto"
                label="Endereço"
                variant="outlined"
                name="enderecoProduto"
                margin="dense"
                fullWidth
                value={produto.enderecoProduto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
              />
              <FormControl fullWidth variant='filled'>
                <InputLabel id="selectCategoria-label">Categoria</InputLabel>
                <Select
                  labelId="selectCategoria-label"
                  id="selectCategoria"
                  margin="dense"
                  onChange={(e) =>
                    buscaId(`/categoria/buscar/${e.target.value}`, setCategoria)
                  }
                >
                  {categorias.map((categoria) => (
                    <MenuItem value={categoria.idCategoria}>{categoria.tipoCategoria}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
              </FormControl>
            </Box>
            <Box className='alinharCentro'>
              <Button
                className='finalizar margin-bottom'
                type="submit"
                variant="contained" >
                Cadastrar
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </Grid>
  )
}

export default CadastroProduto