import logo from "../../logo.svg";
import "../../App.css";
import Login from "../../components/login/login";
import {Card, CardContent, Grid} from "@mui/material";

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Grid>
                    <Card>
                        <CardContent>
                            Home
                        </CardContent>
                    </Card>
                </Grid>
            </header>
        </div>
    )
};

export default Home;