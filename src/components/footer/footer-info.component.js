import React from 'react';
import { connect } from 'react-redux';
import { getP } from 'redux-polyglot';
import MdEmail from 'react-icons/lib/md/email';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';

export class FooterInfo extends React.Component {

    render() {
        // const { p } = this.props;

        return (
            <div className="footer-info">
             
                <div className="social-icon">
                    <a href="https://github.com/baronchen">
                        <TiSocialGithub size={96} />
                    </a>
                    <a href="https://www.linkedin.com/in/baron-chen-76390073/">
                        <TiSocialLinkedin size={96} />
                    </a>
                    <a href="https://plus.google.com/117604627300727353717/about">
                        <TiSocialGooglePlus size={96} />
                    </a>
                </div>
                <h4 className="mt-3 mt-4-lg">© 2017 Baron Chen.  All rights reserved</h4>
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