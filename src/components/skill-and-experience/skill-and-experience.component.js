import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { Element } from 'react-scroll';
import OurExperienceBlock from './our-experience-block.component';
import OurSkill from './our-skill.component';
import { experienceData } from './experience-data';


export class SkillAndExperience extends React.Component {

    render() {
        let blockElments = experienceData.map((b, index) => {
            return <OurExperienceBlock blockContent={b} reverse={index % 2 === 0} key={index} />
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

export default connect(mapStateToProps, null)(SkillAndExperience);