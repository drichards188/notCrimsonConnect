import logo from "../../logo.svg";
import "./home.css";
import {Box, Button, Card, CardContent, Grid, Paper} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";
import {useEffect, useState} from "react";
import {createEventAsync, fetchEvents, getEventData} from "../../components/lib/api";
import roadrunnerLogo from "../../roadrunnerLogo.png";

const Home = () => {
    const [eventData, setEventData] = useState([{
        "name": "Name Placeholder",
        "start_date": "2023-11-01",
        "end_date": "2023-11-03",
        "location": "Location Placeholder",
        "description": "Description Placeholder",
        "club_name": "Club Name Placeholder"
    }]);

    useEffect(() => {
        if (eventData === undefined || eventData.length < 2) {
            async function getEvents() {
                try {
                    let result = await fetchEvents();
                    alert(`result: ${JSON.stringify(result)}`);
                    setEventData(result);
                } catch (e) {
                    alert(`error: ${e}`);
                }
            }

            getEvents();
        }

    }, [eventData]);


    return (
        <Grid container spaceing={2} className="App">
            {/*<header className="App-header">*/}
            <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
                <Grid item sm={2}>
                    <Paper elevation={6}>
                        <Grid item sm={12}>
                            <img src={roadrunnerLogo} style={{
                                height: 200,
                                width: 197,
                                maxHeight: {xs: 233, md: 370},
                                maxWidth: {xs: 350, md: 367}
                            }} alt="msu logo"/>
                        </Grid>
                        <Grid item sm={12}>
                            MSU Denver NotCrimsonConnect
                            <Button onClick={() => {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        "user_name":"johndoe5",
                                        "password":"D12345678",
                                        "confirm_password":"D12345678",
                                        "first_name":"john",
                                        "last_name":"cena",
                                        "phone_number":"1234567890",
                                        "email": "dtr5@gmail.com"
                                    })
                                };
                                fetch('http://10.6.128.227:5000/register', requestOptions)
                                    .then(response => response.json())
                                    .then(data => alert(`data is: ${JSON.stringify(data)}`))}

                            }>Create User</Button>

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item sm={6}
                      alignContent="center" justifyContent="center"
                      sx={{
                          overflowY: "scroll",
                          maxHeight: "100vh"
                      }}
                >
                    {eventData.map((eventData) => (
                        <Grid item sm={12}>
                            <EventThumb data={eventData}/>
                        </Grid>
                    ))}
                </Grid>

                <Grid item sm={2}>
                    <Paper elevation={6}>
                        <Box>Account</Box>
                        <NavigateButton url="login" displayText="Logout"/>
                    </Paper>
                </Grid>
            </Grid>
            {/*</header>*/}
        </Grid>
    )
};

export default Home;