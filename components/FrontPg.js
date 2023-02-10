import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import moon from "../assets/img/moon1.png"
import stars from "../assets/img/stars.png";
import mountainsfront from "../assets/img/mountains_front.png";
import mountainsbehind from "../assets/img/mountains_behind.png";
import { Parallax } from "react-parallax";

export const FrontPg = () => {
        // const [scrolled] = useState(false);
        // useEffect(() => {
        //         const onScroll = () => {
        //                 let stars = document.getElementById("stars");
        //                 window.addEventListener("scroll", function() {
        //                         let value = window.scrollY;
        //                         stars.style.left = value + "px";
        //                 })
        //         }
        // }, [])

        return (
                <body>
                        <section className="frontpg" id="home">
                                {/* <Container>
                                        <Row className="align-items-center">
                                                <Col xs={12} md={6} xl={7}>
                                                        <span className="tagline">Art is an Explosion</span>
                                                        <h1>{`Front Page`}
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
                                </Container> */}

                                <img src={ stars } id="stars"></img>
                                <img src={ moon } id="moon1"></img>
                                <img src={ mountainsfront } id="mountains_front"></img>
                                <h2 id="frontpgtext">Moon Light<br></br></h2>
                                <Button variant="light" id="explorebtn" href="#">Explore</Button>
                                <img src={ mountainsbehind } id="mountains_behind"></img>
                                
                        </section>

                        {/* <script>
                                let stars = document.getElementbyId("stars");
                                let moon1 = document.getElementbyId("moon1");
                                let mountains_behind = document.getElementbyId("mountains_behind");
                                let mountains_front = document.getElementbyId("mountains_front");
                                let explorebtn = document.getElementbyId("explorebtn");

                                window.addEventListener("scroll", function(){
                                        let value = window.scrollY;
                                        stars.style.left = value + "px";
                                })
                        </script> */}
                </body>
        )
}