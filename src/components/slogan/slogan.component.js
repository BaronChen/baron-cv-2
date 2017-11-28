import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { Element, scroller } from 'react-scroll';
import TiArrowDownSick from 'react-icons/lib/ti/arrow-down-thick';

export class Slogan extends React.Component {

    scrollToFooter() {
        scroller.scrollTo('footer', {
            duration: 500,
            smooth: true
        });
    }

    render() {
        const { p } = this.props;
        return (
            <Element name="Slogan" className="slogan">
                <div className="slogan-container">
                    <h2>{p.t('title')}</h2>
                    <div className="text-content">
                        <p>{p.t('text_content')}</p>
                        <TiArrowDownSick onClick = { this.scrollToFooter } size={48} 
                            className="animated infinite pulse" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
            </Element>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'slogan' }),
    }
}

export default connect(mapStateToProps, null)(Slogan);