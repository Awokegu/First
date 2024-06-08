import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134, 61, 176)" }}>
                Certificates Page is Under Construction
              </h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about">
            <Row>
              <Col md={12}>
                <Fade bottom duration={2000} distance="20px">
                  <div className="text-center">
                    <h2 style={{ color: "#fbd9ad" }}>
                      This page is currently under construction. Please check back
                      later.
                    </h2>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </section>
  );
}