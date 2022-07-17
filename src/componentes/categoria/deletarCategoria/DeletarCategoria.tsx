import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './DeletarCategoria.css'

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

            toast.warning('Você precisa logar, para deletar uma categoria.', {
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

            navigate('/logar')
        }
    }, [token])

    async function findById(idCategoria: string) {
        await buscaId(`/categoria/buscar/${idCategoria}`, setCategoria);
    }

    useEffect(() => {
        if (idCategoria !== undefined) {
            findById(idCategoria)
        }
    }, [idCategoria])

    async function sim() {
        try {
            await deleteId(`/categoria/deletar/${idCategoria}`, {
                headers: {
                    Authorization: token,
                }
            })

            toast.success('Categoria deletada com sucesso.', {
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

            navigate('/categoria')
        } catch (error) {
            console.log(`Erro ao deletar: ` + error);

            toast.error('Erro ao deletar categoria.', {
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
        navigate('/categoria')
    }

    return (
        <>
            <div className='corpo'>
                <div className='membro'>
                    <div className='cardDelete'>
                        <CardContent>
                            <Box justifyContent='center'>
                                <h2 className='h2'>
                                    {categoria?.tipoCategoria} será apagado(a)
                                </h2>
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
    )
}

export default DeletarCategoria;