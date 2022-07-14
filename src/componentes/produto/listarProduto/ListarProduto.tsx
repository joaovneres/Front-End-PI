import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';

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
                <img src={produto.imgProduto} alt="Produto"/>
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