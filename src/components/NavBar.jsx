import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {FIREBASE_AUTH} from "../firebase/config.js";

function NavBar() {
    const [user] = useAuthState(FIREBASE_AUTH)

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={'end'}>
                    {user
                        ?
                        <Button onClick={() => FIREBASE_AUTH.signOut()} color={'inherit'} variant={'outlined'}>log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button color={'inherit'} variant={'outlined'}>sing in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
