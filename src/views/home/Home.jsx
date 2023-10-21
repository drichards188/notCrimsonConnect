import logo from "../../logo.svg";
import "../../App.css";
import Login from "../../components/login/login";
import {Box, Card, CardContent, Grid} from "@mui/material";
import Event from "../../components/event/Event";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Grid container>
                    <Grid item md={8}>
                        <CardContent>
                            NotCrimsonConnect
                        </CardContent>
                    </Grid>
                    <Grid item md={4}>
                        <Box>Login/Logout</Box>
                    </Grid>

                    <Grid item md={6}>
                        <Grid item>
                            <Event />
                        </Grid>
                    </Grid>

                </Grid>
            </header>
        </div>
    )
};

export default Home;