
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
    <section id='homePage'>
      <Navbar/> 
     
       <Heros/>
    </section>
    
<Sidebar/> 
<section className='p1'>
      <Parallax type ="services"/>
    </section>
<section id='Services'>
    <Services type ="services"/>
  
    </section>
   
    <section className='p1'>
  <Parallax type="portfolio"/>
</section>


    {/* <section id='Portfolio'>
    <Portfolio type= 'portfolio'/>
   </section> */}

   <section id='Contact'>
    <Contact type= 'Contact'/>

    </section>




    
 
       

     
{/* 
    <section className='section'>
       <Test/>
    </section> */}
  
  </div>

    </>
)
  
};

export default  App;














// import { useState } from 'react'
// import "./app.scss"
// import Heros from './componenets/Navbar/hero/Heros';
// import Navbar from './componenets/Navbar/Navbar';
// import Contact from './componenets/Navbar/Contact';
// import Test from './componenets/Navbar/Test';
// import Sidebar from './componenets/Navbar/sidebar/Sidebar';
// import Services from './componenets/Services';
// import Parallax from './componenets/Parallax';
// import Portfolio from './componenets/portfolio/Portfolio';

// const App = () =>{
// return (
// <>
// <div>
//     <section id='homePage'>
//       <Navbar/> 
//        <Heros/>
//     </section>
    
// <Sidebar/> 
// <section>
//       <Parallax type ="services"/>
//     </section>
// <section id='Services'>
//     <Services type ="services"/>
  
//     </section>
   
//     {/* <section id= 'Services' style={{marginBottom:"30%" , marginTop:"0%"}}> <Services/></section> */}
//     <section>
//   <Parallax type="portfolio"/>
// </section>
//     <section id='Portfolio'>
//     <Portfolio type= 'portfolio'/>
//    </section>
// <section id='Portfolio'>
//   <Portfolio type="portfolio"/>
// </section>
//    {/* <section className='About'>
//    <Portfolio/>
//    </section> */}

    

//     <section id='Contact'>
//     <Contact/>

//     </section>
//     {/* <section id='Portfolio' ></section>
//     <section className='section'>
//        <Test/>
//     </section>
//     <section id='Contact'>
//     <Contact/>

//     </section> */}
    
//     {/* <Test/> */}
//   </div>
//     </>
// )
  
// };

// export default  App;
