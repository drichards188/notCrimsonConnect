import logo from "../../logo.svg";
import "../../App.css";
import {Button, Card, CardContent, Grid, Link} from "@mui/material";
const Login = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Grid>
                    <Card>
                        <CardContent>
                            Login
                            {/*<Button onClick={}>Go to home</Button>*/}
                        </CardContent>

                        <li>
                            <Link to={`localhost:3000/home`}>Go To Home</Link>
                        </li>
                    </Card>
                </Grid>
            </header>
        </div>
    )
};

export default Login