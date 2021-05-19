import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Post from './Post';
import NewPostButton from './NewPostButton';

const config = require('../config.json');

class Home extends Component {

    state = {
        username: "",
        data: [],
        loading: true
    }

    constructor(props) {
        super(props);
        if (this.props.location.state == undefined) {
            alert("Invalid attempt. Login is required to view the request content.");
            this.props.history.push("/login");
        }
        else {
            // Store the username of the logged in user
            this.setState({
                username: this.props.location.state.username
            })
            this.fetchPosts();
        }
    }

    showLoader = () => {
        this.setState({
            loading: true
        })
    }

    fetchPosts = async () => {
        try {
            const res = await axios.get(`${ config.api.invokeUrl }/posts`);
            console.log(res.data.Items);
            this.setState({
                data: res.data.Items
            })
            this.setState({ loading: false })
        } catch (err) {
            console.log(err);
        }
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
        const posts = this.state.data.map((post) =>
            <Post loggedInUser={this.state.username} data={post} showLoader={this.showLoader} />
        );

        return (
            <div id="posts" className="container-fluid">
                <div className="row element">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <NewPostButton loggedInUser={this.state.username} showLoader={this.showLoader} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row element">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        { this.state.loading ? 
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <ClipLoader color={"#007bff"} loading={true} size={200} />
                            </div> : posts.length == 0 ? 
                                <p id="no-post-text" className="text-light">
                                    No posts were uploaded yet...
                                </p> :
                                <CardColumns className="text-center">
                                    { posts } 
                                </CardColumns>   
                        }
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {/* { rows }
                { rows } */}
            </div>
        )
    }
}

export default Home