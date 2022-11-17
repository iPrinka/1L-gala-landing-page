import React from 'react';
import { Button, Container} from 'reactstrap';
import bg from '../public/hero.png'
import Background from './Background';


const Hero = () => {
    return (
        <section className="section position-relative">
            <Background img={bg}/>
            <div style={{paddingBottom: '4%'}}>
                <p className="positioned headerlight">ONE LEAGUE NEW YEAR</p>
                <p className="positioned header">GLOBAL GALA</p>
                <p className="positioned text">Help us bring world-class education to those who cannot afford it</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Button className='positioned'>
                    GIVE FORWARD
                </Button>
                <p className="positioned supersmall">Fundraise Event | January 21, 2023</p>
            </div>
        </section>
    )
}

export default Hero