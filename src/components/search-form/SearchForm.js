import React from 'react';
import styles from './search-form.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('search-form');

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
            <form className={styles[bem()]} onSubmit={(e) => this.onSubmit(e)}>
                <input type='search' className={styles[bem('control')]} placeholder='Search...' ref={this.searchInput} />
                <button type='submit' className={styles[bem('button')]}>Search</button>
            </form>
        )
    }
}

export default SearchForm;
