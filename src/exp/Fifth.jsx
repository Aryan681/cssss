import { useEffect,useRef } from "react";
import gsap from "gsap";



const Fifth = () => {
      const tl = gsap.timeline();
      const divRef = useRef(null);


    useEffect(()=>{
        
    },[]);

  return (
    <>
      <div ref={divRef} className=" h-[10rem] w-[10rem] bg-black m-5 p-4 ">
      
      </div>


    </>
  )
}

export default Fifth
