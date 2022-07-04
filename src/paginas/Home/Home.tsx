import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        className='caixa'
      >

        {/* Primeiro Grid */}

        <Grid alignItems="center" item xs={6} >
          <Box paddingX={20} >

            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className='titulo'
            >Casa das mudas
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className='titulo'
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius voluptate illum rerum, blanditiis officia ipsa expedita dicta magnam id repellat, quod facere rem commodi ducimus fugiat voluptatem fuga aliquam.
            </Typography>

          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Link to="/sobre" className='text-decorator-none'>
              <Button
                variant="outlined"
                className='botao'
              >Saber mais
              </Button>
            </Link>
          </Box>
        </Grid>

        { /* Segundo Grid */}

        <Grid item xs={6}>
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
      </Grid>

    </>
  );
}

export default Home;