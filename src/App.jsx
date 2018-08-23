import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import './index.less';

import { HashRouter, Route, Switch} from 'react-router-dom';
const PageA = Loadable({
    loader: () => import(
        /* webpackChunkName: "pageA" */
        './routes/pageA/index.jsx'
    ),
    loading: () => null
})
const PageB = Loadable({
    loader: () => import(
        /* webpackChunkName: "pageB" */
        './routes/pageB/index.jsx'
    ),
    loading: () => null
})
import logo from '../public/images/react-logo.png'

/* if(module.hot){
    module.hot.accept();
} */
  
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: 'react, biu, biu, biu'
        }

    }
    render () {
        return (
            <HashRouter>
                <div className="container">
                    <h1>{this.state.title}</h1>
                    <img src={logo} alt=""/>
                    <button onClick={this.toPageA}>pageA</button>
                    <button onClick={this.toPageB}>PageB</button>
                    <Switch>
                        <Route path="/pageA" component={PageA} ></Route>
                        <Route path="/pageB" component={PageB} ></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
    toPageA () {
        location.hash = '#/pageA';
    }
    toPageB () {
        location.hash = '#/pageB';
    }
}

/* eslint-disable no-undef */
export default hot(module)(App)

console.log('eslint disable'); // eslint-disable-line

/* eslint-disable */
let a;
let b;
/* eslint-enable */