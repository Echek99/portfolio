import SocialIcons from "./SocialIcons";
import SkillsSection from "./Skills";

const Intro = () => {
    return (
        <div className="flex flex-col align-center justify-center min-h-[100vh] items-center relative pt-24" id="home">
            {/* Text Content */}
            <div className="w-full relative -top-20"> {/* Add this container */}
                <SocialIcons />
            </div>
            <div className="text-center z-10 w-full relative -top-20 z-[0]">
                <p className="text-5xl font-light text-white-800 mt-4">
                    Hey there! <span className="text-green-400 leading-tight">I’m</span> Julian <span className="font-semibold text-green-400 leading-tight font-thin">Eche</span>verri
                </p>
                <p className="text-xl text-gray-400 italic mt-4">
                    Fullstack Developer based in NYC
                </p>
            <SkillsSection />
            </div>
        </div>
    )
}

export default Intro;