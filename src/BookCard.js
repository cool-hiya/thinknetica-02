import React, {Component} from 'react';

class BookCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allAuthors: false
        }
    }

    onAllAuthorsShow() {
        this.setState({allAuthors: !this.state.allAuthors});
    }

    renderBadges(followers) {
        if (followers >= 20) {
            return (
                <span className='badge badge-primary'>Popular</span>
            )
        }
    }

    renderAuthors(authors) {
        return authors.map(({name, id}) => {
            return (
                <p key={id}>{name}</p>
            )
        })
    }

    renderShowMoreButton(show) {
        if (!show) {
            return;
        }

        return (
            <button className='btn btn-primary' onClick={() => this.onAllAuthorsShow()}>Show</button>
        )
    }

    render() {
        let {book: {title, pageCount, language, cover, followers, expectedPrice, authors}} = this.props;
        let {allAuthors} = this.state;
        let showMoreButton = authors.length > 3;

        if (!allAuthors) {
            authors = authors.slice(0, 3);
        }

        return (
            <div className='card'>
                <img src={cover} className='card-img-top' />
                <div className='card-body'>
                    <h2 className='card-title'>{title} {this.renderBadges(followers)}</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'>Language: {language}</li>
                        <li className='list-group-item'>Page count: {pageCount}</li>
                        <li className='list-group-item'>Price: ${expectedPrice}</li>
                        <li className='list-group-item'>Followers: {followers}</li>
                        <li className='list-group-item'>Authors:
                            {this.renderAuthors(authors)}
                            {this.renderShowMoreButton(showMoreButton)}
                        </li>
                    </ul>
                    <button className='btn btn-primary' type='button'>Subscribe</button>
                </div>
            </div>
        );
    }
}

export default BookCard;
