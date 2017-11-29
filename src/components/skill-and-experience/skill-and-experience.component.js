import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { Element } from 'react-scroll';
import OurExperienceBlock from './our-experience-block.component';
import OurSkill from './our-skill.component';
import MdDesktopMac from 'react-icons/lib/md/desktop-mac';
import MdWeb from 'react-icons/lib/md/web';
import MdDevices from 'react-icons/lib/md/devices';
import MdCloudQueue from 'react-icons/lib/md/cloud-queue';

import softwareTitleImage from '../../styles/images/software-title-bg.jpg';
import webTitleImage from '../../styles/images/web-title-bg.jpg';
import itTitleImage from '../../styles/images/it-title-bg.jpg';
import seoTitleImage from '../../styles/images/seo-title-bg.jpg';

export class OurExperience extends React.Component {

    render() {
        // const { p } = this.props;
        
        let whiteTextStyle = {
            backgroundColor: 'white',
            paddingLeft: '20px',
            paddingRight: '20px'
        }

        let blocks = [
            {
                icon: <MdDesktopMac size={64}/>,
                title: 'software_title',
                text: 'software_text',
                titleStyle: {
                    backgroundImage: `url('${softwareTitleImage}')`,
                    backgroundSize: 'cover'
                },
                textStyle: whiteTextStyle
            },
            {
                icon: <MdWeb size={64}/>,
                title: 'web_title',
                text: 'web_text',
                titleStyle: {
                    backgroundImage: `url('${webTitleImage}')`,
                    backgroundSize: 'cover',
                    backgroudPosition: '100% 100%'
                },
                textStyle: whiteTextStyle
            },
            {
                icon: <MdDevices size={64}/>,
                title: 'it_title',
                text: 'it_text',
                titleStyle: {
                    backgroundImage: `url('${itTitleImage}')`,
                    backgroundSize: 'cover',
                    backgroudPosition: '100% 0%'
                },
                textStyle: whiteTextStyle
            },
            {
                icon: <MdCloudQueue size={64}/>,
                title: 'seo_title',
                text: 'seo_text',
                titleStyle: {
                    backgroundImage: `url('${seoTitleImage}')`,
                    backgroundSize: 'cover',
                    backgroudPosition: '100% 0%'
                },
                textStyle: whiteTextStyle
            }
        ];     

        let blockElments = blocks.map( (b, index) => {
            return <OurExperienceBlock blockContent={b} reverse={ index % 2 === 0 } key={index} />
        })
    
        return (
            <Element name="skillAndExperience" className="skill-and-experience">
                <OurSkill />
                <div className="skill-and-experience-container container-fluid">
                    {blockElments}
                </div>
            </Element>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'skillAndExperience' }),
    }
}

export default connect(mapStateToProps, null)(OurExperience);