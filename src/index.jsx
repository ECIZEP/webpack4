import React from 'react';
import ReactDom from 'react-dom';
import './index.less';

function Index() {
    return (
        <div className="container">
            <h1>Hello React!</h1>
        </div>
    );
}

ReactDom.render(<Index />, document.getElementById('app'));