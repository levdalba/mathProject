import React, { useState, useRef, useEffect } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import {
    Chart,
    LinearScale,
    ScatterController,
    PointElement,
    LineElement,
} from 'chart.js'
import * as math from 'mathjs'

Chart.register(LinearScale, ScatterController, PointElement, LineElement)

const Cubic = () => {
    const [xInput, setXInput] = useState('')
    const [yInput, setYInput] = useState('')
    const [data, setData] = useState<{ x: number; y: number }[]>([])
    const [coefficients, setCoefficients] = useState<number[]>([])
    const chartRef = useRef<Chart | null>(null)

    const addData = () => {
        const newData = [
            ...data,
            { x: parseFloat(xInput), y: parseFloat(yInput) },
        ]
        setData(newData)

        const newCoefficients = cubicLeastSquares(newData)
        setCoefficients(newCoefficients)
    }

    const cubicLeastSquares = (data: { x: number; y: number }[]) => {
        const xs = data.map((point) => point.x)
        const ys = data.map((point) => point.y)

        const A = math.matrix([
            [
                data.length,
                math.sum(xs),
                math.sum(math.dotPow(xs, 2)),
                math.sum(math.dotPow(xs, 3)),
            ],
            [
                math.sum(xs),
                math.sum(math.dotPow(xs, 2)),
                math.sum(math.dotPow(xs, 3)),
                math.sum(math.dotPow(xs, 4)),
            ],
            [
                math.sum(math.dotPow(xs, 2)),
                math.sum(math.dotPow(xs, 3)),
                math.sum(math.dotPow(xs, 4)),
                math.sum(math.dotPow(xs, 5)),
            ],
            [
                math.sum(math.dotPow(xs, 3)),
                math.sum(math.dotPow(xs, 4)),
                math.sum(math.dotPow(xs, 5)),
                math.sum(math.dotPow(xs, 6)),
            ],
        ])

        const b = math.matrix([
            [math.sum(ys)],
            [math.sum(math.dotMultiply(xs, ys))],
            [math.sum(math.dotMultiply(math.dotPow(xs, 2), ys))],
            [math.sum(math.dotMultiply(math.dotPow(xs, 3), ys))],
        ])

        const coefficients = math
            .lusolve(A, b)
            .toArray()
            .flat()
            .map((value: math.MathNumericType) => Number(value))

        return coefficients
    }

    useEffect(() => {
        chartRef.current = new Chart('myCanvas', {
            type: 'scatter',
            data: {
                datasets: [],
            },
            options: {
                scales: {
                    x: { type: 'linear', position: 'bottom' },
                },
            },
        })

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy()
            }
        }
    }, [])

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.data.datasets.length > 0) {
                chartRef.current.data.datasets[0] = {
                    data: data,
                    borderColor: 'red',
                    backgroundColor: 'transparent',
                }
            } else {
                chartRef.current.data.datasets.push({
                    data: data,
                    borderColor: 'red',
                    backgroundColor: 'transparent',
                })
            }
            chartRef.current.update()
        }
    }, [data])

    useEffect(() => {
        if (chartRef.current && data.length > 0) {
            const cubicFunctionPoints = data.map((point) => {
                const x = point.x
                const y =
                    coefficients[0] * x ** 3 +
                    coefficients[1] * x ** 2 +
                    coefficients[2] * x +
                    coefficients[3]
                return { x, y }
            })

            if (chartRef.current.data.datasets.length > 1) {
                chartRef.current.data.datasets[1] = {
                    data: cubicFunctionPoints,
                    borderColor: 'blue',
                    backgroundColor: 'transparent',
                    fill: false,
                    showLine: true,
                }
            } else {
                chartRef.current.data.datasets.push({
                    data: cubicFunctionPoints,
                    borderColor: 'blue',
                    backgroundColor: 'transparent',
                    fill: false,
                    showLine: true,
                })
            }
            chartRef.current.update()
        }
    }, [data, coefficients])

    return (
        <div>
            <Typography
                sx={{
                    fontSize: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'green',
                }}
            >
                Solve Cubic problems and display graphs with us!
            </Typography>
            <Typography
                sx={{
                    fontSize: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'brown',
                }}
            >
                Input your equations to solve them!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <TextField
                    label="X Value"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={xInput}
                    onChange={(e) => setXInput(e.target.value)}
                />
                <TextField
                    label="Y Value"
                    variant="outlined"
                    sx={{ mr: 2 }}
                    InputProps={{ style: { borderRadius: 10 } }}
                    value={yInput}
                    onChange={(e) => setYInput(e.target.value)}
                />
                <Button
                    sx={{ width: '150px', borderRadius: '20px' }}
                    variant="contained"
                    color="error"
                    onClick={addData}
                >
                    Plot
                </Button>
            </Box>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        marginTop: '50px',
                        width: '700px',
                        height: '500px',
                        marginLeft: '20px',
                    }}
                >
                    <canvas id="myCanvas"></canvas>
                </div>
                <Typography
                    sx={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'blue',
                        mt: 3,
                        alignItems: 'center',
                    }}
                >
                    {coefficients.length === 4
                        ? `y = ${coefficients[0]}x^3 +\n ${coefficients[1]}x^2 +\n ${coefficients[2]}x +\n ${coefficients[3]}`
                        : ''}
                </Typography>
            </div>
        </div>
    )
}

export default Cubic
