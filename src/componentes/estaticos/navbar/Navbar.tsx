import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        navigate('/logar')
    }

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    var navbarComponent
    if (token === "") {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav'>
                    <Link to='/home' className='links card-nav'>
                        <Box className='cursor card-nav'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start" className='card-nav'>
                        <Link to='/home' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Início
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioProduto'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Produto
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioCategoria'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Categorias
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/logar' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Entrar
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
    }
    if (token !== "") {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav'>
                    <Link to='/home' className='links card-nav'>
                        <Box className='cursor card-nav'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start" className='card-nav'>
                        <Link to='/home' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Início
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioProduto' className='tdn'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Produto
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioCategoria'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Categorias
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Box className='links cursor card-nav' onClick={goLogout}>
                            <Typography variant="h6" className='navegar'>
                                Sair
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;