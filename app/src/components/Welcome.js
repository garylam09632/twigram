import React from 'react';

export default function Welcome() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
			    <div className="col-md-10 content-col">
                    <div className="container-fluid" style={{color: "white"}}>
                        <h1>Welcome!</h1>
                        <br />
                        <p>You have successfully registered a new account.</p>
                        <p>We've sent a confirmation link to your email. Please verify your account and then you are ready to login :)</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
      )
}