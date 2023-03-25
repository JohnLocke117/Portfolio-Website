// Uses react-multi-carousel
import { Container, Row, Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import experiencebg from "../assets/img/experiencebg.jpg";

export const Experience = () => {
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
                <section className="exp" id="experience">
                        <img className="expbg" src= { experiencebg }></img>
                        <Container>
                                <Row>
                                        <Col>
                                                <h1 className="expheading">Experience</h1>
                                                <div class="expcontainer">
                                                        <div class="box">
                                                                <span></span>
                                                                <div class="content">
                                                                        <h2>Chegg Inc.</h2>
                                                                        {/* <img src= {test} /> */}
                                                                        <p>Freelancing at Chegg India where I work as a Solutions Expert to solve Questions related to Computer Science.</p>
                                                                        {/* <a href="#">Read More</a> */}
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="box">
                                                                <span></span>
                                                                <div class="content">
                                                                        <h2>Curriculum Developer</h2>
                                                                        <p>Volunteered at the Team Everest NGO to design and develop school Curriculum for underprivelaged children.</p>
                                                                        {/* <a href="#">Read More</a> */}
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="box">
                                                                <span></span>
                                                                <div class="content">
                                                                        <h2>Teacher at Teach For India</h2>
                                                                        <p>Volunteer teaching work at Teach For India.</p>
                                                                        {/* <a href="#">Read More</a> */}
                                                                </div>
                                                        </div>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}