import styled from 'styled-components';

export const PostRow = styled.div`
    text-align:  ${ props =>  {
        if (props.floatRight) return "right"
        else return "initial"  
    }};
`;

export const PostComment = styled.div`
    margin-bottom: 10px;
    border-radius: 10px;
    display: inline-block;
    padding: 5px 10px 0px 10px;
    background-color: ${ props => props.backgroundColor };
`;

export const PostCommentUsername = styled.p`
    font-weight: 800;
    font-size: 17px;
    margin-bottom: 2px;
    text-align:  ${ props =>  {
        if (props.floatRight) return "right"
        else return "initial"  
    }};
`;

export const PostCommentContent = styled.p`
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
`