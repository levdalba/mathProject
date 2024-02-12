import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import chven from '../logo/chven.jpg'
import './aboutUs.css'

function AboutUs() {
    return (
        <div className="about-us-container">
            <img src={chven} alt="Chven" className="about-us-image slide-in" />
            <Container maxWidth="md" className="about-us-content fade-in">
                <Box sx={{ my: 4 }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center"
                        className="about-us-heading"
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className="about-us-text"
                    >
                        We're three ambitious students from Georgia, studying
                        Computer Science at Harbour Space University.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className="about-us-text"
                    >
                        United by our passion for innovation, we're on a mission
                        to make a positive impact in the tech world.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className="about-us-text"
                    >
                        With diverse skills and a shared vision, we're eager to
                        push boundaries and shape the future of computing.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className="about-us-text"
                    >
                        Join us as we explore, learn, and create together.
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default AboutUs
