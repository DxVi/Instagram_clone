import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import {storage, db} from './firebase';
import firebase from 'firebase';

function ImageUpload(props) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { 
                // progress function...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // error function...
                console.loge(error);
                alert(error.message);
            },
            () => {
                // complete function...
                storage 
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image inside db
                    db.collection('posts').add({
                        caption: caption,
                        imageUrl: url,
                        username: props.username,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    });
                    setProgress(0);
                    setCaption('');
                    setImage(null);

                })
            }
        )
    }

    return (
        <div>
            <progress value={progress} max="100" />
            <Input type="text" value={caption} onChange={event => setCaption(event.target.value)} placeholder="Enter a caption..." />
            <Input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
