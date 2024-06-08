import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
//import cb from "../../../images/cb.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "./Toolkit.css"; // Import the CSS file
export default function Toolkit() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const getIconName = (icon) => {
    switch (icon) {
      case vs:
        return "Visual Studio Code";
      case pc:
        return "Personal Computer";
      case git:
        return "Git";
      case github:
        return "GitHub";
      // case cb:
      //   return "Codepen";
      case pm:
        return "post man";
      case chrome:
        return "Google Chrome";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(vs)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={vs} alt="" style={{ width: "70%", height: "70%" }} />
            {hoveredIcon === vs && (
              <div className="icon-name">Visual Studio Code</div>
            )}
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(pc)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pc} alt="" style={{ width: "70%", height: "70%" }} />
            {hoveredIcon === pc && (
              <div className="icon-name">Personal Computer</div>
            )}
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(git)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={git} alt="" style={{ width: "70%", height: "70%" }} />
            {hoveredIcon === git && <div className="icon-name">Git</div>}
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(github)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={github}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
            {hoveredIcon === github && <div className="icon-name">GitHub</div>}
          </Col>
          {/* <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(cb)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={cb} alt="" style={{ width: "95%", height: "95%" }} />
            {hoveredIcon === cb && <div className="icon-name">Codepen</div>}
          </Col> */}
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(pm)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pm} alt="" style={{ width: "70%", height: "70%" }} />
            {hoveredIcon === pm && (
              <div className="icon-name">Project Management</div>
            )}
          </Col>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            onMouseEnter={() => handleMouseEnter(chrome)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={chrome} alt="" style={{ width: "70%", height: "70%" }} />
            {hoveredIcon === chrome && (
              <div className="icon-name">Google Chrome</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}