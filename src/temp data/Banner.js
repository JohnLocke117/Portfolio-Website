import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerbg from "../assets/img/bannerbg.jpg";
import me from "../assets/img/banner-me.jpg"

export const Banner = () => {
        // Typing Animation (Uncomment to Enable):

        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const toRotate = [ "UI/UX", "Machine Learner", "Aesthetics" ];
        //const toRotate = [ "" ];
        const [text, setText] = useState("");
        const [delta, setDelta] = useState(300 - Math.random() * 100);
        const period = 2000;

        useEffect(() => {
                let ticker = setInterval(() => {
                        tick();
                }, delta);

                return () => { clearInterval(ticker) };
        }, [text])

        const tick = () => {
                let i = loopNum % toRotate.length;
                let fullText = toRotate[i];
                let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

                setText(updatedText);

                if (isDeleting) {
                        setDelta(prevDelta => prevDelta / 2);
                }

                if (!isDeleting && updatedText === fullText) {
                        setIsDeleting(true);
                        setDelta(period);
                }
                else if (isDeleting && updatedText === "") {
                        setIsDeleting(false);
                        setLoopNum(loopNum + 1);
                        setDelta(500);
                }
        }

        return (
                <section className="banner" id="home">
                        <img src = { bannerbg } class="bannerbg"></img>
                        <Container>
                                <Row className="align-items-center">
                                        <Col xs={12} md={6} xl={7}>
                                                <span className="tagline">Art is an Explosion</span>
                                                <Card className="bannercard">
                                                        {/* <Card.Img src = { bannerbg }></Card.Img> */}
                                                                <Card.Title><h1>Varun Arya</h1></Card.Title>
                                                </Card>

                                                <h2>:
                                                        {/* Uncomment for Typing Animation: */}
                                                        {/* <span className="wrap">{text}</span> */}
                                                </h2>
                                                {/* <p>Wanna-Be Machine Learner</p> */}
                                                {/* <Button variant="info">Explore <ArrowRightCircle /></Button> */}
                                        </Col>
                                        <Col xs={12} md={6} xl={5}>
                                                <img className="me" src ={ me }></img>
                                        </Col>
                                </Row>
                        </Container>
                        
                        {/* <div className="container">
                                <img className="me" src= { me } />
                                <img className="me" src= { me } />
                                <img className="me" src= { me } />
                                <img className="me" src= { me } />
                        </div> */}
                </section>
        )
}