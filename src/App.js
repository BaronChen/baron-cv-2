import * as React from 'react';
import { connect } from 'react-redux';

import {MainEn, MainZh} from './components/main/main-lang.component';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<Switch>
				<Route exact path='/' component={MainEn}/>
				<Route path='/en' component={MainEn}/>
				<Route path='/zh' component={MainZh}/>
				{/*Shoud be a 404 page*/}
				<Route component={MainZh}/> 
			</Switch>
		)
	}
}

//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const mapStateToProps = (state) => {
	return {
		location: state.router.location
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch: dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
