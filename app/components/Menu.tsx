'use client'
import Link from "next/link"
import { useRef } from "react"

const NavBar = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const links = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS"];

    return (
        <>
            <style jsx global>{`
                @keyframes infinite-scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .mask-overflow {
                    mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 10%,
                        black 90%,
                        transparent 100%
                    );
                }
            `}</style>
            
            {/* Added top-0 to ensure fixed positioning works properly */}
            <header
                ref={headerRef}
                className="fixed top-0 w-full border-white border-b-2 bg-black z-10 overflow-x-hidden"
            >
                <nav className="max-md:py-3">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-between items-center w-full lg:w-1/2 mx-auto px-5">
                        {links.map((link) => (
                            <Link key={link} href={`/#${link.toLowerCase()}`} className="text-white hover:text-green-400 transition-colors">
                                {link}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Infinite Scroll Navigation */}
                    <div className="md:hidden mask-overflow relative h-5">
                        <div className="absolute flex w-[200%] animate-infinite-scroll hover:animation-paused">
                            {[...links, ...links].map((link, index) => (
                                <Link
                                    key={`${link}-${index}`}
                                    href={`/#${link.toLowerCase()}`}
                                    className="flex-shrink-0 px-6 text-white hover:text-green-400 transition-colors whitespace-nowrap"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;