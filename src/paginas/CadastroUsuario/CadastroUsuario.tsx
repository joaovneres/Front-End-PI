import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import Usuario from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';


function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [usuario, setUsuario] = useState<Usuario>(
        {
            idUsuario: 0,
            nomeUsuario: '',
            emailUsuario: '',
            senhaUsuario: '',
            fotoUsuario: '',
        })

    const [usuarioResult, setUserResult] = useState<Usuario>(
        {
            idUsuario: 0,
            nomeUsuario: '',
            emailUsuario: '',
            senhaUsuario: '',
            fotoUsuario: '',
        })

    // useEffect(() => {
    //     if (usuarioResult.idUsuario !== 0) {
    //         navigate("/logar")
    //     }

    // }, [usuarioResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(usuario.senhaUsuario === "" || usuario.nomeUsuario === "" || usuario.emailUsuario === ""){
            alert('Possui campos vazios')
        }
        else if (usuario.emailUsuario.includes("@") === false || usuario.emailUsuario.includes(".com") === false){
            alert('Formato esperado no campo e-mail: email@email.com')
        }
        else if (usuario.senhaUsuario.length < 8) {
            alert('A senha deve conter ao menos 8 digitos')
        }
        else if (confirmarSenha !== usuario.senhaUsuario) {
            alert('As senhas não correspondem')
        }
        // O usuário só será cadastrado se todas as condições acima forem satisfeitas  
        else {
            cadastroUsuario(`/usuario/cadastrar`, usuario, setUserResult)
            alert('usuario cadastrado')
        }
    }
    
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'

        >
            <Grid
                item
                xs={6}
                className='imagem2'>
            </Grid>
            <Grid
                item
                xs={6}
                alignItems='center'>
                <Box
                    paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            align='center'
                            component='h3'
                            // className='textos2'
                            >
                            Cadastrar
                        </Typography>
                        <TextField
                            value={ usuario.nomeUsuario }
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="nome"
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={ usuario.emailUsuario }
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) }
                            id="usuario"
                            label="e-mail"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={ usuario.senhaUsuario }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            fullWidth
                            type='password'
                        />
                        <TextField
                            value={ confirmarSenha }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="confirmar senha"
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button
                                    className='btnCancelar'
                                    variant='contained'
                                    color='secondary'>
                                    voltar
                                </Button>
                            </Link>
                            <Button
                                className='cadastrar'
                                variant='contained'
                                type='submit'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid >
    )
}

export default CadastroUsuario