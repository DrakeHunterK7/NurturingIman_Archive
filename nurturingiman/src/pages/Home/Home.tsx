import logo from '../../../src/assets/nurturing-iman-logo.png';
import carousel1 from '../../../src/assets/Carousel Photos/1.jpg';
import carousel2 from '../../../src/assets/Carousel Photos/2.jpg';
import carousel3 from '../../../src/assets/Carousel Photos/3.jpg';
import carousel4 from '../../../src/assets/Carousel Photos/4.jpg';
import carousel5 from '../../../src/assets/Carousel Photos/5.jpg';

import './Home.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Carousel, Modal } from 'react-bootstrap';
import { useState } from 'react';

import InstaFeed from '../Components/InstaFeed';
import YouTubeFeed from '../Components/YouTubeFeed';

import logos from '../../assets/Social Logos';

function Home() {

  const [lgShow, setLgShow] = useState(false);

 return (
    <div>
      <div className="home">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="">
              <img
                alt="Nurturing Iman Logo"
                width="150"
                src={logo}
              />
              <div className="title-text">
                Nurturing Iman
              </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" onClick={() => setLgShow(true)}>About Us</Nav.Link>
              <Nav.Link href="#instagram">Instagram</Nav.Link>
              <Nav.Link href="#youtube">YouTube</Nav.Link>
              <Nav.Link href="#newsletter">Newsletter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='homepage-section'>
        <div className='message-background'>
          <Carousel slide={true} controls={false} indicators={false} fade>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel3}
                  alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel4}
                  alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel5}
                  alt="First slide"
                />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            About Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="about-us-text">
              <h3>Our mission is to bring more Islam to the Ummah and the world,</h3>
              <h3>and enlighten ourselves to the beauty and value of Islam.</h3>
              <p>We make all kinds of Islamic content for multiple platforms, including YouTube and Instagram, with plans to branch out even more.</p>
              <p>Join us in our journey to educate the Ummah and the world at large, and to become better Muslims than yesterday.</p>
              <p>Jazakallahu Khair for being with us</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      


      <div className='homepage-section margin-top' id='instagram'>
        <div className='media-feed'>
          <h2>Our Instagram Content</h2>
          <InstaFeed />
        </div>
      </div>

      <div className='homepage-section margin-top' id='youtube'>
        <div className='media-feed'>
          <h2>Our YouTube Content</h2>
          <YouTubeFeed />
        </div>
      </div>

      <div className='homepage-section margin-top' >
          <div className="footer">
                

                <div className='nurturing-iman-logo'>
                   <div className="logo-container">
                    <img
                      alt="Nurturing Iman Logo"
                      src={logo}
                      />
                      <div className="title-text">
                        Nurturing Iman
                      </div>
                   </div>
                </div>

                <div className="socials">
                  <p>Follow us on our socials</p>
                  <div className="socials-links">
                      <a href={logos[0].link} target="_blank" rel="noreferrer">
                        <img src={logos[0].source} alt="instagram logo"/>
                      </a>
                      <a href={logos[1].link} target="_blank" rel="noreferrer">
                        <img src={logos[1].source} alt="facebook logo"/>
                      </a>
                      <a href={logos[2].link} target="_blank" rel="noreferrer">
                        <img src={logos[2].source} alt="youtube logo"/>
                      </a>
                      <a href={logos[3].link} target="_blank" rel="noreferrer">
                        <img src={logos[3].source} alt="instagram logo"/>
                      </a>
                  </div>
                </div>

                
              </div>
          </div>
    </div>
    </div>
  );
}


export default Home;
