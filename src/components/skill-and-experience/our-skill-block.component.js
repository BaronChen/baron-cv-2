import React from 'react';

export class OurSkillBlock extends React.Component {

    render() {
        const { skillName, level } = this.props;

        return (
            <div className="our-skill-block">
                <h6>{skillName}</h6>
                <div className="progress">
                    <div className="progress-bar bg-info" style={{width: level}}></div>
                </div>
            </div>
        );
    }
}


export default OurSkillBlock;