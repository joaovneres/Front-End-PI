import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import './listaProdutos.css'

function ListarProduto() {

  function no() {
    toast.info('Função não implementada', {
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
  const [produtos, setProdutos] = useState<Produto[]>([])

  async function listarProdutos() {
    await buscar('/produto/buscar', setProdutos);
  }

  useEffect(() => {
    listarProdutos()
  }, [produtos.length])

  //Estilizar cards

  const useStyles = makeStyles({
    root: {
      width: 350,
      margin: 15
    },
    media: {
      height: 250,
    },
  });

  const classes = useStyles();

  return (
    <>
      <Grid container xs={12} className="container-produtos">
        <Box className='anunciar'>
          <h1 className='produtos fontFamily'>Produtos</h1>
        </Box>
        <Grid container spacing={3} xs={9} className="lista-produtos">
          {
            produtos.map(produto => (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={produto.imgProduto}
                    title={produto.nomeProduto}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                      {produto.nomeProduto}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                      R$ {produto.valorProduto}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                      {produto.descProduto}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                      Quantidade em estoque: {produto.qtdProduto}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                      Anunciado em: {produto.enderecoProduto}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                      Anunciado por: {produto.usuario?.nomeUsuario}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className='botaoProduto'>

                  <Box>
                    <Button
                      onClick={no}
                      variant="contained"
                      size="small"
                      className='atualizar-p'>
                      <img src='https://i.imgur.com/Nn5WV2j.png' alt='carrinho' className='carrinho' />
                      Comprar
                    </Button>
                  </Box>

                </CardActions>
              </Card>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}

export default ListarProduto;