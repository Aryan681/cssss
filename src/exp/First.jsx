import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const First = () => {
  const navRef = useRef(null);
  const rectRef = useRef(null);
  const cont = useRef([]);

  useEffect(() => {
    const tl =  gsap.timeline();
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
tl.fromTo(
      rectRef.current,
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" }
    );
    
  }, []);

  return (
    <div
      ref={navRef}
      className=" flex justify-center  relative w-[400px] top-1  h-[60px]"
    >
      <div className="absolute inset-0 bg-[blue] flex justify-around items-center p-2 group">
        <div  className="px-4 py-2 text-white cursor-pointer transition duration-100 hover:bg-white/20">
          Home
        </div>
        <div   className="px-4 py-2 text-white cursor-pointer transition duration-100 hover:bg-white/20">
          Contact
        </div>
        <div   className="px-4 py-2 text-white cursor-pointer transition duration-100 hover:bg-white/20">
          About
        </div>
        <div   className="px-4 py-2 text-white cursor-pointer transition duration-100 hover:bg-white/20">
          FAQ
        </div>
        <svg
          className="absolute inset-0 pointer-events-none"
          width="400"
          height="60"
          viewBox="0 0 400 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            ref={rectRef}
            className="stroke-white transition-all duration-500 group-hover:stroke-dasharray-none"
            pathLength="100"
            x="0"
            y="0"
            width="400"
            height="60"
            fill="transparent"
            strokeWidth="5"
            strokeDasharray="0 0 10 40 10 40"
            strokeDashoffset="5"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default First;
