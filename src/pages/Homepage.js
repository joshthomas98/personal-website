import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RecentWorkCarousel from "../components/RecentWorkCarousel";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToCodingPortfolio = () => {
    navigate("/codingportfolio");
  };

  const navigateToMyMusic = () => {
    navigate("/mymusic");
  };

  return (
    <div>
      <section className="bg-lighter-grey pb-5">
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <h1 className="pt-5">A bit about me...</h1>

              <p>
                Hello there! I'm Josh Thomas, a 25-year-old junior software
                engineer based in Caerphilly. By day, I'm immersed in the world
                of coding, building digital solutions and embracing the
                challenges that come with it.
              </p>

              <p>
                But beyond the screen, I'm a guitarist, finding joy in weaving
                melodies and stories through the strings. Music is my way of
                expressing what words can't capture.
              </p>

              <p>
                Weight training is another passion of mine, a grounding practice
                that teaches me discipline and resilience. And when I'm not in
                front of a computer or with a guitar in hand, you'll likely find
                me exploring the wonders of aviation.
              </p>

              <p>
                This website is my virtual space—a hub where potential employers
                can dive into my coding portfolio, and where I can share my
                musical projects. It's a reflection of the dual worlds I
                inhabit, showcasing my technical skills alongside my love for
                music. Thanks for stopping by!
              </p>

              <div className="text-center">
                <Button onClick={navigateToCodingPortfolio}>
                  My Coding Portfolio
                </Button>
                <Button className="mx-3" onClick={navigateToMyMusic}>
                  My Music
                </Button>
              </div>
            </Col>

            <Col align="center">
              <img
                className="img-fluid pt-5"
                src="../../images/grad-pic.jpeg"
                alt="Grad pic"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <section className="py-5">
          <RecentWorkCarousel />
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
