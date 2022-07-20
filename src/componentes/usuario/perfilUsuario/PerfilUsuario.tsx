
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';
import { buscaId, buscaProdutobyId, buscar } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';

function PerfilUsuario() {

    const dispatch = useDispatch();

    let navigate = useNavigate();

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

    //Pegar token e Id do use state
    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const id = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

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

    const [usuario, setUsuario] = useState<Usuario | any>({
        idUsuario: 0,
        nomeUsuario: "",
        emailUsuario: "",
        senhaUsuario: "",
        fotoUsuario: "",
        produto: null
    });

    useEffect(() => {
        if (id !== undefined) {
            buscarUsuario(id)
        }
    }, [id])

    async function buscarUsuario(id: string) {
        buscaProdutobyId(`/usuario/${id}`, setUsuario, {
            headers: {
                'Authorization': token
            }
        })
    }
    let foto 
    return (
        <>
            <div>
                <h1>
                    Bem vindo(a) {usuario.nomeUsuario}
                </h1>
            </div>
            <Grid container xs={12} className="container-produtos">
                <Box className='anunciar'>
                    <h1 className='produtos fontFamily'>Meus produtos </h1>
                    <Link to='/formularioProduto' className='linksAnunciar'>
                        <p className='anuncieButton fontFamily'>Anunciar um produto</p>
                    </Link>
                </Box>
                <Grid container spacing={3} xs={9} className="lista-produtos">
                    {
                        usuario.produto?.map((produto: any) => (
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
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='botaoProduto'>
                                    <Link
                                        to={`/formularioProduto/${produto.idProduto}`} className="text-decorator-none">
                                        <Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                className='atualizar-p'>
                                                Atualizar anúncio
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link
                                        to={`/deletarProduto/${produto.idProduto}`}
                                        className="text-decorator-none">
                                        <Box>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                                className='deletar-p'>
                                                Excluir anúncio
                                            </Button>
                                        </Box>
                                    </Link>
                                </CardActions>
                            </Card>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default PerfilUsuario;