import React from 'react';
import { Col, Row, Button } from 'reactstrap';

const RightActionCard = (props) => {
    return (
    <section style={{paddingBottom: '10%'}}>
        <div className={props.align}>
            <Row>
            <Col>
                <div></div>
            </Col>
            <Col style={{paddingRight: '20%'}}>
                <p className="positioned textlight align-right">{props.text1}</p>
                <p className="positioned textbold align-right">{props.text2}</p>
                <p className="positioned textparaleft">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col style={{paddingLeft: '25%', paddingTop: '1%'}}>
                    <Button className='positioned align-right'>
                        {props.buttonText}
                    </Button>
                </Col>
            </Row>
        </div>
    </section>
    )
}

export default RightActionCard