import React, { Component } from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import axios from "axios";
import Comment from './Comment';
import CommentInput from './Input';
import { BsChevronDoubleDown } from 'react-icons/bs'

const config = require('../config.json');

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: props.loggedInUser,
            data: props.data,
            newComments: []
        }
    }

    getCommentColor(comment) {
        if (comment.description != undefined) {
            if (this.state.loggedInUser != comment.username)
                return "#007bff"
        }
        else {
            if (this.state.loggedInUser != comment.username) 
                return "#343a40"
        }
        return "#32c553"
    }

    commentIsFloatRight(comment) {
        if (this.state.loggedInUser == comment.username)
            return true
        else
            return false
    }

    collapseButtonClick(e) {
        var btn = e.currentTarget;
        var btnText = btn.getElementsByClassName("collapse-text")[0];
        var btnIcon = btn.getElementsByClassName("arrow-icon")[0];

        if (!btn.classList.contains("show")) {
            btnText.innerHTML = "Collapse<br />"
            btn.classList.add("show");
            btnIcon.classList.add("rotate");
            btnIcon.classList.remove("remove-rotate");
        }
        else {
            btnText.innerHTML = "Show Comments<br />"
            btn.classList.remove("show");
            btnIcon.classList.remove("rotate");
            btnIcon.classList.add("remove-rotate");
        }
    }

    addNewComment = comment => {
        const params = {
            username: this.state.loggedInUser
        }
        this.setState({
            newComments: [
                ...this.state.newComments,
                <Comment username={ this.state.loggedInUser } 
                    content={ comment } 
                    backgroundColor={ this.getCommentColor(params) }
                    floatRight={ this.commentIsFloatRight(params) } />
            ]
        })
        document.getElementById(this.state.data.id).getElementsByTagName('input')[0].value = "";
    }

    deletePost = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                this.props.showLoader();
                await axios.delete(`${ config.api.invokeUrl }/posts/${ this.state.data.id }`) 
                window.location.reload();
            } catch (err) {
                alert(`An error has occurred: ${err}`);
            }
        }
    }

    render() {
        
        const description = (
            <Comment username={ this.state.data.username } 
                content={ this.state.data.description } 
                backgroundColor={ this.getCommentColor(this.state.data) }
                floatRight={ this.commentIsFloatRight(this.state.data) } />
        );

        const comments = this.state.data.comments.map((comment) =>
            <Comment username={ comment.username } 
                content={ comment.content } 
                backgroundColor={ this.getCommentColor(comment) }
                floatRight={ this.commentIsFloatRight(comment) } />
        );

        return (
            <Card id={ this.state.data.id }>
                <Card.Img src={ config.cloudfront.invokeUrl + this.state.data.photoID } />
                <Accordion defaultActiveKey="0">
                    <Card.Body>
                        { description }
                        <Accordion.Collapse eventKey="1">
                            <div>
                                { comments }
                                { this.state.newComments.map(comment => comment) }
                                <CommentInput username={ this.state.loggedInUser } 
                                    postID={ this.state.data.id } addNewComment={ this.addNewComment } /> 
                            </div>
                        </Accordion.Collapse>
                    </Card.Body>
                    <Accordion.Toggle className="comment-collapse 180" as={Button} eventKey="1" onClick={this.collapseButtonClick}>
                        <div>
                            <div className="collapse-text">Show Comments<br /></div>
                            <BsChevronDoubleDown className="arrow-icon" strokeWidth={1} />
                        </div>
                    </Accordion.Toggle>
                    { this.state.data.username == this.state.loggedInUser ?
                        <div>
                            <Button className="btn btn-danger delete-btn" onClick={ () => this.deletePost() }>
                                Delete Post
                            </Button>
                        </div> : <></>
                    }
                </Accordion>
                <Card.Footer>
                    <small className="text-muted">{ this.state.data.createdAt }</small>
                </Card.Footer>
            </Card>
        )
    }
}

export default Post