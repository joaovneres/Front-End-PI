import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import './ListaCategoria.css'

function ListaCategoria() {


    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function getCategoria() {
        await buscar(`/categoria/buscar`, setCategorias);
    }

    useEffect(() => {
        getCategoria();
    }, [categorias.length]);

    

    return (
        <>
            <article className='linha-t'>
                <h1 className='categoria-t'>Categorias</h1>

                <Link to='/formularioCategoria' className='nova-c'>
                    <p className='p'>Nova categoria</p>
                </Link>

            </article>
            <div className='linha altura-l just-center'>
                {categorias.map((categoria) => (
                    <Box m={4} width='300px'>
                        <Card
                            variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="h2">
                                    {categoria.tipoCategoria}
                                </Typography>
                                <div className='linha'>
                                    <div className='linhas'>
                                        <Typography
                                            variant="h5"
                                            component="h2">
                                            Tamanho:
                                        </Typography>
                                    </div>
                                    <div className='linhas'>
                                        <Typography
                                            variant="h5"
                                            component="h2">
                                            {categoria.tamanhoCategoria}
                                        </Typography>
                                    </div>
                                </div>
                                <div className='linha'>
                                    <div className='linhas'>
                                        <Typography
                                            variant="h5"
                                            component="h2">
                                            Alimenticia:
                                        </Typography>
                                    </div>
                                    <div className='linhas'>
                                        <Typography
                                            variant="h5"
                                            component="h2">
                                            {categoria.alimenticiaCategoria?"Sim":"Não"}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    mb={1}>
                                    <Link
                                        to={`/formularioCategoria/${categoria.idCategoria}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                className='atualizar-c'>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link
                                        to={`/deletarCategoria/${categoria.idCategoria}`}
                                        className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                                className='deletar-c'>
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </div>
        </>
    )
}

export default ListaCategoria