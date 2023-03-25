import { Container, Row, Col , Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cardimg from "../assets/img/cardimg.png";
import projectsbg from "../assets/img/projectsbg.jpg";
import github from "../assets/img/github.png";

export const Projects = () => {

        const projects1 = [
                {
                        title: "Hands Free Media Player",
                        description: "A project on Recognition of simple Hand Gestures to control an external Media Player. The project is made using OpenCV and uses the WebCam live feed to Detect and Identify five basic functionalities of a Media Player: Play/Pause, Volume Up, Volume Down and Forward.",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/Hands-Free-Media-Player-using-Gesture-Control" target="_blank"><img className="git" src={ github } /></a>
                },
                {
                        title: "Autonomous Vehicles using Deep Learning",
                        description: "A project to simulate Self-Driving Cars using the Udacity Simulator. Project under Development",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/Autonomous-Vehicles-using-Deep-Learning" target="_blank"><img className="git" src={ github } /></a>
                },
                {
                        title: "E-Mail Spam Ham Prediction",
                        description: "A Model to Predict Spam and Ham E-Mails using Naïve Bayes Classifier",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/E-Mail-Spam-Ham-Predictior" target="_blank"><img className="git" src={ github } /></a>
                },
        ];

        const projects2 = [
                {
                        title: "Portfolio Website",
                        description: "Portfolio Website made using ReactJS.",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/Portfolio-Website" target="_blank"><img className="git" src={ github } /></a>
                },
                // {
                //         title: "Lorem Ipsum 5",
                //         description: "Lorem Ipsum is the dummy text of the Printing Industry",
                //         imgUrl: cardimg,
                //         link: <a href="">Git</a>
                // },
                // {
                //         title: "Lorem Ipsum 6",
                //         description: "Lorem Ipsum is the dummy text of the Printing Industry",
                //         imgUrl: cardimg,
                //         link: <a href="">Git</a>
                // },
        ];

        const projects3 = [
                {
                        title: "To-Do List with Django",
                        description: "A To-Do List App made with Django with full User Login, Registration Functionality. Notes can be Added, Updated, Completed and Deleted.",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/To-Do-List-with-Django" target="_blank"><img className="git" src={ github } /></a>
                },
                {
                        title: "A* Algorithm in Java",
                        description: "A program which implements the A* Search Algorithm to find the shortest path between a START and a GOAL node. Implemented in Java.",
                        imgUrl: cardimg,
                        link: <a href="https://github.com/JohnLocke117/AStar-Algorithm-in-Java" target="_blank"><img className="git" src={ github } /></a>
                },
                // {
                //         title: "Lorem Ipsum 9",
                //         description: "Lorem Ipsum is the dummy text of the Printing Industry",
                //         imgUrl: cardimg,
                //         link: <a href="">Git</a>
                // },
        ];

        return (
                <section className="project" id="projects">
                        <img className="projectsbg" src={ projectsbg } />
                        <Container>
                                <Row>
                                        <Col>
                                        <h2>Projects</h2>
                                        <p>
                                                Here are some of my Personal Projects that I've worked on:
                                        </p>
                                        
                                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                                <Nav.Item>
                                                        <Nav.Link eventKey="first">Machine Learning</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                        <Nav.Link eventKey="third">Miscellaneous</Nav.Link>
                                                </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                                {/* First Tab: */}
                                                <Tab.Pane eventKey="first">
                                                        <Row>
                                                                {
                                                                        projects1.map((project, index) => {
                                                                                return (
                                                                                        <ProjectCard key={index} {...project} />
                                                                                )
                                                                        })
                                                                }
                                                        </Row>
                                                </Tab.Pane>
                                                
                                                {/* Second Tab: */}
                                                <Tab.Pane eventKey="second">
                                                        <Row>
                                                                        {
                                                                                projects2.map((project, index) => {
                                                                                        return (
                                                                                                <ProjectCard key={index} {...project} />
                                                                                        )
                                                                                })
                                                                        }
                                                        </Row>
                                                </Tab.Pane>
                                                
                                                {/* Third Tab: */}
                                                <Tab.Pane eventKey="third">
                                                        <Row>
                                                                        {
                                                                                projects3.map((project, index) => {
                                                                                        return (
                                                                                                <ProjectCard key={index} {...project} />
                                                                                        )
                                                                                })
                                                                        }
                                                        </Row>
                                                </Tab.Pane>
                                        </Tab.Content>
                                        </Tab.Container>
                                        </Col>
                                </Row>
                        </Container>
                </section>
        )
}