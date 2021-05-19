import React, { Component } from 'react';
import axios from "axios";
import { Col, Spinner } from 'react-bootstrap';
import { 
    CommentRow,
    CommentCol,
    Input,
    CommentButton
} from './InputElement';
import HashCode from '../utility/HashCode'

const config = require('../../config.json');

class CommentInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentInput: "",
            sending: false
        }
    }

    onInputChange = event => {
		this.setState({
		  	input: event.target.value
		});
	};

    comment = async () => {
        var now = new Date().toLocaleString('en-US');
        const params = {
            id: HashCode(now + this.props.postID.substr(0, 6)),
            username: this.props.username,
            postID: this.props.postID,
            content: this.state.input
        }
        try {
            this.setState({ sending: true });
            await axios.post(`${ config.api.invokeUrl }/comment/new`, params);
            this.setState({ sending: false });
            this.props.addNewComment(this.state.input);
        } catch (err) {
            alert(`An error has occurred: ${err}`);
        }
    }

    render() {
        return (
            <CommentRow>
                <CommentCol md={9}>
                    <Input placeholder={"Comment here..."} onChange={ this.onInputChange } minLength={1} maxLength={500}/>
                </CommentCol>
                <Col className="p-0" md={3}>
                    { this.state.sending ? 
                        <div className="pt-1" style={{display: "flex", justifyContent: "center"}}>
                            <Spinner animation="border" variant="primary" />
                        </div>  :  
                        <CommentButton variant="outline-secondary" onClick={ () => this.comment() }>Send</CommentButton>
                    }
                </Col>
            </CommentRow>
        )
    }

}

export default CommentInput;