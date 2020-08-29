import React from 'react';
import Loader from '../components/loader';

const withLoading = (Component) => {
    return (props) => {
        return props.isLoading ? <Loader/> : <Component {...props}/>
    }
}

export default withLoading;