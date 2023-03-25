// Uses react-multi-carousel
import { Container, Row, Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import experiencebg from "../assets/img/experiencebg.jpg";
import logo from "../assets/img/logo.png"

export const Papers = () => {
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
                <section className="papers" id="papers">
                        {/* <img className="papersbg" src= { experiencebg }></img> */}
                        <Container>
                                <Row>
                                        <Col>
                                                <h1 className="papersheading">Papers</h1>
                                                
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}