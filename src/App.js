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

      <section className='position-fixed me-1 bg-white p-1 rounded text-center' style={{ bottom: 24, right: 24, height: 48, width: 48 }}>
        <a href='#' target="_blank"><i className="fa-brands fa-square-whatsapp fs-4 text-dark" ></i></a>
      </section>
    </main>
  );
}

export default App;
