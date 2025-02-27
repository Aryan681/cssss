import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Thir = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Refs for each element
  const treRef = useRef(null);  // First red box
  const treRef1 = useRef(null); // First green box
  const treRef2 = useRef(null); // Second green box
  const treRef3 = useRef(null); // Scrolling text
  const parentRef = useRef(null); // Parent of scrolling text

  useEffect(() => {
    // First box animation (appears without scroll)
    gsap.fromTo(
      treRef.current,
      { scale: 0, rotate: 360 },
      { scale: 1, rotate: 0, duration: 2, delay: 1 }
    );

    // First green box (appears on scroll)
    gsap.fromTo(
      treRef1.current,
      { scale: 0, rotate: 360 },
      {
        scale: 1,
        rotate: 0,
        duration: 2,
        scrollTrigger: {
          trigger: treRef1.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    gsap.to(treRef3.current, {
      x: "-150%",
      scrollTrigger: {
        trigger: parentRef.current, // Parent div triggers animation
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
        pinSpacing: false, // Prevents page shift issue
        markers: true, // Debug markers
      },
    });

  
    gsap.fromTo(
      treRef2.current,
      { scale: 0, rotate: 360 },
      {
        scale: 1,
        rotate: 0,
        duration: 2,
        scrollTrigger: {
          trigger: treRef2.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      {/* First Box */}
      <div className="flex justify-center items-center h-screen bg-blue-600 w-screen">
        <div ref={treRef} className="h-[10rem] w-[8rem] bg-red-500"></div>
      </div>

      {/* First Green Box */}
      <div className="flex justify-center items-center h-screen bg-pink-600 w-screen">
        <div ref={treRef1} className="h-[10rem] w-[8rem] bg-green-500"></div>
      </div>

         {/* Pinned Scrolling Text */}
         <div ref={parentRef} className="h-screen bg-orange-600 w-screen flex items-center overflow-hidden">
        <h1 ref={treRef3} className="whitespace-nowrap text-[40vh] uppercase font-bold">
          Experience uhtgsakhfdsakhdf
        </h1>
      </div>

      {/* Second Green Box */}
      <div className="flex justify-center items-center h-screen bg-pink-600 w-screen">
        <div ref={treRef2} className="h-[10rem] w-[8rem] bg-green-500"></div>
      </div>
    </>
  );
};

export default Thir;
