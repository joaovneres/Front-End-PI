import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import './listaProdutos.css'

function ListarProduto() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  async function listarProdutos() {
    await buscar('/produto/buscar', setProdutos);
  }

  useEffect(() => {
    listarProdutos()
  }, [produtos.length])

  return (
    <>
      <Grid container xs={12} className="container-produtos">
        <Grid container spacing={2} xs={10} className="lista-produtos">
          {
            produtos.map(produto => (
              <Grid item xs={3}>
                <Box >
                  <Card variant="outlined">
                      <Box className='img-list-prod'>
                      <img src={produto.imgProduto} alt="Produto"/>
                      </Box>
                    <CardContent>
                      <Typography component="h2" className='nomeProduto'>
                        {produto.nomeProduto}
                      </Typography>
                      <Typography component="p">
                        R$ {produto.valorProduto}
                      </Typography>
                      <Typography component="p">
                        {produto.categoria?.tipoCategoria}
                      </Typography>
                      <Typography component="p">
                        Local: {produto.enderecoProduto}
                      </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/deletarProduto/${produto.idProduto}`} className="text-decorator-none">
                          <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                              Comprar
                            </Button>
                          </Box>
                        </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}

export default ListarProduto;