import React, { Component } from 'react'
import Logout from './auth/Logout'

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a id="title" className="navbar-brand">Video Streaming Services Demo</a>
            <form className="form-inline">
                <a id="nav-signup-btn" href="/signup" className="btn bg-info my-2 my-sm-0 text-white">Sign Up</a>
                <a id="nav-login-btn" href="/login" className="btn btn-success  my-2 my-sm-0">Login</a>
                <Logout loggedIn={this.props.isLoggedIn} />
            </form>
        </nav>
    )
  }
}

export default Navbar