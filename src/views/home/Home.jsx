import logo from "../../logo.svg";
import "../../App.css";
import {Box, Card, CardContent, Grid, Paper} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";
import {useEffect, useState} from "react";
import {getEvents} from "../../components/lib/api";
import roadrunnerLogo from "../../roadrunnerLogo.png";

async function getEventData() {
    const fetchedEventData = await getEvents();
    if (fetchedEventData !== undefined) {
        return fetchedEventData;
    }
}

const Home = () => {
    // const [eventData, setEventData] = useState([{
    //     "name": "Name Placeholder",
    //     "start_date": "2023-11-01",
    //     "end_date": "2023-11-03",
    //     "location": "Location Placeholder",
    //     "description": "Description Placeholder",
    //     "club_name": "Club Name Placeholder"
    // }]);
const [eventData, setEventData] = useState([
    {
        "name": "TechFest 2023",
        "start_date": "2023-11-01",
        "end_date": "2023-11-03",
        "location": "Engineering Building, Room 101",
        "description": "A three-day event showcasing the latest technological innovations by students. Workshops, panels, and competitions included.",
        "club_name": "Tech Club"
    },
    {
        "name": "Art Showcase: Autumn Visions",
        "start_date": "2023-11-15",
        "end_date": "2023-11-20",
        "location": "Campus Art Gallery",
        "description": "An art exhibition featuring the works of budding artists, capturing the essence of autumn.",
        "club_name": "Art Society"
    },
    {
        "name": "Eco Day Fair",
        "start_date": "2023-11-25",
        "end_date": "2023-11-25",
        "location": "Central Campus Lawn",
        "description": "Join us for a day of eco-friendly workshops, stalls, and talks. Learn how you can make a difference for our planet.",
        "club_name": "Eco Warriors"
    },
    {
        "name": "Winter Wonderland Ball",
        "start_date": "2023-12-10",
        "end_date": "2023-12-10",
        "location": "Campus Grand Hall",
        "description": "A magical night of dance, music, and winter-themed festivities. Formal attire required.",
        "club_name": "Dance Ensemble"
    },
    {
        "name": "Entrepreneurship Pitch Night",
        "start_date": "2023-12-18",
        "end_date": "2023-12-18",
        "location": "Business Auditorium, Room 201",
        "description": "Witness the next generation of entrepreneurs as they pitch their innovative business ideas to a panel of industry experts.",
        "club_name": "Entrepreneurship Club"
    }
]);
    useEffect(() => {
        if (eventData === undefined || eventData.length < 2) {
            const fetchedEventData = getEventData();
            alert(`fetchedEventData: ${JSON.stringify(fetchedEventData)}`);
            if (fetchedEventData !== undefined && fetchedEventData.length > 1) {
                setEventData(fetchedEventData);
            }
        }
    }, [eventData]);


    return (
        <div className="App">
            <header className="App-header">
                <Grid container spacing={2} sx={{justifyContent: 'space-between'}} style={{'marginBottom': '1%'}}>

                    <Grid item sm={2} style={{}}>

                        <Paper elevation={6}>
                            MSU Denver NotCrimsonConnect
                        </Paper>
                    </Grid>

                    <Grid item sm={4}>
                        <Paper elevation={6}>
                            <Box>Account</Box>
                            <NavigateButton url="login" displayText="Logout"/>
                        </Paper>
                    </Grid>
                </Grid>
                <Box
                    component="img"
                    sx={{
                        height: 420,
                        width: 417,
                        maxHeight: { xs: 233, md: 370 },
                        maxWidth: { xs: 350, md: 367 },
                    }}
                    alt="The house from the offer."
                    src={roadrunnerLogo}
                />

                {eventData.length < 2 &&
                    <h1>... fetching event data</h1>}

                <Grid container spacing={2}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      style={{maxWidth: '100vw', overflowY: "scroll"}}
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