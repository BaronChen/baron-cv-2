import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';
import { showNotification } from './common.actions';

export class Notification extends React.Component {

    constructor(props) {
		super(props);
        this.addNotification = this.addNotification.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.title && nextProps.message && nextProps.level
            && nextProps.title !== '' && nextProps.message !== '' && nextProps.level !== '') {
                this.addNotification(nextProps.title, nextProps.message, nextProps.level);
                this.props.showNotification('','','');
            }
            
    }

    componentDidMount() {
    }

    addNotification = (title, message, level) => {
        this.notificationSystem.addNotification({
            title: title,
            message: message,
            level: level,
            position: 'br'
        });
    }

    render() {     
        return (
            <NotificationSystem ref={
                    (c) => {
                        this.notificationSystem = c
                    }
            } />
        );
    }
}

const mapStateToProps = (state) => {
	return {
        title: state.notification.title,
        message: state.notification.message,
        level: state.notification.level
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNotification: bindActionCreators(showNotification, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);