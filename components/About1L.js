import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Image from 'next/image';

const About1L = () => {
    return (
        <section>
            <Row style={{backgroundColor: 'black', justifyContent: 'center', paddingTop: '5%', paddingBottom: '2%'}}>
                <p className="positioned headerlight">WHAT IS</p>
                <p className="positioned headerbold">ONE LEAGUE?</p>
            </Row>
            <Row style={{backgroundColor: 'black'}}>
                <Col style={{paddingLeft: '15%'}}>
                <p className="positioned textparaleft">
                    One League is a global education institution collaborating closely with Harvard, MIT, and Stanford to offer world-class education and opportunity to the most talented, underserved population of the world to realize global impact.
                </p>\<p className="positioned textparaleft">
                One League fellows join from their respective countries to learn from award-winning faculty and are championed by the organization's extensive coalition of industry executives and leaders and receive guidance, support, and access to opportunities to seek venture funding to propel world-changing ideas.
                </p>
                <Col style={{paddingLeft: '15%'}}>
                    <Button className='positioned align-right'>
                        LEARN MORE
                    </Button>
                </Col>
                </Col>
                <Col style={{paddingRight: '15%'}}>
                    <Image src="/1L.png" alt="ONE LEAGUE" width="150" height="100" layout='responsive'/>
                </Col>
            </Row>
            <Row style={{padding: '10%', paddingTop: '0%', backgroundColor: 'black'}}>
                <Image src="/quote.png" alt="ONE LEAGUE" width="150" height="100" layout='responsive'/>
            </Row>
        </section>
    )
}

export default About1L;