import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './components/landing';

class Test extends React.Component {
    render() {
        return (
            <div>
                you've reached /test.
            </div>
        );
    }
}

class Meow extends React.Component {
    render() {
        return (
            <div>
                you've reached /meow.
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" token={this.props.token} component={Landing}/>
                <Route path="/meow" component={Meow}/>
            </Router>
        );
    }
}

ReactOnRails.register({
    App,
});
