import ReactDomServer from 'react-dom/server';
import React from 'react';
import App from './components/app/App';
import books from './data/books.json';

const render = () => ReactDomServer.renderToString(<App books={books}/>);

export default render;