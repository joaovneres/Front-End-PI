import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    return (
        <>
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
                        <Box mx={1} className='cursor card-nav'>
                            <Typography variant="h6" className='navegar'>
                                Catálogo
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor card-nav'>
                            <Typography variant="h6" className='navegar'>
                                Categorias
                            </Typography>
                        </Box>
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
        </>
    )
}

export default Navbar;