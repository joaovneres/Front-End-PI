import React, { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { Box } from '@mui/material'
import UsuarioLogin from '../../models/UsuarioLogin'
import { login } from '../../services/Service'
import { useDispatch } from 'react-redux'
import { addId, addToken } from '../../store/tokens/action'
import { toast, Slide } from 'react-toastify'

function Login() {

  function alertaSocialMedia() {

    toast.info('Função não implementada', {
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

  let navigate = useNavigate();

  let dispatch = useDispatch()

  const [token, setToken] = useState('');

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    idLogin: 0,
    usuarioLogin: '',
    senhaLogin: '',
    tokenLogin: ''
  });

  // Crie mais um State para pegar os dados retornados a API
  const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
    idLogin: 0,
    usuarioLogin: '',
    senhaLogin: '',
    tokenLogin: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token))
      navigate('/home');
    }
  }, [token]);

  useEffect(() => {
    if (respUsuarioLogin.tokenLogin !== "") {
      
      // Guarda as informações dentro do Redux (Store)
      dispatch(addToken(respUsuarioLogin.tokenLogin))
      dispatch(addId(respUsuarioLogin.idLogin.toString()))    // Faz uma conversão de Number para String
      navigate('/home')
    }
  }, [respUsuarioLogin.tokenLogin])

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuario/logar`, usuarioLogin, setRespUsuarioLogin);

      toast.success('Usuário logado com sucesso.', {
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

    } catch (error) {

      toast.error('Dados não conferem, tente novamente.', {
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
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className='body'>
      <Grid
        alignItems="center"
        xs={4}
        className='formulario'>
        <Box
          paddingX={8}
          paddingY={7}>
          <form
            onSubmit={logar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1 fontFamily">
              Entrar
            </Typography>
            <TextField
              value={usuarioLogin.usuarioLogin}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuarioLogin"
              label="E-mail"
              color='primary'
              variant="outlined"
              name="usuarioLogin"
              margin="normal"
              fullWidth
              className='teste'
            />
            <TextField
              value={usuarioLogin.senhaLogin}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senhaLogin"
              label="Senha"
              variant="outlined"
              name="senhaLogin"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box className="botaoCU">
              <Link to='/home' className='text-decorator-none linkVoltar'>
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
                Entrar
              </Button>
            </Box>
          </form>
          <Box marginTop={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className='branco'>
              Ou utilize suas redes sociais:
            </Typography>
          </Box>
          <Grid container direction="row"
            justifyContent="center"
            alignItems="center">
            <Box className='boxSocialMedia' onClick={alertaSocialMedia}>
              <i><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png"
                width='40px' alt="" /></i>
            </Box>
            <Box className='boxSocialMedia' onClick={alertaSocialMedia}>
              <i><img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                width='40px' alt="" /></i>
            </Box>
          </Grid>

          <Box
            display="flex"
            justifyContent="center"
            marginTop={1}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className='branco'>
                Não tem uma conta?
              </Typography>
            </Box>
            <Link
              to="/cadastro">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1">
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login;