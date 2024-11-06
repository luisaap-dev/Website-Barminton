import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Carousel } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaMapMarkerAlt, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

const Home = ({ aboutRef }) => (
  <Container className="p-0 mt-4">
    <Carousel className="custom-carousel">
      {images.map((imageName, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`/assets/img/slider/${imageName}`}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>

    <div ref={aboutRef} className="mt-4 container">
      <Row className='border'>
        <Col lg={6} md={6} sm={12} xs={12} style={{ padding: 0 }} className='p-4 bg-light'>
          <h2>Sobre Nosotros</h2>
          <p>Tienda multimarca de moda masculina ubicada en la localidad de Ferrol. Venta de todo tipo de ropa como pantalones, camisas, camisetas, bermudas, etc. También cuenta con un pequeño espacio para niños y mujeres.</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <FaEnvelope onClick={handleClickEmail}  className="contact-icon" style={{ marginRight: '8px' }} />
              <span  className="contact-text"><strong>barminton@barminton.net</strong></span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <FaPhone onClick={handleClickPhone} className="contact-icon" style={{ marginRight: '8px' }} />
              <span  className="contact-text"><strong>981 352 893</strong></span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <FaMapMarkerAlt onClick={handleClickDirection} className="contact-icon" style={{ marginRight: '8px' }} />
              <span  className="contact-text"><strong>R. Real, 132, 15402 Ferrol, A Coruña</strong></span>
            </li>
          </ul>
        </Col>


        <Col lg={6} md={6} sm={12} xs={12} style={{ padding: 0 }} className='p-4 bg-light'>
          <Link to="https://www.google.es/maps/dir//BARMINTON,+Calle+Real,+Ferrol,+El+Ferrol/@43.4826454,-8.2361592,18.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2e7610ef695561:0xd2642abe86a38a34!2m2!1d-8.2359519!2d43.4828689?entry=ttu" target="_blank">
            <img
              src="/assets/img/mapa.png"
              alt="Mapa"
              style={{ cursor: 'pointer', border: 0, width: '100%', height: '50vh' }}
            />
          </Link>
        </Col>
      </Row>
    </div>
  </Container>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center p-3 mt-3">
    <Container>
      <Row>
        <Col>
          <FaInstagram size={24} onClick={handleClickInstagram} className="social-icon FaInstagram" />
          <FaFacebookSquare size={24} onClick={handleClickFacebook} className="social-icon FaFacebookSquare" />
        </Col>
      </Row>
    </Container>
  </footer>
);


const handleClickPhone = () => {
  window.location.href = 'tel:+34981352893';
};

const handleClickEmail = () => {
  window.location.href = 'mailto:barminton@barminton.net  ';
};


const handleClickFacebook = () => {
  window.location.href = 'https://www.facebook.com/barminton.ferrol/';
};

const handleClickInstagram = () => {
  window.location.href = 'https://www.instagram.com/barminton/';
};

const handleClickDirection = () => {
  window.location.href = 'https://www.google.es/maps/dir//BARMINTON,+Calle+Real,+Ferrol,+El+Ferrol/@43.4826454,-8.2361592,18.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2e7610ef695561:0xd2642abe86a38a34!2m2!1d-8.2359519!2d43.4828689?entry=ttu';
};

const App = () => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <>
        <header className="bg-light">

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  className="d-block w-100"
                  src="/assets/img/logo.png"
                  alt="barminton"
                  style={{ maxWidth: '100px' }}
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav navbarScroll>
                  <Nav.Link onClick={scrollToAbout}>Sobre Nosotros</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path="/" element={<Home aboutRef={aboutRef} />} />
        </Routes>
        <Footer />
      </>

    </Router>
  );
};

export default App;
