import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { Slide, toast } from 'react-toastify';

function Navbar() {

    function goLogout() {
        dispatch(addToken(''))

        toast.success('Usuário saiu com sucesso.', {
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

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    let rota = useLocation();

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
                    <Box display="flex" justifyContent="start" >
                    <Link to='/home'>
                    <Box mx={1}>
                        
                            <button className="buttonf"><span> Home </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/formularioProduto' className='tdn links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Produto
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/formularioProduto' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Produto </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/formularioCategoria' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Categorias
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/formularioCategoria' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Categorias </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/sobre' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Sobre
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/sobre' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Sobre </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        <Link to='/logar' className='links'>
                            <Box mx={1}>
                            <button className="buttonf"><span> Logar </span></button>
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
                    <Link to='/home' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Home </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/formularioProduto' className='tdn links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Produto
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/formularioProduto' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Produto </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/formularioCategoria' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Categorias
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/formularioCategoria' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Categorias </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        {/* <Link to='/sobre' className='links'>
                            <Box mx={1} className='cursor card-nav'>
                                <Typography variant="h6" className='navegar'>
                                    Sobre
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to='/sobre' >
                            <Box mx={1}>
                            <button className="buttonf"><span> Sobre </span></button>
                                {/* <Typography variant="h6" className='button'>
                                    Início
                                </Typography> */}
                            </Box>
                        </Link>
                        <Box className='links cursor card-nav' onClick={goLogout}>
                        <button className="buttonf"><span> Sair </span></button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }

    if (rota.pathname === '/logar' || rota.pathname === '/cadastro') {
        navbarComponent = (<></>)
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;