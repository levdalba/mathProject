import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'
import graph from '../logo/graph.png'
import './Home.css'
import scroll from '../logo/scroll.png'
import Linear from './linear'
import Cubic from './cubic'
import Polynomial from './polynomial'

const Home = () => {
    const [selected, setSelected] = useState('')

    return (
        <div>
            <div className="welcome">
                <div className="content">
                    <Typography variant="h6" gutterBottom>
                        Hey! we are Levan, George and Irakli!
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Welcome to <span className="p">our website</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Solve Cubic, Polynomials and Linear equations
                        effortlessly with our advanced algorithms.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Get instant solutions and insightful graphs. Join us and
                        conquer math challenges with ease!
                    </Typography>
                </div>
                <img src={graph} alt="Graph" className="graph-image" />
                <div className="scroll-text">
                    <Typography className="button">
                        <Button
                            sx={{ width: '100px', borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                            onClick={() => setSelected('linear')}
                        >
                            Linear
                        </Button>
                        <Button
                            sx={{ width: '100px', borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                            onClick={() => setSelected('cubic')}
                        >
                            Cubic
                        </Button>
                        <Button
                            sx={{ borderRadius: '10px' }}
                            variant="contained"
                            color="primary"
                            onClick={() => setSelected('polynomial')}
                        >
                            Polynomial
                        </Button>
                    </Typography>
                </div>
            </div>
            {selected === 'linear' && (
                <div className="linear">
                    <Linear />
                </div>
            )}
            {selected === 'cubic' && (
                <div className="cubic">
                    <Cubic />
                </div>
            )}
            {selected === 'polynomial' && (
                <div className="polynomial">
                    <Polynomial />
                </div>
            )}
        </div>
    )
}

export default Home
