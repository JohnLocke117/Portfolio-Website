// Uses react-multi-carousel
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skillsbg from "../assets/img/skillsbg.jpg";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import ai from "../assets/img/ai.png";
import react from "../assets/img/react.png";

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
                                                        <h2>Skills</h2>
                                                        <p>the ability to achieve
                                                                <br />
                                                                Below are some of my Skills, and I'm always open to learn more.
                                                        </p>
                                                        
                                                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                                                
                                                                <div className="item">
                                                                        <Card className="card-custom" style={{ width: '18rem' }}>
                                                                                <Card.Img className="card-img" variant="top" src={ python } />
                                                                                <Card.Body className="card-body">
                                                                                        <Card.Title className="card-title">Python</Card.Title>
                                                                                        <Card.Text className="card-text">
                                                                                        Over the past 3 years, I've had extensive experience with the Python Programming
                                                                                        Language in the course of my personal projects, classwork and general usage.
                                                                                        Python by far remains my most used Language with numerous projects under Machine Learning,
                                                                                         Data Sciences, Quantum Computing, Game Design and many more.
                                                                                        </Card.Text>
                                                                                </Card.Body>
                                                                        </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ ai } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Machine Learning</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                I've worked on many projects on Machine Learning, relevant ones include
                                                                                Hands-Free Media Player using Gesture Control, E-Mail Spam-Ham Classifier, 
                                                                                Critical Temperature Prediction of Superconductors. I'm also currently working
                                                                                on many other Machine Learning projects, notable ones being Self-Driving Cars,
                                                                                Object Detection, etc.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ java } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">Java</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                With a little over 1.5 years of experience with Java, it is my go-to language
                                                                                for everything other than Machine Learning. I've used Java to for my Competetive
                                                                                Programming journey and some personal projects like Implementation and Visualization of 
                                                                                Artificial Intelligence Algorithms like A*, Graph Coloring, and many more.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>

                                                                <div className="item">
                                                                <Card className="card-custom" style={{ width: '18rem' }}>
                                                                        <Card.Img className="card-img" variant="top" src={ react } />
                                                                        <Card.Body className="card-body">
                                                                                <Card.Title className="card-title">UI/UX Design</Card.Title>
                                                                                <Card.Text className="card-text">
                                                                                I have extensive experience and passion for UI/UX Design and Graphic Designing
                                                                                and love to create user-friendly and visually appealing interfaces. I am proficienct in 
                                                                                HTML, CSS and JavaScript and mainly work with ReactJS. I'm also currently working
                                                                                on the design of NIT-K GCDC Washington DC Convention Website.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card>
                                                                </div>
                                                        </Carousel>

                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                        <img className="skillsbgimg" src={ skillsbg }></img>
                </section>
        )
}