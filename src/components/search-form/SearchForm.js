import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.searchInput = React.createRef();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.searchInput.current.value.toLowerCase());
    }

    render() {
        return (
            <form className='d-flex' onSubmit={(e) => this.onSubmit(e)}>
                <input type='search' className="form-control" placeholder='Search...' ref={this.searchInput} />
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        )
    }
}

export default SearchForm;
