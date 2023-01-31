import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendMessage, sendFile } from '../../services/firebase';
import './styles.css';
import { storage } from "../../services/firebase";
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage"
function MessageInput({ roomId }) {
    const { user } = useAuth();
    const [percent, setPercent] = React.useState(0);
    const [file, setFile] = React.useState(""); 
    // const [url, setURL] = React.useState("");
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    function handleFile(event) {
        setFile(event.target.files[0]);
    }
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        else {
            const storageRef = ref(storage, `/files/${file.name}`);

            // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // update progress
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    setFile("");
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        sendFile(roomId, user, url);
                        // setURL(url);


                    });
                }
            );
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="message-input-container">
                <input
                    type="text"
                    placeholder="Enter a message"
                    value={value}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <button type="submit" disabled={value < 1} className="send-message">
                    Send
                </button>
            </form>
            <div>
                <input type="file" onChange={handleFile} accept="/image/*" />
                {/* <Button variant="contained" onClick={handleUpload} }>
                    Send
                </Button> */}
                <button className="send-message" onClick={handleUpload}>Send Media</button>
                {/* {percent === 0 && percent === 100? "" : <p>{percent}</p>} */}
            </div>
        </div>
    );
}

export { MessageInput };
