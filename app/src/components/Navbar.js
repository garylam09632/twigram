import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logout from './auth/Logout'

class Navbar extends Component {

	iconClick = () => {
		if (this.props.isLoggedIn) {
			window.location.href = "/home";
		}
		else {
			window.location.href = "/login";
		}
	}

	render() {
		return (
			<Container fluid id="nav-container">
				<Row>
					<Col md={2} />
					<Col md={10}>
						<nav className="navbar">
							<a id="title" className="navbar-brand text-light" onClick={() => this.iconClick()}>
								Twigram
							</a>
							<form className="form-inline">
								<a id="nav-signup-btn" href="/signup" className="btn bg-info my-2 my-sm-0 text-white">Sign Up</a>
								<a id="nav-login-btn" href="/login" className="btn btn-success  my-2 my-sm-0">Login</a>
								<Logout loggedIn={this.props.isLoggedIn} />
							</form>
						</nav>
					</Col>
					<Col />
				</Row>
			</Container>
		)
	}
}

export default Navbar