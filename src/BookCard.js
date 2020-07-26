import React, {Component} from 'react';

class BookCard extends Component {
    render() {
        if (!this.props.book) {
            return <div>Book is unavailable</div>
        }

        const {book: {title, pageCount, language, cover, author, expectedPrice}} = this.props;

        return (
            <div className='card'>
                <img src={cover} className='card-img-top' />
                <div className='card-body'>
                    <h2 className='card-title'>{title}</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>Language: {language}</li>
                        <li className='list-group-item'>Page count: {pageCount}</li>
                        <li className='list-group-item'>Price: ${expectedPrice}</li>
                        <li className='list-group-item'>Author: {author.name}</li>
                    </ul>
                    <button className='btn btn-primary' type='button'>Subscribe</button>
                </div>
            </div>
        );
    }
}

export default BookCard;
