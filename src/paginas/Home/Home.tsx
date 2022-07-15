import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';

function Home() {
  return (
    <>
      {/* Display da página */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className='caixaH'
      >

        {/* Primeiro Grid */}

        <Grid alignItems="center" item xs={6} className="tamanhoHome">
          <Box paddingX={20} >
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className='titulo'
            >Mais vida, menos cinza!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className='titulo'
            >Transforme a cara do seu lar com nossos itens diretamente de produtores rurais.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
          </Box>
        </Grid>

        { /* Segundo Grid */}

        <Grid item xs={6} className="tamanhoHome">
          <img src="https://i.imgur.com/fMfpUeY.png" alt="" width="85%" className='LogoHome' />
        </Grid>

        <Grid xs={12} className='imgHome'>
          <div className='p-30vh'>
            <Box className='imgebtn'>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="txt-img">
                Conecte-se com as pessoas que trabalham para
                ver um mundo cheio de vida. Nossa loja permite que
                você encontre as mais diversas espécies de plantas
                para fazer da sua casa um verdadeiro jardim urbano
              </Typography>
              <div className='btn-img'>
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    align="center">
                    Confira nossos produtos
                  </Typography>
                </Box>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;