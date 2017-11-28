import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import MyInput  from '../common/my-input.component';
import MdEmail  from 'react-icons/lib/md/email';
import MdPerson  from 'react-icons/lib/md/person';

export class ContactUsForm extends React.Component {

    componentWillReceiveProps(nextProps) {
     
    }

    required = (field) => (value) => { 
        if (!value || value === '') {
            return `${field} cannot be empty.`;
        }

        return undefined;
    }

    nameRequired = this.required('Name');
    emailRequired = this.required('Email');
    messageRequired = this.required('Message');

    validEmail = (value) => { 
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return "Invalid email address.";
        }

        return undefined;
    }

    render() {
        const { p, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field component={MyInput} name={p.t('contact_us_name')}  label={p.t('contact_us_name')} isTextArea={false}  validate={this.nameRequired}
                    icon={   <span className="input-group-addon"><MdPerson size={20}/></span>  }/>
                <Field component={MyInput} name={p.t('contact_us_email')}  label={p.t('contact_us_email')} isTextArea={false}  validate={this.validEmail}
                    icon={   <span className="input-group-addon"><MdEmail size={20}/></span>  }/>
                <Field component={MyInput} name={p.t('contact_us_message')} label={p.t('contact_us_message')} isTextArea={true}  validate={this.messageRequired}/>
                <Button className="btn btn-outline-primary" type="submit">Submit</Button>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
	return {
		p: getP(state, { polyglotScope: 'footer' })
	}
}

const myReduxForm = reduxForm({
  form: 'contactUs'
})(ContactUsForm);

export default connect(mapStateToProps, null)(myReduxForm)