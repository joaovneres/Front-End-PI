import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Sobre.css'
function Sobre() {
    return (
        <>
            <Grid container className="caixa">
                {/* O projeto */}
                <Grid item xs={12} className='imgProjeto'>
                    <Grid xs={7}>
                        <Box className="projeto">
                            <Typography variant='h5' className='titulo'>
                                O Projeto
                            </Typography>
                            <Typography className='descricao'>
                                A BotanicHouse® é uma plataforma e-commerce criada com o objetivo de conectar consumidores do eixo urbano das grandes cidades com os produtores rurais de plantas ornamentais, silvestres e alimentícias. (verificar categorias)
                                Aqui você poderá navegar entre nossas categorias e escolher as espécies de plantas que mais lhe agrada e se adaptam ao seu ambiente. Com uma breve descrição, você facilmente saberá se sua escolha é adequada ao seu tipo de ambiente e receber sua muda direto em sua residência, contribuindo para um mundo mais verde e sustentável.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/*  A importância */}

                <Grid item xs={12} className='container-d'>
                    <Grid xs={7}>
                        <Box className="importancia" >
                            <Typography variant='h5' className='titulo'>
                                A importância
                            </Typography>
                            <Typography className='descricao'>
                                Este projeto tornará mais acessível a venda e compra de plantas próprias para o cultivo dentro de casa e apartamentos aumentando assim, as relações econômicas entre áreas urbanas e rurais, além de arborizar os espaços urbanos.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/*  A Equipe */}

                <Grid item xs={12} className='containerEquipe'>
                    <Box>
                        <h1 className='equipeTitulo'>A equipe</h1>
                        <p className='equipeParagrafo'> Somos um time de desenvolvedores motivados a fazer a diferença</p>
                        <Box className='cards'>
                            <div className="card">
                                <img src="https://i.imgur.com/Yovj25U.jpg" alt="John" width='100%' />
                                <h1>Cristiano</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="#" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/sO00v9W.png" alt="John" width='100%' />
                                <h1>Neres</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="#" className='card-link'><i className="fa fa-linkedin" ></i></a>
                                    <a href="#" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/Yovj25U.jpg" alt="John" width='100%' />
                                <h1>Carlos</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="#" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/Yovj25U.jpg" alt="John" width='100%' />
                                <h1>Eric</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="#" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/Yovj25U.jpg" alt="John" width='100%' />
                                <h1>Cirano</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="#" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                        </Box>
                    </Box>
                </Grid>
                {/*  Missão Visão e Valores */}

                <Grid item xs={12} className='container-mvv'>
                    <Grid className='missao'>Missão</Grid>
                    <Grid className='visao'>Visão</Grid>
                    <Grid className='valores'>Valores</Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Sobre