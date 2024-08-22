import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"

import Navbar from "./components/Navbar"
import Product from "./components/Product"

const App = () => {

  return (
   <main className="bg-black overflow-y-hidden">
   <Navbar/>
   <Hero/>
   <Highlights/>
<Model/>
<Features/>
<Product/>
<HowItWorks/>
<Footer/>
   </main>  )
}

export default App