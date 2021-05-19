import React, { useState } from 'react';
import axios from "axios";
import { Button, Modal } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import {
    NewPostModalBody,
    NewPostModalFooter
} from './NewPostButtonElement';
import { Textarea } from '../Input/InputElement'
import HashCode  from '../utility/HashCode'

const config = require('../../config.json');

function NewPostButton(props) {

    const [show, setShow] = useState(false);

    const [picture, setPicture] = useState([]);

    const handleClose = () => setShow(false);

    const savePost = async () => {
        if (picture.length == 0) {
            alert("You must upload a photo for a post.");
        }
        else {
            console.log(picture);
            var now = new Date().toLocaleString('en-US');
            let postID = "PD-" + HashCode(now + props.loggedInUser);
            let postDescription = document.getElementById("new-post-description").value;
            let newPhotoName = HashCode(now + picture[0].name) + '.' + picture[0].name.split('.')[1];          
            let photoDataUrl = picture[1].split(',')[1];
            const params = {
                id: postID,
                username: props.loggedInUser,
                description: postDescription,
                createdAt: now,
                fileName: newPhotoName,
                fileDataUrl: photoDataUrl
            }
            try {
                handleClose();
                props.showLoader();
                await axios.post(`${ config.api.invokeUrl }/posts/new`, params);
                window.location.reload();
            } catch (err) {
                console.log(`An error has occurred: ${err}`);
            }
        }
    };
    const handleShow = () => setShow(true); 

    const onDrop = (picture, pictureDataURL) => {
        setPicture([picture[0], pictureDataURL[0]]);
    };

    return (
        <>
            <Button id="new-post-button" onClick={handleShow}>Write Your Post...</Button>

            <Modal show={show} onHide={handleClose}>
                <NewPostModalBody>
                    <Textarea id="new-post-description" placeholder="Description (max. 100 words)" maxLength="100"/>
                    <ImageUploader
                        withIcon={true}
                        withPreview={true}
                        buttonText="Choose images"
                        onChange={onDrop}
                        singleImage={true}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}
                    />
                </NewPostModalBody>
                <NewPostModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={savePost}>
                        Post
                    </Button>
                </NewPostModalFooter>
            </Modal>
        </>
    )
}

export default NewPostButton