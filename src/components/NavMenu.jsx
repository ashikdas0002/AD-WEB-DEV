import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavMenu.css';
import navLogo from '../images/logo.png'
const NavMenu = () => {
    return (
        <div className='nav-color'>
            <Navbar expand="lg" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex align-items-center '>
                            <span>
                                <img className='nav-logo' src={navLogo} alt="" />
                            </span>
                            <span

                                className='mx-2  fw-bold logo-name'>
                                WEB DEV
                            </span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link
                                className='nav-custom'
                                href="#home">Service</Nav.Link>
                            <Nav.Link
                                className='nav-custom'
                                href="#link">Work</Nav.Link>
                            <Nav.Link
                                className='nav-custom'
                                href="#link">Resume</Nav.Link>
                            <Nav.Link
                                className='nav-custom'
                                href="#link">Skill</Nav.Link>
                            <Nav.Link
                                className='nav-custom'
                                href="#link">Testimonials</Nav.Link>
                            <Nav.Link
                                className='nav-custom'
                                href="#link">Contact</Nav.Link>


                        </Nav>
                        <div className='text-center'>
                            <button className='hireme-btn'>Hire Me!</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
