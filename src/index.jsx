import React from 'react'
import ReactDom from 'react-dom';
import App from './App.jsx';
import {IntlProvider, addLocaleData} from 'react-intl';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
// import zh_CN from './locales/zh_CN.js';
import en_US from './locales/en_US.js';

addLocaleData([...en, ...zh]);

let messages = en_US;
let locale = 'en';

ReactDom.render(
    <IntlProvider locale={locale} messages={messages}>
        <App/>
    </IntlProvider>
    , document.getElementById('app'));