import { Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './DeletarProduto.css';

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
      navigate('/usuario/:id')
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
    navigate('/usuario/:id');
  }

  const useStyles = makeStyles({
    root: {
      width: 350,
      margin: 15,
    },
    media: {
      height: 250,
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className='corpo'>
        <div className='membro'>
          <div className='cardDelete'>
            <CardContent>
              <Box className='boxProdu'>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                        {produto?.nomeProduto}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                        R$ {produto?.valorProduto}
                      </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        {produto?.descProduto}
                      </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        Quantidade em estoque: {produto?.qtdProduto}
                      </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        Anunciado em: {produto?.enderecoProduto}
                      </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        Anunciado por: {produto?.usuario?.nomeUsuario}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <h1 className='h1'>
                  Você tem certeza ?
                </h1>
              </Box>
            </CardContent>

            <div className='botoes'>
              <Box
                display='flex'
                justifyContent='start'
                ml={1}
                mb={2}>
                <Box mx={2}>
                  <Button
                    onClick={sim}
                    variant='contained'
                    size='large'
                    color='primary'
                    className='marginLeft sim'>
                    Sim
                  </Button>
                </Box>
                <Box mx={2}>
                  <Button
                    onClick={nao}
                    variant='contained'
                    size='large'
                    className='nao'>
                    Não
                  </Button>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeletarProduto