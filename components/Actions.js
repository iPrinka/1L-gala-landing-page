import React from 'react';
import LeftActionCard from './LeftActionCard';
import Background from './Background';
import bg from '../public/bg.png'
import RightActionCard from './RightActionCard';

const Actions = () => {
    return (
        <section className="section position-relative" style={{padding: '10%'}}>
            <Background img={bg}/>
            <LeftActionCard 
                text1="PARTICIPATE IN OUR"
                text2="AUCTION"
                align="align-left"
                buttonText="EXPLORE 1L MERCHANDISE"
            />
            <RightActionCard 
                text1="MAKE A"
                text2="DONATION"
                align="align-right"
                buttonText="MAKE A DONATION"
            />
            <LeftActionCard 
                text1="BECOME A"
                text2="VOLUNTEER"
                align="align-left"
                buttonText="VOLUNTEER TODAY"
            />
        </section>
    )
}

export default Actions