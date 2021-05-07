import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loggedInUser: "",
			isLoggedIn: false,
		}
	}

	componentDidMount() {
		if (window.location.href.includes("/home")) {
			this.setState({
				isLoggedIn: true
			})
		}
	}

	login = (username) => {
		this.setState({
			loggedInUser: username, 
			isLoggedIn: true
		})
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Fragment>
						<Navbar isLoggedIn={this.state.isLoggedIn} />
						<Switch>
							<Route exact path="/" render={(props) => (
    									<Login {...props} login={this.login} />
  							)} />
							<Route exact path="/login" render={(props) => (
    									<Login {...props} login={this.login} />
  							)} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/welcome" component={Welcome} />
							<Route exact path="/home" component={Home} />
						</Switch>
					</Fragment>
				  </Router>
			</div>
		  );
	}
}

export default App;
