import logo from "../../logo.svg";
import "../../App.css";
import {Button, Card, CardContent, Grid, Link} from "@mui/material";
import HomeButton from "../../views/home/HomeButton";
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

                        <HomeButton/>
                    </Card>
                </Grid>
            </header>
        </div>
    )
};

export default Login