import React from 'react';
import { Route, Link } from 'react-router-dom';

import B1 from './children/pageB1.jsx';

class PageB extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <p>i am page B</p>
                <Link to="/pageB/B1"><button>pageB1</button></Link>
                <Route path="/pageB/B1" component={B1}></Route>
            </div>
        )
    }
}

export default PageB;