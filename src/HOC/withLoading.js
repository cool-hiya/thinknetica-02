import React from 'react';

const withLoading = (Component) => {
    return (props) => {
        return props.isLoading ? <p>Loading...</p> : <Component {...props}/>
    }
}

export default withLoading;