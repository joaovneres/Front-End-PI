import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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
        alert('Você precisa estar logado');
        navigate('/logar');
      }
    }, [token]);
  
    useEffect(()=>{
      if (idProduto !== undefined) {
        findPostById(idProduto)
      }
    }, [idProduto])
  
    async function findPostById(idProduto: string) {
      buscaId(`/postagens/${idProduto}`, setProduto, {
        headers: {
          Authorization: token,
        }
      })
    }
  
    async function sim() {
      try {
        await deleteId(`/produto/${idProduto}`, {
          headers: {
            Authorization: token,
          }
        })
        alert('Produto apagada')
        navigate('/produtos')
      } catch (error) {
        console.log(`Erro: ${error}`)
        alert('Falha ao apagar a produto')
      }
    }
  
    function nao(){
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