import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { Button, Container, TextField, Typography } from '@material-ui/core';

function CadastroCategoria() {
  //Navegar entre as telas
  let navigate = useNavigate()
  const { idCategoria } = useParams<{ idCategoria: string }>()

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  //Iniciando categoria vazia
  const [categoria, setCategoria] = useState<Categoria>({
    idCategoria: 0,
    tipoCategoria: "",
    tamanhoCategoria: "",
    alimenticiaCategoria: false
  });

  // Verfica se o usuario está logado quando a tela é carregada
  useEffect(() => {
    if (token === '') {
      alert('Ta tirando já');
      navigate('/logar');
    }
  }, [token]);

  async function findById(idCategoria: string) {
    await buscaId(`/categoria/${idCategoria}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (idCategoria !== undefined) {
      findById(idCategoria);
    }
  }, [idCategoria]);

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (idCategoria !== undefined) {
      try {
        await put(`/categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        alert('A categoria foi atualizada');
      } catch (error) {
        console.log(`Deu erro: ${error}`);
        alert('Erro, por favor, verifique os campos');
      }
    } else {
      try {
        await post(`categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        alert('Tema cadastrado com sucesso');
      } catch (error) {
        console.log(`Deu erro: ${error}`);
        alert('Erro, por favor, verifique os campos');
      }
    }
    back();
  }

  function back() {
    navigate('/categorias');
  }

  return (
    <>
      <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Formulário de cadastro de tema
          </Typography>
          <TextField
            id="descricao"
            label="Descrição"
            variant="outlined"
            name="descricao"
            margin="normal"
            fullWidth
            value={categoria.tamanhoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <TextField
            id="descricao"
            label="Descrição"
            variant="outlined"
            name="descricao"
            margin="normal"
            fullWidth
            value={categoria.tipoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <TextField
            id="descricao"
            label="Descrição"
            variant="outlined"
            name="descricao"
            margin="normal"
            fullWidth
            value={categoria.alimenticiaCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />

          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </form>
      </Container>
    </>
  )
}

export default CadastroCategoria