import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Four = () => {
  const strRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newPath = `M 10 100 Q 500 ${event.clientY} 990 100`;

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (event) => {
      const finalPath = "M 10 100 Q 500 100 900 100";
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 0.3,
        ease: "power2.out",
        markers: true
      });
    };

    const str = strRef.current;
    str.addEventListener("mousemove", handleMouseMove);
    str.addEventListener("mouseleave", handleMouseLeave);
    // it is use as the garbage listner , as it only work when the item is visible
    // return () => {
    //   if (str) {
    //     str.removeEventListener("mousemove", handleMouseMove);
    //   }
    // };
  }, []);

  return (
    <>
      {" "}
      <div ref={strRef} className=" mt-[10px] h-[1rem] w-full bg-yellow-300  flex justify-center items-center ">
        <svg width="100%" height="200">
          <path
            ref={pathRef}
            d="M 10 100 Q 500 100 990 100"
            stroke="black"
            strokeWidth="1"
            fill="transparent"
          />
        </svg>
      </div>
    </>
  );
};

export default Four;
