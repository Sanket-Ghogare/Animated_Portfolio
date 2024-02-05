import { useState } from 'react'
import "./app.scss"
import Heros from './componenets/Navbar/hero/Heros';
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Navbar/Contact';
import Test from './componenets/Navbar/Test';
import Sidebar from './componenets/Navbar/sidebar/Sidebar';
const App = () =>{
return (
<>
<div>
    <section id='homePage'>
      <Navbar/>
      <Heros/>
    </section>
    
<Sidebar/>
    <section id= 'Services'>Parallax</section>
    <section ></section>
    <section id='Portfolio' >port1</section>
    <section className='section'>
       <Test/>
    </section>
    <section id='Contact'>
    <Contact/>

    </section>
    
    {/* <Test/> */}
  </div>
    </>
)
  
};

export default App
