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
        // data: []
        // data: [
        //     {
        //         loggedInUser: "万策尽きた！",
        //         data: {
        //             username: "万策尽きた！",
        //             image: "http://d12nxej3n1xwb5.cloudfront.net/photos/EzPthJRVEAcoBkr.jpg",
        //             description: "YAGOO'S DREAM IS ALIVING",
        //             comments: [{ username: "user-1", content: "Nenechi ECHI!!!!" }, 
        //                         { username: "user-2", content: "Nene seal" }],
        //             createdAt: "6 Days Ago"
        //         }
        //     },
        //     {
        //         loggedInUser: "万策尽きた！",
        //         data: {
        //             username: "Gary_X",
        //             image: "http://d12nxej3n1xwb5.cloudfront.net/photos/EsqKHZwU0AEW_jB.jpg",
        //             description: "Weird Nene FACE LMAO",
        //             comments: [{ username: "user-1", content: "Nenechi ECHI" }, 
        //                         { username: "user-2", content: "Nene seal" }, 
        //                         { username: "user-3", content: "Husband zoned" }],
        //             createdAt: "2 Days Ago"
        //         }
        //     },
        //     {
        //         loggedInUser: "万策尽きた！",
        //         data: {
        //             username: "Yukimin",
        //             image: "http://d12nxej3n1xwb5.cloudfront.net/photos/Ep6StcHVgAAhFVo.jpg",
        //             description: "Weird Nene FACE LMAO",
        //             comments: [{ username: "user-1", content: "Nenechi ECHI" }, 
        //                         { username: "user-2", content: "Nene seal" }, 
        //                         { username: "user-3", content: "Husband zoned" }],
        //             createdAt: "3 Days Ago"
        //         }
        //     },
        //     {
        //         loggedInUser: "万策尽きた！",
        //         data: {
        //             username: "万策尽きた！",
        //             image: "http://d12nxej3n1xwb5.cloudfront.net/photos/Esf37_IVkAE8SH5.jpg",
        //             description: "Smart NENE",
        //             comments: [{ username: "user-1", content: "Nenechi ECHI" }, 
        //                         { username: "user-2", content: "Nene seal" }, 
        //                         { username: "user-3", content: "Husband zoned" }],
        //             createdAt: "4 Days Ago"
        //         }
        //     }
        // ]

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
        // const rows = [];
        // for (var i=0; i<this.state.data.length; i++) {
        //     if (i%2 == 0) {
        //         if (i + 1 > this.state.data.length - 1) {
        //             rows.push(
        //                 <div className="row element">
        //                     <div className="col-md-2"></div>
        //                     <div className="col-md-8">
        //                         <Post marginRight={"me-3"} data={this.state.data[i]} />
        //                     </div>
        //                     <div className="col-md-2"></div>
        //                 </div>
        //             )
        //         }
        //         else {
        //             rows.push(
        //                 <div className="row element">
        //                     <div className="col-md-2"></div>
        //                     <div className="col-md-8">
        //                         <Post marginRight={"me-3"} loggedInUser={this.state.username} data={this.state.data[i]} />
        //                         <Post loggedInUser={this.state.username} data={this.state.data[i+1]} />
        //                     </div>
        //                     <div className="col-md-2"></div>
        //                 </div>
        //             )
        //         }
        //     }
        // }

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
                                    {/* <Post data={this.state.data[0]} />
                                    <Post data={this.state.data[1]} />
                                    <Post data={this.state.data[2]} />
                                    <Post data={this.state.data[2]} />
                                    <Post data={this.state.data[0]} />
                                    <Post data={this.state.data[3]} />
                                    <Post data={this.state.data[1]} /> */} 
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