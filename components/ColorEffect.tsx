'use client'

import { useEffect, useState } from 'react';

export default function ColorEffect() {
    const colors = [
        {
            start: [255, 0, 48],
            end: [85, 0, 255]
        },
        {
            start: [255, 166, 0],
            end: [0, 255, 255]
        },
        {
            start: [184, 0, 253],
            end: [255, 0, 251]
        }
    ]

    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const [colorSize, setColorSize] = useState(40);
    const [currentColors, setCurrentColors] = useState(colors.map((e) => {return e.start}));

    const handleMouseMove = (e: any) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return (() => {
            window.removeEventListener('mousemove', handleMouseMove)
        })
    })

    useEffect(() => {
        const normalized_y: number = (2 * mousePos.y / window.innerHeight) - 1
        const newColors: number[][] = currentColors
        newColors.map((color: number[], i: number) => {
            color.map((rgb_val: number, j: number) => {
                newColors[i][j] = mapToLogistic(normalized_y, colors[i].start[j], colors[i].end[j])
            })
        })
        setCurrentColors(newColors)
        setColorSize(mapToLogistic(normalized_y, 50, 60))
    }, [mousePos.y, colors])

    const mapToLogistic = (input: number, min: number, max: number) => {
        let y = 1 / (1 + Math.pow(3, -4 * input)) // [0, 1]
        let mapToRange = min + ((max - min) * y)
        return mapToRange
    }

    return (
        <div className="flex flex-col-reverse -z-10 absolute top-0 w-full h-full"
                style={{backgroundImage: 
                    `radial-gradient(circle at 20% 130%, rgb(${currentColors[0][0]}, ${currentColors[0][1]}, ${currentColors[0][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%), ` + 
                    `radial-gradient(circle at 50% 110%, rgb(${currentColors[1][0]}, ${currentColors[1][1]}, ${currentColors[1][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%), ` +
                    `radial-gradient(circle at 80% 130%, rgb(${currentColors[2][0]}, ${currentColors[2][1]}, ${currentColors[2][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%)`
                }}
            >
        </div>
    );
}