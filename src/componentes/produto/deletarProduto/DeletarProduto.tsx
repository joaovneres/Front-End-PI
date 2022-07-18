import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarProduto() {
  let navigate = useNavigate();

  const { idProduto } = useParams<{ idProduto: string }>();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const [produto, setProduto] = useState<Produto>();

  useEffect(() => {
    if (token === '') {
      toast.warning('Você precisa logar, para deletar um produto.', {
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

  useEffect(() => {
    if (idProduto !== undefined) {
      findPostById(idProduto)
    }
  }, [idProduto])

  async function findPostById(idProduto: string) {
    buscaId(`/produto/buscar/${idProduto}`, setProduto);
  }

  async function sim() {
    try {
      await deleteId(`/produto/deletar/${idProduto}`, {
        headers: {
          Authorization: token,
        }
      })
      toast.success('Produto deletado com sucesso.', {
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
      navigate('/produto')
    } catch (error) {
      console.log(`Erro: ${error}`)
      toast.error('Erro ao deletar produto.', {
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

  function nao() {
    navigate('/produto');
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o produto:
              </Typography>
              <Typography color="textSecondary">{produto?.nomeProduto}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarProduto