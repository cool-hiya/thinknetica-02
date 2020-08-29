import React from 'react';
import AuthContext from '../../context/AuthContext';
import styles from './user-info.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('user-info');

const UserInfo = () => {
    const {avatarUrl, firstName, lastName} = React.useContext(AuthContext);

    return (
        <div className={styles[bem()]}>
            <img src={avatarUrl} className={styles[bem('avatar')]} />
            <span className={styles[bem('name')]}>{firstName} {lastName}</span>
        </div>
    );
}

export default UserInfo;
