import {Box, Button, Container, Grid, TextField} from "@mui/material";
import {useAuthState} from "react-firebase-hooks/auth";
import {FIREBASE_AUTH, sendMessage} from "../firebase/config.js";
import {useState} from "react";
import Loader from "./Loader.jsx";

function Chat() {
    const [user] = useAuthState(FIREBASE_AUTH)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState('')

    if (loading) {
        return <Loader/>
    }

    //Короче доделай firestore запись данных туда

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Box style={{width: '80%', height: '70vh', border: '1px solid grey'}}>

                </Box>
                <Grid
                    container
                    direction={"column"}
                    alignItems={'end'}
                    style={{width: '80%', gap: 12}}
                >
                    <TextField onChange={e => setMessage(e.target.value)} fullWidth rows={2}/>
                    <Button onClick={() => sendMessage(user, message, setMessage, setLoading)} fullWidth
                            disabled={message === ''}>send</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;
