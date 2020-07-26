import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app/App';
import books from './data/books.json';

ReactDom.render(<App books={books} />, document.getElementById('root'));



