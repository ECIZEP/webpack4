import React from 'react';
import UserContext from '@common/context/user.js';

class PageB extends React.Component {
    
    constructor (props) {
        super(props);
        console.log('pageb context', this.context);

    }
    render () {
        return (
            <div>
                <p>i am page B</p>
            </div>
        )
    }
}

PageB.contextType = UserContext;

export default PageB;