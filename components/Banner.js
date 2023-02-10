import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import moon from "../assets/img/moon.png"

export const Banner = () => {
        // Typing Animation (Uncomment to Enable):

        // const [loopNum, setLoopNum] = useState(0);
        // const [isDeleting, setIsDeleting] = useState(false);
        // const toRotate = [ "TRex", "Spinosaurs", "Triceratops" ];
        // //const toRotate = [ "" ];
        // const [text, setText] = useState("");
        // const [delta, setDelta] = useState(300 - Math.random() * 100);
        // const period = 2000;

        // useEffect(() => {
        //         let ticker = setInterval(() => {
        //                 tick();
        //         }, delta);

        //         return () => { clearInterval(ticker) };
        // }, [text])

        // const tick = () => {
        //         let i = loopNum % toRotate.length;
        //         let fullText = toRotate[i];
        //         let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        //         setText(updatedText);

        //         if (isDeleting) {
        //                 setDelta(prevDelta => prevDelta / 2);
        //         }

        //         if (!isDeleting && updatedText === fullText) {
        //                 setIsDeleting(true);
        //                 setDelta(period);
        //         }
        //         else if (isDeleting && updatedText === "") {
        //                 setIsDeleting(false);
        //                 setLoopNum(loopNum + 1);
        //                 setDelta(500);
        //         }
        // }

        return (
                <section className="banner" id="home">
                        <Container>
                                <Row className="align-items-center">
                                        <Col xs={12} md={6} xl={7}>
                                                <span className="tagline">Art is an Explosion</span>
                                                <h1>{`Varun Arya`}
                                                        {/* Uncomment for Typing Animation: */}
                                                        {/* <span className="wrap">{text}</span> */}
                                                </h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                        At lectus urna duis convallis. Aliquet nibh praesent tristique magna sit amet purus gravida. Id ornare arcu odio ut. 
                                                        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Scelerisque felis imperdiet proin fermentum leo vel. 
                                                        Pellentesque habitant morbi tristique senectus et netus. Sit amet massa vitae tortor condimentum lacinia quis vel. 
                                                        Consequat mauris nunc congue nisi vitae.</p>
                                                <Button variant="info">Explore <ArrowRightCircle /></Button>
                                        </Col>
                                        <Col xs={12} md={6} xl={5}>
                                                <img src ={ moon } height="400" width="400" alt="Header Image"></img>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}