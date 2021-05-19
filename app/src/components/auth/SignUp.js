import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";

class SignUp extends Component {

    state = {
        form: "signup",
        username: "",
		email: "",
        password: "",
        confirmPassword: "",
		errorMsg: {
            username: "",
			email: "",
            password: "",
            confirmPassword: "",
		},
		errors: {
			cognito: null,
            blankfield: false,
            validPassword: false,
            passwordmatch: false
		},
	}

    clearErrorState = () => {
        document.getElementById("username").setCustomValidity('');
		this.setState({
		    errors: {
				cognito: null,
                blankfield: false,
                validPassword: false,
                passwordmatch: false
		  	}
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
	
		// Form validation
		this.clearErrorState();
		const error = Validate(event, this.state);
		if (error) {
		  	await this.setState({  
				errors: { ...this.state.errors, ...error }
            });
            if (this.state.errors.blankfield || !this.state.errors.validPassword || !this.state.errors.passwordmatch) { 
                console.log("ERR")
            }
		}

        // AWS Cognito integration here
        const { username, email, password } = this.state;
        try {
            const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes: {
                    email
                }
            })
            console.log(signUpResponse);
            this.props.history.push("/welcome");
        } catch (error) {
            let err = null;
            !error.message ? err = { "message": error } : err = error;
            this.setState({
                errors: {
                    ...this.state.errors,
                    cognito: error
                }
            })
            console.log(error)
            if (error.message == "User already exists") {
                document.getElementById("username").setCustomValidity("Invalid username");
            }
            if (error.message == "Invalid email address format.") {
                document.getElementById("email").setCustomValidity("Invalid email address format");
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
                    <h1>Sign Up</h1>
                    <FormErrors formerrors={this.state.errors} />
                    <div id="content-area" className="container-fluid">
                        <div className="row">
                            <form id="form" className="needs-validation" onSubmit={this.handleSubmit}  noValidate>
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
                                    <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.onInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        {/* Email icon */}
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                        </svg>
                                    </div>
                                </div>
                                <input type="text" id="email" className="form-control" placeholder="Email" onChange={this.onInputChange} required />
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
                                <input type="password" id="password" className="form-control" data-html="true"
                                        placeholder="Password (Hover to see constraints)" onChange={this.onInputChange} 
                                        data-toggle="tooltip" title="Password constraints:<br />
                                               1) Minimum of 8 characters<br />
                                               2) At least one uppercase and lowercase character<br />
                                               3) Must contains number" required />
                                <div className="valid-feedback"></div>
                                <div className="invalid-feedback">
                                    { this.state.errorMsg.password }
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
                                <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" onChange={this.onInputChange} required />
                                <div className="valid-feedback"></div>
                                <div className="invalid-feedback">
                                    { this.state.errorMsg.confirmPassword }
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button id="signin-btn" type="submit" className="btn btn-success">Sign up</button>
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

export default SignUp