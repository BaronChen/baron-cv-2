import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { skillSets } from './skill-data';
import { OurSkillBlock } from './our-skill-block.component';

export class OurSkill extends React.Component {

    handleWaypoint() {
        this.setState({
            blockInViewPort: true
        });
    }

    render() {
        const { p } = this.props;

        const skillElements = skillSets.map(
            (row, i) => {
                let cols = row.row.map(
                    (group, j) => {
                        let skills = group.skills.map(
                            (skill, k) => {
                                return <OurSkillBlock key={k} skillName={skill.name} />;
                            }
                        );
                        return (
                            <div className="col" key={j}>
                                {skills}
                            </div>
                        );

                    }
                )

                return (
                    <div className="row" key={i}>
                        {cols}
                    </div>
                );

            }
        )

        return (
            <div className="our-skill">
                <h2>{p.t('header_title')}</h2>
                <div className="container our-skill-container">
                    {skillElements}
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'skillAndExperience' }),
    }
}

export default connect(mapStateToProps, null)(OurSkill);