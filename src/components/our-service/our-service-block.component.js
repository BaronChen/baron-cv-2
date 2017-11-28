import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import classNames from 'classnames';
import Waypoint from 'react-waypoint';

export class OurServiceBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blockInViewPort: false
        }
    }

    handleWaypoint() {
        this.setState({
            blockInViewPort: true
        });
    }

    render() {
        const { p, blockContent, reverse } = this.props;

        let leftClassNames = classNames('col-lg-6', 'col-12', 'block',
            { animated: this.state.blockInViewPort, slideInLeft: this.state.blockInViewPort });

        let rightClassNames = classNames('col-lg-6', 'col-12', 'block',
            { animated: this.state.blockInViewPort, slideInRight: this.state.blockInViewPort });

        let rowClassName = classNames('row', {'flex-lg-row-reverse': reverse});

        return (

            <div className={rowClassName}>
                <Waypoint fireOnRapidScroll={true} onEnter={this.handleWaypoint.bind(this)} />
                <div style={blockContent.titleStyle} className={reverse ? rightClassNames : leftClassNames} >
                </div>
                <div style={blockContent.textStyle} className={reverse ? leftClassNames : rightClassNames} >
                    {blockContent.icon}
                    <h3 style={{marginTop: '20px'}}>{p.t(blockContent.title)}</h3>
                    <p>{p.t(blockContent.text)}</p>
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'ourService' }),
    }
}

export default connect(mapStateToProps, null)(OurServiceBlock);