import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Sobre.css'
function Sobre() {
    return (
        <>
            <Grid container className="caixa">
                <Grid item xs={4} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt='teste' width="90%" />
                </Grid>
                <Grid item xs={12}>
                    <Box className="box-text-d">
                        <Typography variant='h5' className='titulo'>
                            O Projeto
                        </Typography>
                        <Typography className='descricao'>
                            A BotanicHouse® é uma plataforma e-commerce criada com o objetivo de conectar consumidores do eixo urbano das grandes cidades com os produtores rurais de plantas ornamentais, silvestres e alimentícias. (verificar categorias)
                            Aqui você poderá navegar entre nossas categorias e escolher as espécies de plantas que mais lhe agrada e se adaptam ao seu ambiente. Com uma breve descrição, você facilmente saberá se sua escolha é adequada ao seu tipo de ambiente e receber sua muda direto em sua residência, contribuindo para um mundo mais verde e sustentável.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className="box-text-d">
                        <Typography variant='h5' className='titulo'>
                            Nosso proposito?
                        </Typography>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur fugit, voluptas delectus voluptates eaque corrupti, tempore cum cupiditate pariatur facere alias ducimus quo possimus, quidem sed temporibus ad officiis?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt='teste' width="90%" />
                </Grid>
            </Grid>
        </>
    )
}

export default Sobre