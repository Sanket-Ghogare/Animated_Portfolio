import { useState } from 'react'
import "./app.scss"
import Heros from './componenets/Navbar/hero/Heros';
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Navbar/Contact';
import Test from './componenets/Navbar/Test';
import Sidebar from './componenets/Navbar/sidebar/Sidebar';
import Services from './componenets/Services';
const App = () =>{
return (
<>
<div>
    <section id='homePage'>
      <Navbar/>
      <Heros/>
    </section>
    
<Sidebar/>
    {/* <section id= 'Services'>Parallax</section> */}
    <section id ='Services'>
<Services/>
    </section>
     <section id='Portfolio' >port1</section>

   
{/*     
     <section id ='Test'>
<Test/>
    </section>  */}

<section id ='Contact'>
<Contact/>
    </section>

    
    <section id = 'About'>
       About
    </section>
  </div>
    </>
)
  
};

export default App
