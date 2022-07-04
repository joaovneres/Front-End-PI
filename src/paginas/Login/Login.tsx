import React from 'react'
import {Grid, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Login.css'
import { Box } from '@mui/material'

function Login() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            align='center'
                            component='h3'
                            className='textos1'>
                            Entrar
                        </Typography>
                        <TextField
                            id="usuario"
                            label="E-mail"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            label="Senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decoration-none'>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    className='button'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box
                        display='flex'
                        justifyContent='center'
                        marginTop={2}>
                        <Box marginRight={1}>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                gutterBottom
                                align='center'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Typography
                            variant="subtitle1"
                            color="initial"
                            gutterBottom
                            align='center'
                            className='textos1'>
                            Cadastre-se
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login