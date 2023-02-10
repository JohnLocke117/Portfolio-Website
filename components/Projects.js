import { Container, Row, Col , Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cardimg from "../assets/img/card-img1.png";
import test6 from "../assets/img/test6.jpg";

export const Projects = () => {

        const projects = [
                {
                        title: "Lorem Ipsum 1",
                        description: "Lorem Ipsum is the dummy text of the Printing Industry",
                        imgUrl: cardimg,
                },
                {
                        title: "Lorem Ipsum 2",
                        description: "Lorem Ipsum is the dummy text of the Printing Industry",
                        imgUrl: cardimg,
                },
                {
                        title: "Lorem Ipsum 3",
                        description: "Lorem Ipsum is the dummy text of the Printing Industry",
                        imgUrl: cardimg,
                },
        ];

        return (
                <section className="project" id="project">
                        <Container>
                                <Row>
                                        <Col>
                                        <h2>Projects</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                                deserunt mollit anim id est laborum.
                                        </p>
                                        
                                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                                <Nav.Item>
                                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                                </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                                {/* First Tab: */}
                                                <Tab.Pane eventKey="first">
                                                        <Row>
                                                                {
                                                                        projects.map((project, index) => {
                                                                                return (
                                                                                        <ProjectCard
                                                                                                key={index}
                                                                                                {...project}
                                                                                                />
                                                                                )
                                                                        })
                                                                }
                                                        </Row>
                                                </Tab.Pane>
                                                
                                                {/* Second Tab: */}
                                                <Tab.Pane eventKey="second">
                                                        <Row>
                                                                        {
                                                                                projects.map((project, index) => {
                                                                                        return (
                                                                                                <ProjectCard
                                                                                                        key={index}
                                                                                                        {...project}
                                                                                                        />
                                                                                        )
                                                                                })
                                                                        }
                                                        </Row>
                                                </Tab.Pane>
                                                
                                                {/* Third Tab: */}
                                                <Tab.Pane eventKey="third">
                                                        <Row>
                                                                        {
                                                                                projects.map((project, index) => {
                                                                                        return (
                                                                                                <ProjectCard
                                                                                                        key={index}
                                                                                                        {...project}
                                                                                                        />
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
                        <img className="background-image-right" src={ test6 } alt="BG Image Right"></img>
                </section>
        )
}