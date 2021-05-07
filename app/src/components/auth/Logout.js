import React, { Component } from 'react'

class Logout extends Component {

    onLogoutBtnClick = event => {
        if (window.confirm("Are you sure to logout?")) {
            document.getElementById('#nav-logout-btn').setAttribute('style', 'display:none')
        }
        else {
            event.preventDefault()
        }
    }

    render() {
        if (this.props.loggedIn) { 
            return <a id="nav-logout-btn" href="/login" className="btn btn-warning text-white my-2 my-sm-0" onClick={this.onLogoutBtnClick}>Logout</a> 
        }
        else { return <div /> }
    }
}

export default Logout