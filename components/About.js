import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section>
      <Row style={{backgroundColor: 'black', padding: '10%'}}>
        <Col style={{paddingLeft: '20%'}}>
          <p className="positioned textbold align-left">FUNDRAISER</p>
          <p className="positioned textlight align-left">FOR THE CLASS OF 2025</p>
        </Col>
        <Col style={{paddingRight: '15%'}}>
          <p className="positioned textpararight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;