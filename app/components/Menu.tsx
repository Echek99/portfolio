"use client"
import { useRef } from "react"

const NavBar = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const scrollText = " ~ REACH OUT, I NEVER SAY NEVER."

  return (
    <>
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .infinite-scroll-container {
          display: inline-block;
          white-space: nowrap;
          animation: infinite-scroll 180s linear infinite;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .infinite-scroll-container:hover {
          animation-play-state: paused;
        }

        .mask-overflow {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
      `}</style>

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full border-white border-b-2 bg-black z-50 overflow-hidden"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <nav className="py-4">
          {/* Infinite Scroll Navigation for both Mobile and Desktop */}
          <div className="mask-overflow relative overflow-hidden flex items-center justify-center h-6">
            <div className="infinite-scroll-container text-white italic montserrat">
              {/* First copy of the text */}
              {Array(25).fill(scrollText).join("")}
              {/* Second copy to create the seamless loop */}
              {Array(25).fill(scrollText).join("")}
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div className="h-16"></div>
    </>
  )
}

export default NavBar
