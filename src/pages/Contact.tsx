import React from 'react'
import {
    Typography,
    Box,
    Container,
    Link,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from '@mui/material'
import levanImage from '../logo/leo.jpeg'
import georgeImage from '../logo/kurta.jpeg'
import irakliImage from '../logo/kere.jpeg'
import './Contact.css'

const Contact = () => {
    return (
        <Container maxWidth="md" className="fade-in">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    sx={{ color: 'green', padding: '20px' }}
                >
                    Contact Page
                </Typography>

                <hr style={{ marginBottom: '20px' }} />

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="slide-in">
                            <CardMedia
                                component="img"
                                height="250"
                                image={levanImage}
                                alt="Levan Dalbashvili"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Levan Dalbashvili
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="mailto:levanidalbashvili00@gmail.com">
                                        levanidalbashvili00@gmail.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/levandalbashvili"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @levandalbashvili
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="slide-in">
                            <CardMedia
                                component="img"
                                height="250"
                                image={georgeImage}
                                alt="George Kurtanidze"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    George Kurtanidze
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="mailto:thinkers.struggle@gmail.com">
                                        thinkers.struggle@gmail.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/gio_kurttanidze"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @gio_kurttanidze
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="slide-in">
                            <CardMedia
                                component="img"
                                height="250"
                                image={irakliImage}
                                alt="Irakli Kereleishvili"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Irakli Kereleishvili
                                </Typography>
                                <Typography>
                                    Email:{' '}
                                    <Link href="mailto:kereleishviliirakli81@gmail.com">
                                        kereleishviliirakli81@gmail.com
                                    </Link>
                                </Typography>
                                <Typography>
                                    Instagram:{' '}
                                    <Link
                                        href="https://www.instagram.com/iraklikereleishvili"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @iraklikereleishvili
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Contact
