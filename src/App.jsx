import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import './index.less';

import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
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

import { FormattedMessage } from 'react-intl';
  
class App extends React.Component {

    constructor (props) {
        super(props);
        console.log(this);
    }

    render () {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1>
                        <FormattedMessage id="index" />
                    </h1>
                    <img src={logo} />
                    <Link to="/pageA"><button>pageA</button></Link>
                    <Link to="/pageB"><button>PageB</button></Link>
                    <Switch>
                        <Route path="/pageA" component={PageA} ></Route>
                        <Route path="/pageB" component={PageB} ></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default hot(module)(App)