// Uses react-multi-carousel
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skillsbg from "../assets/img/test5.jpg";
import logo from "../assets/img/logo.png"

export const Skills = () => {
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
                <section className="skill" id="skills">
                        <Container>
                                <Row>
                                        <Col>
                                                <div className="skill-bx">
                                                        <h2>
                                                                Skills
                                                        </h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                                Eu ultrices vitae auctor eu augue ut. Auctor augue mauris augue neque 
                                                                gravida in fermentum et. Diam vulputate ut pharetra sit. Id nibh tortor 
                                                                id aliquet. Massa tincidunt nunc pulvinar sapien et. Sed id semper risus in. 
                                                                Nam at lectus urna duis convallis. Nunc pulvinar sapien et ligula ullamcorper.
                                                                Nisl tincidunt eget nullam non nisi.
                                                        </p>
                                                        
                                                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                                                
                                                                <div className="item">
                                                                        <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ logo } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Skill 1</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ logo } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Skill 2</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ logo } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Skill 3</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ logo } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Skill 4</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>
                                                        </Carousel>

                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                        <img className="background-image-left" src={ skillsbg } alt="Dummy Image"></img>
                </section>
        )
}