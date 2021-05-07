import React, { Component } from 'react';

class Home extends Component {

    state = {
        username: ""
    }
  
    componentDidMount() {
        
        if (this.props.location.state == undefined) {
            alert("Invalid attempt. Login is required to view the request content.");
            this.props.history.push("/login");
        }
        else {
            // Store the username of the logged in user
            this.setState({
                username: this.props.location.state.username
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
			    <div className="col-md-10 content-col">
                    <section>
                        <div className="container-fluid">
                            <h1>Demo video</h1>
                            <br />
                            <a id="sample-video" href="#video-content" data-toggle="collapse">UniSA Sample Video</a>
                            <div className="collapse" id="video-content">
                                <br />
                                <video controls name="media">
                                    <source src="http://d2uajlq4cxu81a.cloudfront.net/" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        )
    }
}

export default Home