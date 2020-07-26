import React, {Component} from 'react';

class AuthorCard extends Component {
    render() {
        if (!this.props.author) {
            return <div>Author is unavailable</div>
        }

        const {author: {name, email, avatar, description}} = this.props;

        return (
            <div className='card'>
                <img src={avatar} className='card-img-top' />
                <div className='card-body'>
                    <h2 className='card-title'>{name}</h2>
                    <p>{description}</p>
                    <a href='#'>{email}</a>
                </div>
            </div>
        );
    }
}

export default AuthorCard;
