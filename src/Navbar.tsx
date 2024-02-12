import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import './Navbar.css'
import logo from './logo/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar
                className="navbar"
                sx={{ backgroundColor: 'white', color: 'black' }}
            >
                <Typography variant="h6" component="div" className="title">
                    <img className="logo" src={logo} alt="" />
                </Typography>
                <div className="links">
                    <Button
                        component={Link}
                        to="/"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            '&:hover': {
                                backgroundColor: '#B4D4FF',
                                color: 'white',
                                transition: '0.6s',
                            },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/portfolio"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            fontVariant: 'roboto',
                            '&:hover': {
                                backgroundColor: '#B4D4FF',
                                color: 'white',
                                transition: '0.6s',
                            },
                        }}
                    >
                        Portfolio
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        color="inherit"
                        sx={{
                            padding: '7px',
                            marginRight: '7px',
                            '&:hover': {
                                backgroundColor: '#B4D4FF',
                                color: 'white',
                                transition: '0.6s',
                            },
                        }}
                    >
                        About Us
                    </Button>
                </div>

                <Button
                    component={Link}
                    to="/contact"
                    sx={{
                        border: '1px solid blue',
                        color: 'blue',
                        borderRadius: '3px',
                        padding: '7px',
                        marginRight: '7px',
                        '&:hover': {
                            backgroundColor: 'blue',
                            color: 'white',
                            transition: '0.6s',
                        },
                    }}
                    color="inherit"
                >
                    Contact Us
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
