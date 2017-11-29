import React from 'react';

export class OurSkillBlock extends React.Component {

    render() {
        const { skillName } = this.props;

        return (
            <div className="our-skill-block">
                {skillName}
            </div>
        );
    }
}


export default OurSkillBlock;