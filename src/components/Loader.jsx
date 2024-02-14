import {Box, CircularProgress, Container, Grid} from "@mui/material";

function Loader() {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid>
                    <Box p={5}>
                        <CircularProgress />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;
