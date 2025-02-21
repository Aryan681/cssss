import React from 'react'
import './first.css'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const First = () => {
    const boxRef = useRef(null);
    useEffect(() => {
        gsap.to(boxRef.current, { x: 100, duration: 1, ease: "power2.out" });
      }, []);
  return (
    <div ref={boxRef} className="w-20 h-20 bg-blue-500">Move Me</div>
  )
}

export default First
