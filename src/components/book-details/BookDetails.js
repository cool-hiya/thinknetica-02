import React from 'react';
import SubscribeModal from '../subscribe-modal';
import Authors from '../book-authors';
import Recommended from '../recommended';
import books from '../../data/books.json';

const BookDetails = ({book}) => {

    const {title, pageCount, language, cover, followers, expectedPrice, authors} = book;

    return (
        <div class='jumbotron'>
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
                        <div className='list-group-item'>Price: ${expectedPrice}</div>
                        <div className='list-group-item'>Followers: {followers}</div>
                    </div>
                    <SubscribeModal />
                </div>
            </div>
            <div class='row'>
                <Recommended books={books} />
            </div>
        </div>
    );
}

export default BookDetails;
