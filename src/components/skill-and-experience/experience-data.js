import React from 'react';
import ClassLogo from '../../styles/images/class.png';
import MacquarieLogo from '../../styles/images/macquarie.png';
import QuadLogo from '../../styles/images/quad.png';

let whiteTextStyle = {
    backgroundColor: '#00bfff',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px'
}

export const experienceData = [
    {
        logo: <img src={ClassLogo}/>,
        title: 'class_title',
        timeline: 'class_timeline',
        text: 'class_text',
        titleStyle: {
            backgroundColor: 'white',
            backgroundSize: 'cover'
        },
        textStyle: whiteTextStyle
    },
    {
        logo: <img src={MacquarieLogo}/>,
        title: 'macquarie_title',
        timeline: 'macquarie_timeline',
        text: 'macquarie_text',
        titleStyle: {
            backgroundColor: 'white',            
            backgroundSize: 'cover'
        },
        textStyle: whiteTextStyle
    },
    {
        logo: <img src={QuadLogo}/>,
        title: 'quad_title',
        timeline: 'quad_timeline',
        text: 'quad_text',
        titleStyle: {
            backgroundColor: 'white',            
            backgroundSize: 'cover'
        },
        textStyle: whiteTextStyle
    }
];     