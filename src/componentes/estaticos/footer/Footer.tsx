import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Box className='footer'>

                        <Box paddingTop={1}>
                            <Typography
                                variant="subtitle2"
                                className='textos'>
                                © 2022 Copyright:
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                className='textos'>
                                <a href='https://github.com/joaovneres/Front-End-PI' className='links'>
                                    Botanic House
                                </a>
                            </Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}

export default Footer;