import logo from "../../logo.svg";
import "../../App.css";
import Login from "../../components/login/login";
import {Box, Card, CardContent, Grid, Paper} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";
import {useState} from "react";

const Home = () => {
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
        ]
    );

    return (
        <div className="App">
            <header className="App-header">
                    <Grid container spacing={2} sx={{justifyContent: 'space-between'}} style={{'marginBottom':'1%'}}>

                        <Grid item sm={4} style={{}}>
                            <Paper elevation={6}>
                                NotCrimsonConnect
                            </Paper>
                        </Grid>

                        <Grid item sm={4} smOffset={4}>
                            <Paper elevation={6}>
                                <Box>Account</Box>
                                <NavigateButton url="login" displayText="Logout"/>
                            </Paper>
                        </Grid>
                    </Grid>

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