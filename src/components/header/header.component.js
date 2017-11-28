import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';

export class Header extends React.Component {

    render() {
        const { p } = this.props;
        return (
            <div className="header">
                <div className="header-container">
                    <div className="overlay"></div>
                    <h1>{p.t('slogan')}</h1>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'header' }),
    }
}

export default connect(mapStateToProps, null)(Header);