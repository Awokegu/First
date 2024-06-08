import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Graphics_Design from "../../images/Graphics_Design.jpg";
import CCNA_Certificate from "../../images/CCNA_CLASSES.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={6}>
              <img
                src={Graphics_Design}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={6}>
              <img
                src={CCNA_Certificate}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}