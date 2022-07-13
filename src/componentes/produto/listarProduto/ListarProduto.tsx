import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListarProduto() {

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )

  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    if (token === '') {
      toast.warning('Você precisa logar.', {
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

  async function listarProdutos() {
    await buscar('/produto', setProdutos, {
      headers: {
        Authorization: token,
      }
    });
  }

  useEffect(() => {
    listarProdutos()
  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nomeProduto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.valorProduto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.tipoCategoria}
                </Typography>
                <Typography variant="body2" component="p">
                  Anunciado por: {produto.usuario?.nomeUsuario}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link to={`/formularioProduto/${produto.idProduto}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.idProduto}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListarProduto;