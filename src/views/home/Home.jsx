import logo from "../../logo.svg";
import "../../App.css";
import {Box, Card, CardContent, Grid, Paper} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";
import {useEffect, useState} from "react";
import {getEvents} from "../../components/lib/api";

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
            const fetchedEventData = getEvents();
            setEventData(fetchedEventData);
        }
    }, [eventData]);



    return (
        <div className="App">
            <header className="App-header">
                    <Grid container spacing={2} sx={{justifyContent: 'space-between'}} style={{'marginBottom':'1%'}}>

                        <Grid item sm={4} style={{}}>
                            <Paper elevation={6}>
                                MSU Denver NotCrimsonConnect
                            </Paper>
                        </Grid>

                        <Grid item sm={4} smOffset={4}>
                            <Paper elevation={6}>
                                <Box>Account</Box>
                                <NavigateButton url="login" displayText="Logout"/>
                            </Paper>
                        </Grid>
                    </Grid>

                {eventData.length < 2 &&
                <h1>... fetching event data</h1>}

                    <Grid container spacing={2}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                    >
                            {eventData.map((eventData) => (
                                <Grid item sm={6}>
                                    <EventThumb data={eventData}/>
                                </Grid>
                            ))}
                    </Grid>
            </header>
        </div>
    )
};

export default Home;