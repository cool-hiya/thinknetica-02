import React from 'react';
import {render} from '@testing-library/react';
import AuthorCard from './AuthorCard';
import '@testing-library/jest-dom/extend-expect';

test('render author card', () => {
    const author = {
        name: 'Ermisenda Alvarez',
        email: 'elmiza.gmail.com',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/2714303/ae71b20a-31ba-4fb9-84e1-7386270ca254/s1200?webp=false',
        description: 'Lorem ipsum lorem ipsum'
    }

    const {getByText} = render(<AuthorCard author={author} />);
    expect(getByText('Ermisenda Alvarez')).toBeInTheDocument;
})

test('render unavailable author', () => {
    const {getByText} = render(<AuthorCard />);
    expect(getByText('Author is unavailable')).toBeInTheDocument;
});