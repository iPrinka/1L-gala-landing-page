import React from 'react';
import { Button } from 'reactstrap';
import Background from './Background';


const Hero = () => {
    return (
        <section className="section position-relative">
            <Background img="/hero.png"/>
            <div style={{paddingBottom: '4%'}}>
                <p className="positioned headerlight">ONE LEAGUE NEW YEAR</p>
                <p className="positioned header">GLOBAL GALA</p>
                <p className="positioned text">Help us bring world-class education to those who cannot afford it</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <a href='https://one-league.org' target="_blank">
                    <Button className='positioned'>
                        GIVE FORWARD
                    </Button>
                </a>
                <p className="positioned supersmall">Fundraise Event | January 21, 2023</p>
            </div>
        </section>
    )
}

export default Hero