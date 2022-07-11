import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';
import Categoria from '../../../models/Categoria';
import { buscar, buscaId, put, post } from '../../../services/Service';
import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';

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
      alert("Você precisa entrar");
      navigate('/logar');
    }
  }, [token]);

  async function buscarCategoria() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
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
    await buscaId(`/postagens/${idProduto}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
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
        alert('Produto alterado com sucesso');
      } catch (error) {
        console.log(`Erro: ${error}`);
        alert('Falha ao atualizar produto.');
      }
    } else {
      try {
        await post('/produto', produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto cadastrado')
      } catch (error) {
        console.log(`Erro: ${error}`);
        alert('Falha ao criar a postagem');
      }
    }
    back();
  }

  function back() {
    navigate('/produtos');
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
            rows={3}
            value={produto.valorProduto}
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
            rows={3}
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
            rows={3}
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
            rows={3}
            value={produto.enderecoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateProduto(e)}
          />

          <FormControl fullWidth variant='filled'>
            <InputLabel id="selectCategoria-label">Categoria</InputLabel>
            <Select
              labelId="selectCategoria-label"
              id="selectCategoria"
              onChange={(e) =>
                buscaId(`/categoria/${e.target.value}`, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {categorias.map((categoria) => (
                <MenuItem value={categoria.idCategoria}>{categoria.tipoCategoria}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>

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