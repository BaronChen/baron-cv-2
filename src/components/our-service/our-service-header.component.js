import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';

export class OurServiceHeader extends React.Component {

    handleWaypoint() {
        this.setState({
            blockInViewPort: true
        });
    }

    render() {
        const { p } = this.props;

        return (
            <div className="our-service-header">
                <h2>{p.t('header_title')}</h2>
                <p className="text-content">{p.t('header_text')}</p>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'ourService' }),
    }
}

export default connect(mapStateToProps, null)(OurServiceHeader);