import { useState } from 'react'

import "./app.scss"
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Navbar/Contact';


const App = () =>{
return <>
    <section className='section'>
      <Navbar/>
    </section>
    <section className='section'>
    <Contact/>
    </section>
    <section >Services</section>
    <section >Parallax</section>
    <section >por1</section>
    <section >port2</section>
    <section >port3</section>
    </>
    
  
};

export default App
