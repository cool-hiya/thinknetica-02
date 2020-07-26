import ReactDomServer from 'react-dom/server';
import React from 'react';
import App from './App';
import books from './books.json';

const render = () => ReactDomServer.renderToString(<App books={books}/>);

export default render;