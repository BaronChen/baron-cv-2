import * as React from 'react';
import { connect } from 'react-redux';

import MyHead from '../my-head/my-head.component';

import MyNavbar from '../my-navbar/my-navbar.component';
import Header from '../header/header.component';
import AboutUs from '../about-us/about-us.component';
import OurService from '../our-service/our-service.component';
import FakeFooter from '../footer/fake-footer.component';
import Footer from '../footer/footer.component';
import LoadingSpinner from '../common/loading-spinner.component';
import Notification from '../common/notification.component';
import Slogan from '../slogan/slogan.component';

import { changeLanguage } from '../my-navbar/my-navbar.actions';
import { metas } from '../common/index-meta';
import { updateTitle, updateMetas } from '../my-head/my-head.actions';



export class Main extends React.Component {

	componentWillMount() {
		this.props.dispatch(updateTitle("Tutorial Site"));
		this.props.dispatch(updateMetas(metas));

		let locale = this.props.locale || 'en';

		this.props.dispatch(changeLanguage(locale));
	}

	render() {
		return (
			<div style={{ position: 'relative' }}>
				<MyHead />
				<LoadingSpinner />
				<Notification />
				<MyNavbar />
				<Header />
				<AboutUs />
				<OurService />
				<Slogan />
				<FakeFooter />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        locale: ownProps.locale
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
