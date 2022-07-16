import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
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
                                A BotanicHouse® é uma plataforma e-commerce criada com o objetivo de conectar consumidores do eixo urbano das grandes cidades com os produtores rurais de plantas ornamentais, silvestres e alimentícias.
                            </Typography>
                            <br />
                            <Typography className='descricao'>
                            Aqui você poderá navegar entre nossas categorias e escolher as espécies de plantas que mais lhe agrada e se adaptam ao seu ambiente. Com uma breve descrição, você facilmente saberá se sua escolha é adequada ao seu tipo de ambiente e receber sua muda direto em sua residência, contribuindo para um mundo mais verde e sustentável.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/*  A importância */}

                <Grid container xs={12} className='container-d'>
                    <Grid xs={5} className='box-img-import'>
                        <img src="https://i.imgur.com/s3z1NAc.png" alt="" className='img-import' />
                    </Grid>
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
                        <h1 className='equipeTitulo fontFamily'>A equipe</h1>
                        <p className='equipeParagrafo'> Somos um time de desenvolvedores motivados a fazer a diferença</p>
                        <Box className='cards'>
                            <div className="card">
                                <img src="https://i.imgur.com/byiphkch.jpg" alt="Carlos" width='100%' />
                                <h1>Carlos</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="https://www.linkedin.com/in/carlos-rene-82b572239/" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/CarlosRene987" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/vPFSQqy.png" alt="Cirano" width='100%' />
                                <h1>Cirano</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="https://www.linkedin.com/in/cirano-alves-belardony-37a43515b/" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/CiranoB" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/rhEMgUe.png" alt="Cristiano" width='100%' />
                                <h1>Cristiano</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="https://www.linkedin.com/in/cristianotp/" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/Cr7stian8" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/igAxAB0.png" alt="Eric" width='100%' />
                                <h1>Eric</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="https://www.linkedin.com/in/ericalanlima/" className='card-link'><i className="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/eric-aln" className='card-link'><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://i.imgur.com/P6xahzp.png" alt="Neres" width='100%' />
                                <h1>Neres</h1>
                                <p className="title">Desenvolvedor FullStack Java Jr.</p>
                                <div className="box-link">
                                    <a href="https://www.linkedin.com/in/jvneres/" className='card-link'><i className="fa fa-linkedin" ></i></a>
                                    <a href="https://github.com/joaovneres" className='card-link'><i className="fa fa-github"></i></a>
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