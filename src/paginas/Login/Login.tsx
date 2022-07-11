import React, { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { Box } from '@mui/material'
import UsuarioLogin from '../../models/UsuarioLogin'
import { login } from '../../services/Service'
import { useDispatch } from 'react-redux'
import { addId, addToken } from '../../store/tokens/action'

function Login() {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            idLogin: 0,
            usuarioLogin: '',
            senhaLogin: '',
            tokenLogin: ''
        }

    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    useEffect(() => {
        if (usuarioLogin.tokenLogin !== "") {

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + usuarioLogin.tokenLogin)
            console.log("ID: " + usuarioLogin.idLogin)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(usuarioLogin.tokenLogin))
            dispatch(addId(usuarioLogin.idLogin.toString()))    // Faz uma conversão de Number para String
            navigate('/home')
        }
    }, [usuarioLogin.tokenLogin])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuario/logar`, usuarioLogin, setToken)
            alert('Usuário logado com sucesso!');
            console.log(usuarioLogin);

        } catch (error) {
            alert('Dados inconsistentes')
        }
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
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
                            value={usuarioLogin.usuarioLogin}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="E-mail"
                            variant='outlined'
                            name='usuarioLogin'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={usuarioLogin.senhaLogin}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="Senha"
                            variant='outlined'
                            name='senhaLogin'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Button
                                type='submit'
                                variant='contained'
                                className='button'>
                                Logar
                            </Button>
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
                        <Link to='/cadastro'>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                gutterBottom
                                align='center'
                                className='textos1'>
                                Cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login