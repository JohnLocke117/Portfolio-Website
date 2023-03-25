// Uses react-multi-carousel
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col} from "react-bootstrap";
import postman from "../assets/img/postman.png";
import analytics from "../assets/img/analytics.png";
import certbg from "../assets/img/certbg.jpg";

export const Certifications = () => {
        const responsive = {
                superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5
                },
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                }
        };

        return (
                <section className="cert" id="certifications">
                        <img className="certbg" src= { certbg }></img>
                        <Container>
                                <Row>
                                        <Col>
                                                <h1 className="certheading">Certifications</h1>
                                                <Card className='certcard'>
                                                        <Card.Img className='certcardimg' variant="top" src= { postman } />
                                                        <Card.Body className='certcardbody'>
                                                                <Card.Title>Postman API Fundamentals</Card.Title>
                                                                <Card.Text>
                                                                Earned the Postman Student Expert Badge by completing the Postman API Fundamentals certification.
                                                                </Card.Text>
                                                                <Button className='certcardbutton' variant="primary" href="https://badgr.com/public/assertions/PFwUYycIRSquoXjghd2uIQ?identity__email=varunarya.211ai038@nitk.edu.in" target='_blank'>Certification</Button>
                                                        </Card.Body>
                                                </Card>

                                                <Card className='certcard'>
                                                        <Card.Img className='certcardimg' variant="top" src= { analytics } />
                                                        <Card.Body className='certcardbody'>
                                                                <Card.Title>Buisness Analytics by HT Labs India</Card.Title>
                                                                <Card.Text>
                                                                        Earned a license in Buisness Analytics by a wrokshop organized by HT Labs India.<br /><br />
                                                                </Card.Text>
                                                                <Button className="certcardbutton" variant="primary">Certification</Button>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}