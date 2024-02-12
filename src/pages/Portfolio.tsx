import React from 'react'
import { Typography, Box, Container, Link } from '@mui/material'
import kurta from '../logo/kurta.jpeg'
import levan from '../logo/leo.jpeg'
import kere from '../logo/kere.jpeg'
import './Portfolio.css' // Import the CSS file

const Portfolio = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                    sx={{ color: 'green' }}
                >
                    Portfolio Page
                </Typography>

                <Box
                    sx={{
                        backgroundColor: '#f5f5f5',
                        p: 3,
                        borderRadius: 2,
                        mb: 3,
                    }}
                    className="zoom-in"
                >
                    <div>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Levan Dalbashvili
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Explore Levan's portfolio and reach out to him on
                            LinkedIn:
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography variant="body1" gutterBottom>
                                Check out Levan's projects on Github:
                            </Typography>

                            <img
                                src={levan}
                                alt=""
                                style={{ width: '120px' }}
                            />
                        </div>
                        <Link
                            href="https://www.linkedin.com/in/levani-dalbashvili-911404200/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </Link>
                        <div>
                            <Link
                                href="https://github.com/levdalba"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#f5f5f5',
                        p: 3,
                        borderRadius: 2,
                        mb: 3,
                    }}
                    className="zoom-in"
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        George Kurtanidze
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Explore George's portfolio and reach out to him on
                        LinkedIn:
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="body1" gutterBottom>
                            Check out George's projects on Github:
                        </Typography>
                        <img src={kurta} alt="" style={{ width: '120px' }} />
                    </div>
                    <Link
                        href="https://www.linkedin.com/in/giorgi-kurtanidze-2b235b287/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <div>
                        <Link
                            href="https://github.com/kurta17"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Link>
                    </div>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#f5f5f5',
                        p: 3,
                        borderRadius: 2,
                        mb: 3,
                    }}
                    className="zoom-in"
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        Irakli Kereleishvili
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Explore Irakli's portfolio and reach out to him on
                        LinkedIn:
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="body1" gutterBottom>
                            Check out Irakli's projects on Github:
                        </Typography>
                        <img src={kere} alt="" style={{ width: '120px' }} />
                    </div>
                    <Link
                        href="https://www.linkedin.com/in/irakli-kereleishvili-3567a7289/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <div>
                        <Link
                            href="https://github.com/levdalba"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Link>
                    </div>
                </Box>
            </Box>
        </Container>
    )
}

export default Portfolio
