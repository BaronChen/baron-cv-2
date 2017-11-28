import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import { Element } from 'react-scroll';

import { bindActionCreators } from 'redux';

import { setFooterVisibility } from './footer.actions';

export class FakeFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '0px'
        }
        this.calculateHeight = this.calculateHeight.bind(this);
    }

    componentDidMount(){
        this.calculateHeight();
        window.addEventListener("resize", this.calculateHeight);
    }

    calculateHeight() {
        let footerHeiight = document.getElementById('footer-container').clientHeight;
        this.setState({
            height: footerHeiight + 'px'
        });
    }

    handleWaypoint() {
        this.props.setFooterVisibility(true);
    }

    render() {
        return (
            <Element name="footer">
                <Waypoint onEnter={this.handleWaypoint.bind(this)} topOffset="-100px" bottomOffset="-100px"/>
                <div style={{height: this.state.height}} className="fake-footer">
                    
                </div>
                <Waypoint onEnter={this.handleWaypoint.bind(this)} topOffset="-100px" bottomOffset="-100px"/>
            </Element>
            
        );
    }
}


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFooterVisibility: bindActionCreators(setFooterVisibility, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FakeFooter);