import * as React from 'react';
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";

export class MyHead extends React.Component {

    render() {
        const { metas, title } = this.props;
        let metaTags;
        if (metas) {
            metaTags = metas.map(
                (meta, index) => <meta key={index} name={meta.name} content={meta.content} />
            );
        }
        return (
            <Helmet>
                <title>{ title }</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                {metaTags}
            </Helmet>            
        );
    }
}


const mapStateToProps = (state) => {
    return {
        title: state.myHead.title,
        metas: state.myHead.metas
    }
}

export default connect(mapStateToProps, null)(MyHead);