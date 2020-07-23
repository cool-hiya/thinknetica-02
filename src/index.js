import ReactDom from 'react-dom';
import React from 'react';
import App from './App';

const book = {
    title: 'Sunset kisses',
    pageCount: 256,
    language: 'English',
    progress: 20,
    cover: 'https://i.pinimg.com/736x/40/ee/a9/40eea909c0a3b28562daf6dc50b070e8--dramas-free-books.jpg',
    author: {
        name: 'Ermisenda Alvarez',
        email: 'elmiza.gmail.com',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/2714303/ae71b20a-31ba-4fb9-84e1-7386270ca254/s1200?webp=false',
        description: 'Lorem ipsum lorem ipsum'
    },
    minPrice: 20,
    expectedPrice: 30,
    total: 40,
    expectedTotal: 90
}

ReactDom.render(<App book={book} />, document.getElementById('root'));



