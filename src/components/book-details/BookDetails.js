import React, {Component} from 'react';
import SubscribeModal from '../subscribe-modal';
import Authors from '../book-authors';
import Recommended from '../recommended';
import books from '../../data/books.json';

class BookDetails extends Component {

    constructor(props) {
        super(props);

        this.priceInput = React.createRef();
    }

    componentDidMount() {
        this.focusPriceField();
    }

    componentDidUpdate() {
        this.focusPriceField();
    }

    focusPriceField() {
        this.priceInput.current.focus();
    }

    render() {
        const {title, pageCount, language, cover, followers, expectedPrice, authors} = this.props.book;

        return (
            <div className='jumbotron'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src={cover} className='card-img-top' />
                    </div>
                    <div className='col-lg-7'>
                        <h1>{title}</h1>
                        <div className='list-group'>
                            <div className='list-group-item'>Authors:
                            <Authors authors={authors} />
                            </div>
                            <div className='list-group-item'>Language: {language}</div>
                            <div className='list-group-item'>Page count: {pageCount}</div>
                            <div className='list-group-item'>Suggested price: ${expectedPrice}</div>
                            <div className='list-group-item'>Followers: {followers}</div>
                            <div className='list-group-item'>You pay:
                            <input type='text' ref={this.priceInput} />
                            </div>
                        </div>
                        <SubscribeModal />
                    </div>
                </div>
                <div className='row'>
                    <Recommended books={books} />
                </div>
            </div>
        );
    }
}

export default BookDetails;
