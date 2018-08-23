import React, { Component } from 'react';

class PageA extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
        this.buttonClick = this.buttonClick.bind(this);
    }
    render () {
        return (
            <div>
                <p>i am page A</p>
                <button onClick={this.buttonClick}>增加</button>
                <span>{this.state.count}</span>
            </div>  
        )
    }
    buttonClick () {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default PageA;