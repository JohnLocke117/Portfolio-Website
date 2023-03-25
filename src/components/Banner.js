import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/banner-me.jpg";

export const Banner = () => {
        // Typing Animation (Uncomment to Enable):

        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const toRotate = [ "machine learning...","ui design...", "photography...", "automobiles..." ];
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
                <section className="banner" id="about">
                        <Container>
                                <Row className="align-items-center">
                                        <Col xs={12} md={6} xl={7}>
                                                <span className="tagline">ART IS AN EXPLOSION</span>
                                                <h2 className="wrap0">Heya, Nice to meetcha, I'm</h2>
                                                <h1 className="name">{`Varun Arya`}</h1>
                                                <h3 className="deets">Student @ NIT-K '25, Artificial Intelligence, UI/UX Designer</h3>
                                                {/* Uncomment for Typing Animation: */}
                                                <h2 className="wrap1">i'm into</h2>
                                                <h2 className="wrap2">{text}</h2>

                                                <p className="para">I'm currently an undergraduate student at NIT-K with majors in Artiificial
                                                Intelligence. My interests include Machine Learning, UI Design, Computer Vision, 
                                                Photography, Self-Driving Automobiles and many more. I also love to work on Open-Source Projects and do Freelancing
                                                in Chegg Inc.</p>
                                        </Col>
                                        <Col xs={12} md={6} xl={5}>
                                                <div className="square" />
                                                <img className="me" src = { me }></img>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}