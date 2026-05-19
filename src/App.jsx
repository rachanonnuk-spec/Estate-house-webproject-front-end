//import React from 'react'
import About from './component/About'
import Header from './component/Header'
import Projects from './component/Projects'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer'



const App = () => {
  
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    
    </div>
  )
}

export default App
