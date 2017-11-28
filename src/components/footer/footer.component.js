import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import ContactUsForm from './contact-us-form.component';
import FooterInfo from './footer-info.component';
import { bindActionCreators } from 'redux';

import { postForm } from './footer.actions';

export class Footer extends React.Component {

    constructor(props) {
		super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm = (values) => {
        this.props.postForm(values);
    }

    render() {
        const { p } = this.props;
        let visibilityStyle = { 
            visibility: this.props.showFooter ? 'visible' : 'hidden'
        }
        return (
            <div id="footer-container" className="footer-container contiainer-fluid" style={visibilityStyle}>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div id="contact-us-form-container" className="contact-us-form-container">
                            <h3>{p.t('contact_us')}</h3>
                            <ContactUsForm onSubmit={this.submitForm}/>  
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 footer-info-container">
                        <FooterInfo />
                    </div>  
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
	return {
		p: getP(state, { polyglotScope: 'footer' }),
        showFooter: state.footer.showFooter,

	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        postForm: bindActionCreators(postForm, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);