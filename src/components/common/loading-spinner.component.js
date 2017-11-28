import React from 'react';
import { connect } from 'react-redux';

export class LoadingSpinner extends React.Component {

    render() {
        const { footerIsFetching } = this.props;
        let wrapperStyle = { 
            display: footerIsFetching ? 'flex' : 'none',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex:'10000',
            height: '100vh',
            width: '100%'
        }
        return (
            <div id="spinner" style={wrapperStyle}>
                <div className="loader">
                    
                </div>    
            </div>
        );
    }
}


const mapStateToProps = (state) => {
	return {
        footerIsFetching: state.footer.isFetching
	}
}

export default connect(mapStateToProps, null)(LoadingSpinner);