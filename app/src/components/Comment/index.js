import React, { Component } from 'react';
import { 
    PostRow,
    PostComment, 
    PostCommentUsername, 
    PostCommentContent 
} from './CommentElement';

class Comment extends Component {

    render() {
        return (
            <PostRow floatRight={ this.props.floatRight }>
                <PostComment backgroundColor={ this.props.backgroundColor }>
                    <PostCommentUsername floatRight={ this.props.floatRight }>
                        { this.props.username }
                    </PostCommentUsername>
                    <PostCommentContent>
                        { this.props.content }
                    </PostCommentContent>
                </PostComment> 
                <div />
            </PostRow>
        )
    }

}

export default Comment;