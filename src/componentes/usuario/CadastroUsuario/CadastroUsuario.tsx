import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../../models/Usuario';
import { cadastroUsuario } from '../../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { Slide, toast } from 'react-toastify';


function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [usuario, setUsuario] = useState<Usuario>(
        {
            idUsuario: 0,
            nomeUsuario: "",
            emailUsuario: "",
            senhaUsuario: "",
            fotoUsuario: ""
        })

    const [usuarioResult, setUserResult] = useState<Usuario>(
        {
            idUsuario: 0,
            nomeUsuario: "",
            emailUsuario: "",
            senhaUsuario: "",
            fotoUsuario: ""
        })

    useEffect(() => {
        if (usuarioResult.idUsuario !== 0) {
            navigate("/logar")
        }
    }, [usuarioResult])


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
        if (usuario.senhaUsuario === "" || usuario.nomeUsuario === "" || usuario.emailUsuario === "") {
            toast.warning('Verifique os campos.', {
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
        }
        else if (usuario.emailUsuario.includes("@") === false || usuario.emailUsuario.includes(".com") === false) {
            toast.warning('Formato esperado no campo e-mail: email@email.com', {
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
        }
        else if (usuario.senhaUsuario.length < 8) {
            toast.warning('A senha deve conter ao menos 8 digitos', {
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
        }
        else if (confirmarSenha !== usuario.senhaUsuario) {
            toast.warning('As senhas não correspondem', {
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
        }
        // O usuário só será cadastrado se todas as condições acima forem satisfeitas  
        else {
            cadastroUsuario(`/usuario/cadastrar`, usuario, setUserResult)
            toast.success('Usuário cadastrado com sucesso', {
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
    }

    return (
        <Grid
            container
            className='backGround'
        >
            <Grid
                item
                xs={4}
                alignItems='center'
                className='formulario2'
            >
                <Box>
                    <form className='p-40' onSubmit={onSubmit}>
                        <Typography
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            align='center'
                            component='h3'
                            className='textos2 fontFamily'
                        >
                            Cadastrar
                        </Typography>
                        <Box className='containerForms fontFamily'>
                            <TextField
                                value={usuario.nomeUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="nomeUsuario"
                                label="Nome"
                                variant='outlined'
                                name='nomeUsuario'
                                margin='normal'
                            />
                            <TextField
                                value={usuario.emailUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="emailUsuario"
                                label="E-mail"
                                variant='outlined'
                                name='emailUsuario'
                                margin='normal'
                            />
                            {/*<TextField
                                value={usuario.fotoUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="fotoUsuario"
                                label="Foto"
                                variant='outlined'
                                name='fotoUsuario'
                                margin='normal'
    />*/}
                            <TextField
                                value={usuario.senhaUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id="senhaUsuario"
                                label="Senha"
                                variant='outlined'
                                name='senhaUsuario'
                                margin='normal'
                                type='password'
                            />
                            <TextField
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id="confirmarSenha"
                                label="Confirmar senha"
                                variant='outlined'
                                name='confirmarSenha'
                                margin='normal'
                                type='password'
                            />
                        </Box>
                        <Box className="botaoCU">
                            <Link to='/logar' className='text-decorator-none linkVoltar'>
                                <Button
                                    className='btnCancelar testoB'
                                    variant='contained'>
                                    Voltar
                                </Button>
                            </Link>
                            <Button
                                className='btnCadastrar testoB'
                                variant='contained'
                                type='submit'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid >
            <Grid
                item
                xs={4}
            >
            </Grid>
        </Grid >
    )
}

export default CadastroUsuario