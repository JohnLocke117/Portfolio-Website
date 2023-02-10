import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";

export const Footer = () => {
        return (
                <footer className="footer">
                        <Container>
                                <Row className="align-items-center">
                                        <Col sm={6}>
                                                <img src={logo} alt=""></img>
                                        </Col>
                                        
                                        <Col sm={6} className="text-center text-sm-end">
                                                <div className="social-icon">
                                                        <a href=""><img src={linkedin}></img></a>
                                                        <a href=""><img src={github}></img></a>
                                                        <a href=""><img src={instagram}></img></a>
                                                </div>
                                                <p>CopyRight 2023. All Rights Reserved.</p>
                                        </Col>
                                </Row>
                        </Container>
                </footer>
        )
}