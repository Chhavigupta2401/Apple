import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Product = () => {

const box=useRef()
useGSAP(()=>{let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },
});

tl7.to(".our-work-txt-div",{
    height:"60vh",
}, 'height')
tl7.to(".our-work-txt",{
    height:"60vh",
}, 'height')
tl7.to("#our",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-570%",


}, )},{scope:box})



  return (
  <div className="w-full min-h-100vh" ref={box}> <div className="part flex items-center justify-center w-full h-screen">
  <div className="our-work-txt">
      <h1 id="our" className=' absolute top-0  font-arvo font-600 -translate-x-1/2 left-[25%] -translate-y-1/2 text-3xl lg:text-7xl'>Our</h1>
      <h1 id="work" className='absolute bottom-0   translate-x-1/2 translate-y-1/2 text-3xl lg:text-7xl font-arvo font-600 right-[25%]'>Products</h1>
  </div>
  <div className="our-work-txt-div">
      <div className="scroll-work ">
          <div className="scroll-img w-full mt-0 transition-all duration-1s ease-custom-ease">
              <img src="https://i.pinimg.com/564x/4a/85/25/4a852585cd4ca780a66b62e0ab0745a1.jpg" alt=""/>
              <img src="https://i.pinimg.com/564x/92/56/f9/9256f98af8d125a035afcf24be919208.jpg" alt=""/>
              <img src="https://i.pinimg.com/564x/8f/ff/62/8fff62c614f47575767dc623c721a2dc.jpg" alt=""/>
              <img src="https://i.pinimg.com/736x/52/cc/8a/52cc8a9a3a1849da081e2ca840e40277.jpg" alt=""/>
              <img src="https://i.pinimg.com/564x/7f/b6/5c/7fb65c7ee5e3a579fcaad66a0f138d72.jpg" alt=""/>
              <img src="https://i.pinimg.com/236x/c0/9e/83/c09e8336a7a6eb8ac16d8876f28a7c13.jpg" alt=""/>

          </div>
      </div>
  </div>

</div>
</div>
  )
}

export default Product