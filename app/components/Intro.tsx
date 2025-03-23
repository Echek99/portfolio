import SocialIcons from "./SocialIcons";
import SkillsSection from "./Skills";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div className="flex flex-col align-center justify-center min-h-[100vh] items-center relative pt-48 z-[0]" id="home">
            {/* Text Content */}
            <div className="text-center z-10 w-full relative -top-20">
                <div>
                    <p className="text-5xl font-light text-white-800 mt-4">
                        Hey there! <span className="text-green-400 leading-tight">I’m</span> Julian <span className="font-semibold text-green-400 leading-tight font-thin">Eche</span>verri
                    </p>
                    <p
                        className="text-xl text-gray-400 italic mt-4"
                    >
                        Fullstack Developer based in NYC
                    </p>
                </div>

                <div className="my-8">
                    <SocialIcons />
                </div>

                <div>
                    <SkillsSection />
                </div>
            </div>
        </div>
    )
}

export default Intro;