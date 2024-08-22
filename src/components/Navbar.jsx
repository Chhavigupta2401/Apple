import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"


const Navbar = () => {
  return (
   <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center  backdrop-filter backdrop-blur-sm bg-zinc/40 border-b border-white/10 shadow-lg fixed top-0 z-50">
   <nav className="flex w-full screen-max-width navy ">
   <img src={appleImg} alt="Apple"  width={18} height={18}/>
  <div className="flex flex-1 justify-center max-sm:hidden">
  {navLists.map((nav)=>(
    <div key={nav} className="px-5 text-l cursor-pointer text-gray hover:text-white transition-all ">
    {nav}

    </div>
  ))}

  </div>
<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
<img src={searchImg} alt="search" width={18} height={18}/>
<img src={bagImg} alt="bag" width={18} height={18}/>

</div>

   </nav></header>

  )
}

export default Navbar