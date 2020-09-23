import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import store from '../../store/index';
import PropTypes from 'prop-types';

class PageA extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
        this.buttonClick = this.buttonClick.bind(this);
    }

    componentDidMount() {
        console.log(store.getState());
        store.dispatch({ type:  'INCREMENT'});
    }
    render () {
        return (
            <div>
                <p>i am page AAAA</p>
                <button onClick={this.buttonClick}>增加</button>
                <span>{this.state.count}</span>
            </div>  
        )
    }
    buttonClick () {
        
        this.props.history.push('/pageB');
        /* this.setState({
            count: this.state.count + 1
        }) */
    }
}

PageA.propTypes = {
    history: PropTypes.object
}

export default withRouter(PageA);