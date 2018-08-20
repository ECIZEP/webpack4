import React from 'react';
import { Route } from 'react-router-dom';

import B1 from './children/pageB1.jsx';

class PageB extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <p>i am page B</p>
                <Route path="/pageB/B1" component={B1}></Route>
            </div>
            
            
        )
    }
}

export default PageB;