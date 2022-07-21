import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { Slide, toast } from 'react-toastify';

function Navbar() {
    /* Usuarios */

    const { idUsuario } = useParams<{ idUsuario: string }>()

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

    const usuario = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    let rota = useLocation();

    var navbarComponent

    // Caso logado na home:
    if (token !== "" && rota.pathname === '/home' || rota.pathname === '/') {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav-black'>
                    <Link to='/home' className='links card-nav-black'>
                        <Box className='cursor card-nav-black'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar-black' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home'>
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Home </span></button>
                            </Box>
                        </Link>
                        <Link to='/produto' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Produtos </span></button>
                            </Box>
                        </Link>
                        <Link to='/categoria' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Categorias </span></button>
                            </Box>
                        </Link>
                        <Link to='/sobre' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Sobre </span></button>
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="start" >
                        <Link to={`/usuario/${usuario}`}>
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Meu perfil </span></button>
                            </Box>
                        </Link>

                        <Box className='links cursor card-nav-black' onClick={goLogout}>
                            <button className="buttonf-black fontFamily"><span> Sair </span></button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }

    // Caso logado fora da home:
    if (token !== "" && rota.pathname !== '/home') {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav'>
                    <Link to='/home' className='links card-nav'>
                        <Box className='cursor card-nav'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar' />
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home'>
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Home </span></button>
                            </Box>
                        </Link>
                        <Link to='/produto' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Produtos </span></button>
                            </Box>
                        </Link>
                        <Link to='/categoria' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Categorias </span></button>
                            </Box>
                        </Link>
                        <Link to='/sobre' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Sobre </span></button>
                            </Box>
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="start" >
                        <img src='https://i.imgur.com/Nn5WV2j.png' alt='carrinho' className='carrinhoNav' />
                        <Link to={`/usuario/${usuario}`}>
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Meu perfil </span></button>
                            </Box>
                        </Link>
                        <Box className='links cursor card-nav' onClick={goLogout}>
                            <button className="buttonf fontFamily"><span> Sair </span></button>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
    }

    // Caso deslogado e fora da home
    if (token === "" && rota.pathname !== '/home') {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav'>
                    <Link to='/home' className='links card-nav'>
                        <Box className='cursor card-nav'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Home </span></button>
                            </Box>
                        </Link>
                        <Link to='/produto' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Produtos </span></button>
                            </Box>
                        </Link>
                        <Link to='/categoria' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Categorias </span></button>
                            </Box>
                        </Link>
                        <Link to='/sobre' >
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Sobre </span></button>
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="start" className='card-nav'>

                        <Link to='/logar' className='links'>
                            <Box mx={1}>
                                <button className="buttonf fontFamily"><span> Logar </span></button>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
    }

    // Caso deslogado e na home
    if (token === "" && rota.pathname === '/home' || rota.pathname === '/') {
        navbarComponent =
            <AppBar className='header' position='sticky'>
                <Toolbar variant="dense" className='card-nav-black'>
                    <Link to='/home' className='links card-nav-black'>
                        <Box className='cursor card-nav-black'>
                            <img alt='Logo Botanic House' src="https://i.imgur.com/rgsqm4w.png" className='logo-navbar-black' />
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home'>
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Home </span></button>
                            </Box>
                        </Link>
                        <Link to='/produto' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Produtos </span></button>
                            </Box>
                        </Link>
                        <Link to='/categoria' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Categorias </span></button>
                            </Box>
                        </Link>
                        <Link to='/sobre' >
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Sobre </span></button>
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="start" >

                        <Link to='/logar' className='links'>
                            <Box mx={1}>
                                <button className="buttonf-black fontFamily"><span> Logar </span></button>
                            </Box>
                        </Link>
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