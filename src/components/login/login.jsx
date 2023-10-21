import logo from "../../logo.svg";
import "../../App.css";
import {Button, Card, CardContent, Grid, Link} from "@mui/material";
import NavigateButton from "../lib/NavigateButton";
const Login = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Grid>
                    <Card>
                        <CardContent>
                            Login
                        </CardContent>

                        <NavigateButton url="home" displayText="Home"/>
                    </Card>
                </Grid>
            </header>
        </div>
    )
};

export default Login