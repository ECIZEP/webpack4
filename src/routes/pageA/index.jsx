import React, { useCallback, useEffect, useState } from 'react';
import {withRouter} from "react-router-dom";
import store from '../../store/index';
import UserContext from '../../common/context/user';
import PropTypes from 'prop-types';

const PageA = (props, context) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(props, context);
        console.log(store.getState());
        store.dispatch({ type:  'INCREMENT'});
    }, []);

    const buttonClick = useCallback(() => {
        // props.history.push('/pageB');
        setCount(count + 1);
    }, props.history);

    return (
        <UserContext.Consumer>
            {value => {
                console.log('pageb func', value);
                return (
                    <div>
                        <p>i am page AAAA</p>
                        <button onClick={buttonClick}>增加</button>
                        <span>{count}</span>
                    </div>
                );
            }}
        </UserContext.Consumer>  
    );
}

PageA.propTypes = {
    history: PropTypes.object
}

export default withRouter(PageA);