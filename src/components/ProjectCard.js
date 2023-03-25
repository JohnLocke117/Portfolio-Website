import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
        return (
                <Col sm={6} md={4}>
                        <div className="proj-imgbx">
                                <img className="procardimg" src={imgUrl}></img>
                                <h4 className="proj-tx">{title}</h4>
                                <div className="proj-txtx">
                                        {/* <h4>{title}</h4> */}
                                        <span>{description}</span>
                                        <br /><br /><br />
                                        <span>{link}</span>
                                </div>
                        </div>
                </Col>
        )
}