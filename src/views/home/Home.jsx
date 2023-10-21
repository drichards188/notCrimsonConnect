import logo from "../../logo.svg";
import "../../App.css";
import Login from "../../components/login/login";
import {Box, Card, CardContent, Grid} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Grid container spacing={2}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                >
                    <Grid item sm={6} style={{'backgroundColor': '#333333'}}>
                        <CardContent>
                            NotCrimsonConnect
                        </CardContent>
                    </Grid>

                    <Grid item sm={4}>
                        <Box>Login/Logout</Box>
                        <NavigateButton url="login" displayText="Logout"/>
                    </Grid>

                    {/*todo render eventThumbs for all event data*/}
                    <Grid item sm={12}>
                        <Grid item>
                            <EventThumb/>
                        </Grid>
                    </Grid>
                </Grid>
            </header>
        </div>
    )
};

export default Home;