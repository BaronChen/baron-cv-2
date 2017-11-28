import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import MdEmail from 'react-icons/lib/md/email';
import MdPhoneAndroid from 'react-icons/lib/md/phone-android';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';

export class FooterInfo extends React.Component {

    render() {
        // const { p } = this.props;

        return (
            <div className="footer-info">
                <div>
                    <div>
                        <MdEmail size={32} /> <strong>contact@techtower.com</strong>
                    </div>
                    <div>
                        <MdPhoneAndroid size={32} /> <strong>0401234567</strong>
                    </div>
                </div>
                <div className="social-icon">
                    <TiSocialFacebook size={128} />
                    <TiSocialTwitter size={128} />
                    <TiSocialGooglePlus size={128} />
                </div>
                <h4 className="mt-3 mt-4-lg">© 2017 Tech Tower.  All rights reserved</h4>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        p: getP(state, { polyglotScope: 'footer' })
    }
}

export default connect(mapStateToProps, null)(FooterInfo);