import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { scrollSpy, Link } from 'react-scroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getP, getLocale } from 'redux-polyglot';
import { push } from 'react-router-redux';

import logo from '../../styles/images/logo.png';

export class MyNavbar extends React.Component {

	scrolledNavbar = 'navbar-color-scrolled navbar-animation';
	topNavbar = 'navbar-animation';

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			navbarClassName: 'navbar-animation'
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this));
		this.handleScroll();
		// Events.scrollEvent.register('end', function (to, element) {
		// 	console.log("end", arguments);
		// });

		scrollSpy.update();
	}

	componentWillUnmount() {
		// Events.scrollEvent.remove('end');
	}

	changePath = (path) => {
		this.props.push(path);
	}

	handleScroll() {
		
		if (window.scrollY === 0 && this.state.navbarClassName !== this.topNavbar) {
			this.setState({
				navbarClassName: this.topNavbar
			});
		} else if (window.scrollY !== 0 && this.state.navbarClassName !== this.scrolledNavbar) {
			this.setState({
				navbarClassName: this.scrolledNavbar
			});
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const { p, currentLocale } = this.props;
		let menuItems = [
			{
				text: 'about_us',
				link: 'aboutUs'
			},
			{
				text: 'our_service',
				link: 'ourService'
			},
			{
				text: 'contact_us',
				link: 'footer'
			}
		];

		let menus = menuItems.map(
			(menuItem, index) =>
				<NavItem key={index}>
					<Link style={{cursor: 'pointer'}} className="nav-link" activeClass="active" to={menuItem.link} spy={true} smooth={true} offset={-75} duration={500}>
						{p.t(menuItem.text)}
					</Link>
				</NavItem>
		);

		let languageMenu;
		if (currentLocale === 'en'){
			languageMenu =<NavLink style={{cursor: 'pointer'}} onClick={ () => { this.changePath('/zh') } }>{p.t("language_menu")}</NavLink>;
		}else if(currentLocale === 'zh'){
			languageMenu = <NavLink style={{cursor: 'pointer'}} onClick={ () => { this.changePath('/en') } }>{p.t("language_menu")}</NavLink>;
		}

		return (
			<div>
				<Navbar className={`${this.state.navbarClassName}`} fixed="top" light toggleable>
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand className="horizontal-align" href="/"><img className="logo" alt="logo" src= { logo }/><h3 className="navbrand-color" >Logo Text</h3></NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{menus}
							<NavItem>
								{languageMenu}
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		p: getP(state, { polyglotScope: 'navbar' }),
		currentLocale: getLocale(state)
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        push: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
