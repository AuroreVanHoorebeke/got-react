import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import ContentAPI from './components/ContentAPI.jsx'

const app = document.querySelector('#app');

ReactDOM.render(
    <>
        <ContentAPI />
    </>,
    app
)
