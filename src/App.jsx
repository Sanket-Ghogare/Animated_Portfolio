// import { useState } from 'react'
// import "./app.scss"
// import Heros from './componenets/Navbar/hero/Heros';
// import Navbar from './componenets/Navbar/Navbar';
// import Contact from './componenets/Navbar/Contact';
// import Test from './componenets/Navbar/Test';
// import Sidebar from './componenets/Navbar/sidebar/Sidebar';
// import Services from './componenets/Services';
// import Parallax from './componenets/Parallax';
// const App = () =>{
// return (
// <>
// <div>
//     <section id='homePage'>
//       <Navbar/>
//       <Heros/>
//     </section>
    
// <Sidebar/>
//     {/* <section id= 'Services'>Parallax</section> */}
//     <section id ='Services'>
// <Services/>
//     </section>
//      <section id='Portfolio' ><Parallax type= 'Portfolio'/></section>

   
// {/*     
//      <section id ='Test'>
// <Test/>
//     </section>  */}

// <section id ='Contact'>
// <Contact/>
//     </section>

    
//     <section id = 'About'>
//        About
//     </section>
//   </div>
//     </>
// )
  
// };

// export default App

import { useState } from 'react'
import "./app.scss"
import Heros from './componenets/Navbar/hero/Heros';
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Navbar/Contact';
import Test from './componenets/Navbar/Test';
import Sidebar from './componenets/Navbar/sidebar/Sidebar';
import Services from './componenets/Services';
import Parallax from './componenets/Parallax';
import Portfolio from './componenets/portfolio/Portfolio';

const App = () =>{
return (
<>
<div>
    <section id='homePage '>
      <Navbar/> 
       <Heros/>
    </section>
    
<Sidebar/> 
<section id='Services'>
    <Parallax type="services"/>
    </section>
    <section id= 'Services' style={{marginBottom:"30%" , marginTop:"0%"}}> <Services/></section>

    <section id='Portfilio'>
    <Parallax type="portfilio"/>
   </section>

   <section className='abc'></section>

    <Portfolio/>

    <section id='Contact'>
    <Contact/>

    </section>
    {/* <section id='Portfolio' ></section>
    <section className='section'>
       <Test/>
    </section>
    <section id='Contact'>
    <Contact/>

    </section> */}
    
    {/* <Test/> */}
  </div>
    </>
)
  
};

export default App
