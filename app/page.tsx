'use client'

import { useEffect, useState } from 'react';
import './page.css'

export default function Home() {
    const link_style = "underline hover:text-purple-600 transition"
    
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
        setColorSize(mapToLogistic(normalized_y, 40, 50))
    }, [mousePos.y, colors])

    const mapToLogistic = (input: number, min: number, max: number) => {
        let y = 1 / (1 + Math.pow(3, -4 * input)) // [0, 1]
        let mapToRange = min + ((max - min) * y)
        return mapToRange
    }

    return (
        <main>
            <div className="flex min-h-screen flex-col p-24">
                <h1 className="text-4xl pb-4"><b>brandon kim</b></h1>
                {/* <p>{mousePos.x}</p>
                <p>{window.innerWidth}</p> */}
                <div className="flex items-center py-1 pb-2">
                    <object data="email.svg" className="w-8 pr-2"></object>
                    <p className="text-md">email: bran.mkim [at] gmail.com</p>
                </div>
                <div className="flex items-center pt-1 pb-2">
                    <object data="grad.svg" className="w-8 pr-2"></object>
                    <p className="text-md">computer science @ new york university, c/o 2027</p>
                </div>
                <div className="flex items-center pt-1 pb-4">
                    <object data="wrench.svg" className="w-8 pr-2"></object>
                    <p className="text-md">interested in web dev, robotics, aero</p>
                </div>
                <div className="flex items-center w-max pt-4 border-t-2 border-gray-200">
                    <object data="links.svg" className="w-8 pr-2"></object>
                    <p className={`pr-4 ${link_style}`}>
                        projects    
                    </p>
                    <p className={`pr-4 ${link_style}`}>
                        <a href="BrandonKim_resume.pdf" target="_blank">resume (fall &#39;23)</a>
                    </p>
                    <p className={`pr-4 ${link_style}`}>
                        <a href="https://github.com/branmkim">github</a>
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse -z-10 absolute top-0 w-full h-full"
                style={{backgroundImage: 
                    `radial-gradient(circle at 20% 150%, rgb(${currentColors[0][0]}, ${currentColors[0][1]}, ${currentColors[0][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%), ` + 
                    `radial-gradient(circle at 50% 120%, rgb(${currentColors[1][0]}, ${currentColors[1][1]}, ${currentColors[1][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%), ` +
                    `radial-gradient(circle at 80% 150%, rgb(${currentColors[2][0]}, ${currentColors[2][1]}, ${currentColors[2][2]}) 0, rgba(255, 255, 255, 0) ${colorSize}%)`
                }}
            >
            </div>
        </main>
    )
}
