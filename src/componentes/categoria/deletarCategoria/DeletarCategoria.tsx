import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarCategoria() {
    let navigate = useNavigate();
    const { idCategoria } = useParams<{ idCategoria: string }>()

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    );

    const [categoria, setCategoria] = useState<Categoria>()

    // Verifiicando se o usuário está logado
    useEffect(() => {
        if (token === '') {
            alert('Você não está logado !')
            navigate('/logar')
        }
    }, [token])

    async function findById(idCategoria: string) {
        await buscaId(`/categoria/${idCategoria}`, setCategoria, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        if (idCategoria !== undefined) {
            findById(idCategoria)
        }
    }, [idCategoria])

    async function sim() {
        await deleteId(`/categoria/${idCategoria}`, {
            headers: {
                Authorization: token,
            }
        })
        alert('Tema apagado com sucesso (teoricamente)');
        navigate('/categoria')
    }

    function nao() {
        navigate('/categoria')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography
                                color='textSecondary'
                                gutterBottom>
                                Deseja deletar a Categoria? :
                            </Typography>
                            <Typography
                                color='textSecondary'>
                                {categoria?.tipoCategoria}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
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
                                    className='marginLeft'>
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button
                                    onClick={nao}
                                    variant='contained'
                                    size='large'
                                    color='secondary'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarCategoria;