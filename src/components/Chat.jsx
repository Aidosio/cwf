import {Avatar, Box, Button, Container, Grid, TextField} from "@mui/material";
import {useAuthState} from "react-firebase-hooks/auth";
import {FIREBASE_AUTH, FIREBASE_STORE} from "../firebase/config.js";
import {useEffect, useState} from "react";
import Loader from "./Loader.jsx";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {useMessages} from "../hooks/useMessages.js";


function Chat() {
    const [user] = useAuthState(FIREBASE_AUTH)
    const [messages, loading] = useMessages();
    const [message, setMessage] = useState('')

    useEffect(() => {
        console.log(messages)

    }, [loading]);

    const sendMessage = async (user, message) => {
        await addDoc(collection(FIREBASE_STORE, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            message: message,
            createdAt: serverTimestamp()
        });
        setMessage('')
    };


    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Box style={{width: '80%', height: '70vh', overflow: 'scroll', border: '1px solid grey', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    {
                        messages && messages.length > 0 &&
                        <>
                            {messages.map((item, index) =>
                                <Box style={{display: 'flex', flexDirection: user.uid === item.uid ? 'row-reverse' : 'row'}} key={index}>
                                    <Grid style={{display: 'flex', width: 400, flexDirection: 'column', padding: 12, border: user.uid === item.uid ? '1px solid black' : '1px solid red', margin: 4}}  container>
                                        <Grid container>
                                            <Avatar src={item.photoURL} />
                                            <Box>{item.displayName}</Box>
                                        </Grid>
                                        <Box>
                                            {item.message}
                                        </Box>
                                    </Grid>
                                </Box>
                            )}
                        </>
                    }

                </Box>
                <Grid
                    container
                    direction={"column"}
                    alignItems={'end'}
                    style={{width: '80%', gap: 12}}
                >
                    <TextField onChange={e => setMessage(e.target.value)} value={message} fullWidth rows={2}/>
                    <Button onClick={() => sendMessage(user, message)} fullWidth disabled={message === ''}>send</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;
