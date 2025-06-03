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
        {/* Home Section */}
        <section id='HomePage' className="full-height">
          <Navbar />
          <Heros />
        </section>

        <Sidebar />

        {/* Skills Parallax Section */}
        <section className='parallax-section full-height'>
          <Parallax type="skills" />
        </section>

        {/* Experience Section */}
        <section id='Experience' className="full-height">
          <Services type="skills" />
        </section>

        {/* Projects Parallax Section */}
        <section className='parallax-section full-height'>
          <Parallax type="projects" />
        </section>

        {/* Projects Section */}
        <section id='Projects' className="full-height">
          <Portfolio type='projects' />
        </section>

        {/* Contact Section */}
        <section id='Contact' className="full-height">
          <Contact type='Contact' />
        </section>
      </div>
    </>
  )
};

export default App;