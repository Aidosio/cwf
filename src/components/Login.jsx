import {Box, Button, Container, Grid} from "@mui/material";
import {signInWithGooglePopup} from "../firebase/config.js";

function Login() {
    const login = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid>
                    <Box p={5}>
                        <Button onClick={login} variant={'contained'}>Sing in with google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;
