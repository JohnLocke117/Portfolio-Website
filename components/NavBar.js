import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";

export const NavBar = () => {
        const [activeLink, setActiveLink] = useState("home");
        const [scrolled, seScrolled] = useState(false);

        useEffect(() => {
                const onScroll = () => {
                        if (window.scrollY > 50) {
                                seScrolled(true);
                        }
                        else {
                                seScrolled(false);
                        }
                }

                window.addEventListener("scroll", onScroll);
        }, [])

        const onUpdateActiveLink = (value) => {
                setActiveLink(value);
        }

        return (
                <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                        <Container>
                                <Navbar.Brand href="#home">
                                        <img src = {logo} height="70" width="70" alt=""></img>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                        <span className="navbar-toggler-icon"></span>
                                </Navbar.Toggle>.
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                                                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                                                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                                                
                                                {/* Dropdown Menu: */}
                                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">
                                                                Another action
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">
                                                                Separated link
                                                        </NavDropdown.Item>
                                                </NavDropdown> */}
                                        </Nav>

                                        {/* Social Media: */}
                                        <span className="navbar-text">
                                                <div className="social-icon">
                                                        <a href="https://www.linkedin.com/in/varun-arya-bb8350221/" target="_blank"><img src={ linkedin } alt=""></img></a>
                                                        <a href="https://github.com/JohnLocke117" target="_blank"><img src={ github } alt=""></img></a>
                                                        <a href="https://www.instagram.com/balloon_aryaa/" target="_blank"><img src={ instagram } alt=""></img></a>
                                                </div>
                                                <button className="vvd" onClick={() => console.log("connect")}><span>Let's Connect</span></button>
                                        </span>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        )
}