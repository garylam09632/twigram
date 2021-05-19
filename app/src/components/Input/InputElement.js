import styled from 'styled-components';
import { Row, Col, Button } from 'react-bootstrap';

export const CommentRow = styled(Row)`
    height: 8%;
    width: 100%;
    margin: 0px;
`;

export const CommentCol = styled(Col)`
    padding-left: 0px;
`

export const Input = styled.input`
    background-color: #292929;
    padding-left: 10px;
    height: 45px;
    width: 100%;
    color: #b6b3b3;
    -webkit-text-fill-color: #b6b3b3;
    -webkit-box-shadow: 0 0 0 100px #292929 inset !important;
    border: 1px solid #6c757d;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:focus {
        border: 1px solid #007bff;
        outline: none;
        color: #007bff;
        -webkit-text-fill-color: #007bff;
    }
`;

export const Textarea = styled.textarea`
    background-color: #292929;
    padding: 10px;
    height: 200px;
    width: 100%;
    color: #b6b3b3;
    -webkit-text-fill-color: #b6b3b3;
    -webkit-box-shadow: 0 0 0 100px #292929 inset !important;
    border: 1px solid #6c757d;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:focus {
        border: 1px solid #007bff;
        outline: none;
        color: #007bff;
        -webkit-text-fill-color: #007bff;
    }
`;

export const CommentButton = styled(Button)`
    border-radius: 10px;
    font-size: 0.8rem;
    width: 100%;
    height: 45px;

    &:hover {
        border: 1px solid #007bff;
        background-color: #007bff;
        outline: none;
    }

    &:focus, &:active {
        outline: none !important;
        box-shadow: none;
    }
`;
