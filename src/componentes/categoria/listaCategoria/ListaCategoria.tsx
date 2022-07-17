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
            <Box className='linha altura-l just-center margin'>
                {categorias.map((categoria) => (
                    <Box className='container-card' m={3}>
                        <Card
                            className='cardCategoria'
                            variant="outlined">
                            <CardContent>
                                <Typography
                                    className='nomeCategoria'
                                    variant="h5"
                                    component="h2">
                                    {categoria.tipoCategoria}
                                </Typography>
                                <div className='linha diminuirAltura'>
                                    <div className='linhas '>
                                        <h3 className='atributo'>
                                            Tamanho:
                                        </h3>
                                    </div>
                                    <div className='linhas '>
                                        <p className='atributo'>
                                            {categoria.tamanhoCategoria}
                                        </p>
                                    </div>
                                </div>
                                <div className='linha diminuirAltura p-botton'>
                                    <div className='linhas'>
                                        <h3 className='atributo'>
                                            É alimenticia?
                                        </h3>
                                    </div>
                                    <div className='linhas'>
                                        <p className='atributo'>
                                            {categoria.alimenticiaCategoria ? "Sim" : "Não"}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className='linha'>
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
                                </div>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default ListaCategoria