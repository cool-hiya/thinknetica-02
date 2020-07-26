import React, {Component} from 'react';
import SubscribeModal from './SubscribeModal';
import ToggleList from './ToggleList';

class BookCard extends Component {

    renderBadges(followers) {
        if (followers >= 20) {
            return (
                <span className='badge badge-primary'>Popular</span>
            )
        }
    }

    render() {
        let {book: {title, pageCount, language, cover, followers, expectedPrice, authors}} = this.props;

        return (
            <div className='card'>
                <img src={cover} className='card-img-top' />
                <div className='card-body'>
                    <h2 className='card-title'>{title} {this.renderBadges(followers)}</h2>
                    <div className='list-group'>
                        <p className='list-group-item'>Language: {language}</p>
                        <p className='list-group-item'>Page count: {pageCount}</p>
                        <p className='list-group-item'>Price: ${expectedPrice}</p>
                        <p className='list-group-item'>Followers: {followers}</p>
                        <p className='list-group-item'>Authors:
                            <ToggleList elements={authors} />
                        </p>
                    </div>
                    <SubscribeModal />
                </div>
            </div>
        );
    }
}

export default BookCard;
