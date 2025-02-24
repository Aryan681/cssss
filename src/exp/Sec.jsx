import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Sec = () => {
  const rectRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(rectRefs.current, {
      x: 150,
      rotate: 360,
      duration: 1,
      delay: 1,
      borderRadius: 25,
      repeat: 3,
      yoyo: true,
      ease: "power1.inOut",
    }).to(rectRefs.current, {
      scale: 1.1, 
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.3,
    
    }).to(rectRefs.current, {
      scale: 1, 
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.3,
    });
  }, []);
  const boxes = [
    { className: "box1 h-20 w-20 m-2 bg-amber-600" },
    { className: "box2 h-20 w-20 m-2 bg-blue-700" },
    { className: "box3 h-20 w-20  m-2 bg-emerald-300" },
  ];
  return (
    <>
    <div className=" m-2">
      {boxes.map((box, i) => (
        <div
          key={i}
          ref={(el) => (rectRefs.current[i] = el)} 
          className={box.className}
        ></div>
      ))}
    </div>
    </>
  );
};

export default Sec;
