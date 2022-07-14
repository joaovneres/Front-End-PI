import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';

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
            {categorias.map((categoria) => (
                <Box m={2}>
                    <Card
                        variant="outlined">
                        <CardContent>
                            <Typography
                                color="textSecondary"
                                gutterBottom>
                                Tema numero
                                {categoria.idCategoria}
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h2">
                                {categoria.tipoCategoria}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box
                                display="flex"
                                justifyContent="center"
                                mb={1.5}>
                                <Link
                                    to={`/formularioCategoria/${categoria.idCategoria}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button
                                            variant="contained"
                                            className="marginLeft"
                                            size="small"
                                            color="primary">
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
                                            color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default ListaCategoria