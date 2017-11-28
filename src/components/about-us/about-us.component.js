import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { Element, scroller } from 'react-scroll';

export class AboutUs extends React.Component {

    scrollToFooter() {
        scroller.scrollTo('footer', {
            duration: 500,
            smooth: true
        });
    }

    render() {
        const { p } = this.props;
        return (
            <Element name="aboutUs" className="about-us">
                <div className="about-us-container">
                    <h2>{p.t('title')}</h2>
                    <div className="text-content">
                        <p>{p.t('text_content')}</p>
                    </div>
                </div>
                <div className="about-us-footer">
                    <button className="btn btn-primary btn-lg" onClick = { this.scrollToFooter }>Get in touch now!</button>
                </div>
            </Element>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'aboutUs' }),
    }
}

export default connect(mapStateToProps, null)(AboutUs);