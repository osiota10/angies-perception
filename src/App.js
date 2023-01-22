import './main.css'
import Stat from './components/stats';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Hero from './components/hero';
import Testimonials from './components/testimonials';
import NavBar from './components/navBar';
import Gallery from './components/gallery';

function App() {
  return (
    <main className='bg-dark text-light'>
      <NavBar />
      <Hero />
      <Stat />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      <section className='position-fixed bg-white rounded whats-icon position-relative' style={{ bottom: 24, right: 24 }}>
        <a href='#' target="_blank"><i className="fa-brands fa-square-whatsapp fs-1 position-absolute top-50 start-50 translate-middle"></i></a>
      </section>
    </main>
  );
}

export default App;
