import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png";
import footerbg from "../assets/img/footer.jpg";

export const Footer = () => {
        return (
                <footer className="footer">
                        <img className="footerbg" src= { footerbg }></img>
                        <Container>
                                <Row className="align-items-center">
                                        <Col sm={6}>
                                                <img className="footerimg" src={logo} alt=""></img>
                                        </Col>
                                        
                                        <Col sm={6} className="footertxt">
                                                <p>Varun Arya</p>
                                                <p>CopyRight 2023. All Rights Reserved.</p>
                                        </Col>
                                </Row>
                        </Container>
                </footer>
        )
}