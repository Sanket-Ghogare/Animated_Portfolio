import "./app.scss"
import Heros from './componenets/Navbar/hero/Heros';
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Navbar/Contact';
import Sidebar from './componenets/Navbar/sidebar/Sidebar';
import Services from './componenets/Services';
import Parallax from './componenets/Parallax';
import Portfolio from './componenets/portfolio/Portfolio';

const App = () => {
  return (
    <>
      <div>
        <section id='HomePage'>
          <Navbar />
          <Heros />
        </section>

        <Sidebar />

        <section className='p1'>
          <Parallax type="skills" />
        </section>

        <section id='Experience'>
          <Services type="skills" />
        </section>

        <section className='p1'>
          <Parallax type="projects" />
        </section>

        <section id='Projects'>
          <Portfolio type='projects' />
        </section>

        <section id='Contact'>
          <Contact type='Contact' />
        </section>
      </div>
    </>
  )
};

export default App;
