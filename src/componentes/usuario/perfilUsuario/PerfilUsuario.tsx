
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import {  buscaProdutobyId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './PerfilUsuario.css';

function PerfilUsuario() {

    let navigate = useNavigate();


    //Pegar token e Id do use state
    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const id = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    useEffect(() => {
        if (token === '') {
            toast.warning('Você precisa logar, para acessar o seu perfil.', {
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
    return (
        <>
            <div className='container-perfil'>
                <div className='usuario-perfil'>
                    <div >
                        <img src={usuario.fotoUsuario} className='foto-perfil' alt={usuario.nomeUsuario}/>
                    </div>
                    <h1 className='fontFamily'>Olá, {usuario.nomeUsuario}</h1>
                    <p className='textinho'>
                        Aqui você pode atualizar, deletar e cadastrar novos produtos.
                    </p>
                    <Link to='/formularioProduto' className='botao-anunciar'>
                        <p className='anuncieButton fontFamily'>Anunciar um produto</p>
                    </Link>
                </div>
                <div className="produto-perfil">
                    <Box className='anunciar'>
                        <h1 className='produtos fontFamily'>Meus produtos </h1>
                    </Box>
                    <hr />
                    <Grid className="meus-produtos">
                        {
                            usuario.produto?.map((produto: any) => (
                                <Card className='sombra'>
                                    <CardActionArea>
                                        <CardMedia
                                            className='media'
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
                                                    className='atualizar-perfil'>
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
                            )
                            )}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default PerfilUsuario;