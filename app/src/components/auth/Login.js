import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";

class Login extends Component {

	state = {
		form: "login",
		// This username can also be email
		username: "",
		password: "",
		errorMsg: {
			username: "",
			password: ""
		},
		errors: {
			cognito: null,
			blankfield: false
		},
	}

	clearErrorState = () => {
		document.getElementById("username").setCustomValidity('');
		document.getElementById("password").setCustomValidity('');
		this.setState({
		    errors: {
				cognito: null,
				blankfield: false
		  	}
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
	
		// Form validation
		this.clearErrorState();
		const error = Validate(event, this.state);
		if (error) {
		  	this.setState({
				errors: { ...this.state.errors, ...error }
		  	});
		}
	
		// AWS Cognito integration here
		const username = this.state.username, password = this.state.password;
        try {
			const user = await Auth.signIn(username, password);

			// Set the App state to logged in
			this.props.login(user.username);

			// Redirect to home page
			this.props.history.push({
				pathname: "/home",
				state: {
					username: user.username
				}
			});
			
			console.log(user)
        } catch (error) {
            // Didn't use the cognito error message as it is not detail enough
            let err = null;
			!error.message ? err = { "message": error } : err = error;
            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: error
                }
			})
			if (error.message == "Incorrect username or password.") {
				document.getElementById("username").setCustomValidity('Incorrect username or password');
				document.getElementById("password").setCustomValidity('Incorrect username or password');
			}
        }
	};

	onInputChange = event => {
		this.setState({
		  	[event.target.id]: event.target.value
		});
	};

    render() {
        return (
            <div className="container-fluid">
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-10 content-col">
						<h1>Login</h1>
						<FormErrors formerrors={this.state.errors} />
						<div id="content-area" className="container-fluid">
							<div className="row">
								<form id="form" className="needs-validation" onSubmit={this.handleSubmit} noValidate>
									<div className="form-group">
										<div className="input-group mb-2">
											<div className="input-group-prepend">
												<div className="input-group-text">
													{/* User icon */}
													<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            			<path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        			</svg>
												</div>
											</div>
											<input type="text" id="username" className="form-control" placeholder="Username or Email" onChange={this.onInputChange} required />
											<div className="valid-feedback"></div>
											<div className="invalid-feedback">
												{ this.state.errorMsg.username }
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group mb-2">
											<div className="input-group-prepend">
												<div className="input-group-text">
													{/* Key icon */}
													<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-key" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
														<path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
													</svg>
												</div>
											</div>
											<input type="password" id="password" className="form-control" placeholder="Password" onChange={this.onInputChange} required />
											<div className="valid-feedback"></div>
											<div className="invalid-feedback">
												{ this.state.errorMsg.password }
											</div>
										</div>
									</div>
									<div className="form-group">
										<a id="forgot-password" href="#"> Forgot password?</a>
									</div>
									<div className="form-group">
										<button id="login-btn" type="submit" className="btn btn-success">Login</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
        	</div>
        )
    }
}

export default Login