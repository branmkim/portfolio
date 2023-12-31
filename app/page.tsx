import Card from '../components/Card';
import ColorEffect from '../components/ColorEffect';
import './page.css'

export default function Home() {
    const link_style = "underline hover:text-purple-600 transition"

    return (
        <main>
            <div className="body flex flex-col p-8 sm:p-24">
                {/* header */}
                <h1 className="text-4xl pb-4"><b>brandon kim</b></h1>
                
                {/* body */}
                <div className="flex items-center pb-2">
                    <object data="email.svg" className="w-8 pr-2"></object>
                    <p className="text-md">email: bran.mkim [at] gmail.com</p>
                </div>
                <div className="flex items-center pb-2">
                    <object data="grad.svg" className="w-8 pr-2"></object>
                    <p className="text-md">computer science @ new york university, c/o 2027</p>
                </div>
                <div className="flex items-center pb-2">
                    <object data="wrench.svg" className="w-8 pr-2"></object>
                    <p className="text-md">interested in web dev, robotics, design</p>
                </div>

                {/* links */}
                <div className="flex flex-wrap items-center max-w-fit pb-8">
                    <object data="links.svg" className="w-8 pr-2"></object>
                    <p className={`pr-4 ${link_style}`}>
                        <a href="BrandonKim_resume.pdf" target="_blank">resume (fall &#39;23)</a>
                    </p>
                    <p className={`pr-4 ${link_style}`}>
                        <a href="https://github.com/branmkim">github</a>
                    </p>
                    <p className={`pr-4 ${link_style}`}>
                        <a href="https://www.linkedin.com/in/brandon-kim-05671124a/">linkedin</a>
                    </p>
                </div>

                {/* cards */}
                <div className="flex flex-row overflow-x-auto h-fit pb-4">
                    <Card img="kilobot.png"
                        title="swarm robotics research intern"
                        subtitle="developed a robotic swarm algorithm mimicking how ants use pheromones to explore an area"
                    />
                    <Card img="frc.jpeg"
                        title="frc team 4099's 2022 robot"
                        subtitle="won 2nd place at international FIRST Championships"
                    />
                </div>
            </div>

            <ColorEffect />
        </main>
    )
}
