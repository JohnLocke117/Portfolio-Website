import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
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
                                        <img className="navbar-logo" src = {logo} height="60" width="60" alt=""></img>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                        <span className="navbar-toggler-icon"></span>
                                </Navbar.Toggle>.
                                <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                                                <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About</Nav.Link>
                                                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                                                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                                                <Nav.Link href="#certifications" className={activeLink === "certifications" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("certifications")}>Certifications</Nav.Link>
                                                <Nav.Link href="#papers" className={activeLink === "papers" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("papers")}>Papers</Nav.Link>
                                                <Nav.Link href="#experience" className={activeLink === "experience" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("experience")}>Experience</Nav.Link>
                                                <Nav.Link href="#connect" className={activeLink === "connect" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}>Connect</Nav.Link>
                                        </Nav>

                                        {/* Social Media: */}
                                        <span className="navbar-text">
                                                <div className="social-icon">
                                                        <a href="https://www.linkedin.com/in/varun-arya-bb8350221/" target="_blank"><img src={ linkedin } alt=""></img></a>
                                                        <a href="https://github.com/JohnLocke117" target="_blank"><img src={ github } alt=""></img></a>
                                                        <a href="https://www.instagram.com/balloon_aryaa/" target="_blank"><img src={ instagram } alt=""></img></a>
                                                </div>
                                                {/* <Button className="vvd" variant="outline-info">Let's Connect</Button> */}
                                        </span>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        )
}