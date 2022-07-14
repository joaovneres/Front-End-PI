import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import './CadastroCategoria.css';
import { Slide, toast } from 'react-toastify';
import { Box } from '@mui/material';


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

      toast.warning('Você precisa logar, para cadastrar uma categoria.', {
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

  async function findById(idCategoria: string) {
    await buscaId(`/categoria/buscar/${idCategoria}`, setCategoria,);
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

        toast.success('Categoria atualizada com sucesso.', {
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
        console.log(`Deu erro: ${error}`);

        toast.error('Erro ao atualizar categoria, tente novamente.', {
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
        await post(`categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Categoria cadastrada com sucesso.', {
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
        console.log(`Deu erro: ${error}`);

        toast.error('Erro ao cadastrar categoria, tente novamente.', {
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
    navigate('/categoria');
  }

  return (
    <>
      <Grid xs={12} className='teste-c'>
        <Box paddingX={60} paddingY={13}>
          <div id='form-c'>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h3"
                color="textSecondary"
                component="h1"
                align="center"
                className='titulo-c'>
                Cadastre uma nova categoria
              </Typography>
              <TextField
                id="descricao"
                label="Descrição"
                variant="outlined"
                name="tipoCategoria"
                margin="normal"
                fullWidth
                value={categoria.tipoCategoria}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <TextField
                id="descricao"
                label="Qual o tamanho? "
                variant="outlined"
                name="tamanhoCategoria"
                margin="normal"
                fullWidth
                value={categoria.tamanhoCategoria}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <TextField
                id="descricao"
                label="é alimenticia?"
                variant="outlined"
                name="alimenticiaCategoria"
                margin="normal"
                fullWidth
                value={categoria.alimenticiaCategoria}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />

              <Button
                className='finalizar'
                type="submit"
                variant="contained" >
                Finalizar
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </>
  )
}

export default CadastroCategoria