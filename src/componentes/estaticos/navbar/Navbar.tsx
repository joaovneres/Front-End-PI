import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import{Box} from '@mui/material'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant="dense" className='color-dark'>
                    <Link to='/home' className='text-decorator-none'>
                    <Box className='cursor'>
                        <Typography variant="h5">
                            Casa das mudas
                        </Typography>
                    </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Categorias
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Anunciar muda
                            </Typography>
                        </Box>
                        <Link to='/logar' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Login
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