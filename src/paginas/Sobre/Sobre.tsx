import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Sobre.css'
function Sobre() {
    return (
        <>
            <Grid container className="caixa">
                <Grid item xs={8}>
                    <Box className="box-text-d">
                        <Typography variant='h5' className='titulo'>
                            Quem somos?
                        </Typography>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur fugit, voluptas delectus voluptates eaque corrupti, tempore cum cupiditate pariatur facere alias ducimus quo possimus, quidem sed temporibus ad officiis?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt='teste' width="90%" />
                </Grid>
                <Grid item xs={4} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt='teste' width="90%" />
                </Grid>
                <Grid item xs={8}>
                    <Box className="box-text-e">
                        <Typography variant='h5' className='titulo'>
                            Quem somos?
                        </Typography>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur fugit, voluptas delectus voluptates eaque corrupti, tempore cum cupiditate pariatur facere alias ducimus quo possimus, quidem sed temporibus ad officiis?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className="box-text-d">
                        <Typography variant='h5' className='titulo'>
                            Quem somos?
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