import logo from "../../logo.svg";
import "./home.css";
import {Box, Card, CardContent, Grid, Paper} from "@mui/material";
import EventThumb from "../../components/event/EventThumb";
import NavigateButton from "../../components/lib/NavigateButton";
import {useEffect, useState} from "react";
import {createEventAsync, fetchQuestions, getEventData} from "../../components/lib/api";
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
// const [eventData, setEventData] = useState([
//     {
//         "name": "TechFest 2023",
//         "start_date": "2023-11-01",
//         "end_date": "2023-11-03",
//         "location": "Engineering Building, Room 101",
//         "description": "A three-day event showcasing the latest technological innovations by students. Workshops, panels, and competitions included.",
//         "club_name": "Tech Club"
//     },
//     {
//         "name": "Art Showcase: Autumn Visions",
//         "start_date": "2023-11-15",
//         "end_date": "2023-11-20",
//         "location": "Campus Art Gallery",
//         "description": "An art exhibition featuring the works of budding artists, capturing the essence of autumn.",
//         "club_name": "Art Society"
//     },
//     {
//         "name": "Eco Day Fair",
//         "start_date": "2023-11-25",
//         "end_date": "2023-11-25",
//         "location": "Central Campus Lawn",
//         "description": "Join us for a day of eco-friendly workshops, stalls, and talks. Learn how you can make a difference for our planet.",
//         "club_name": "Eco Warriors"
//     },
//     {
//         "name": "Winter Wonderland Ball",
//         "start_date": "2023-12-10",
//         "end_date": "2023-12-10",
//         "location": "Campus Grand Hall",
//         "description": "A magical night of dance, music, and winter-themed festivities. Formal attire required.",
//         "club_name": "Dance Ensemble"
//     },
//     {
//         "name": "Entrepreneurship Pitch Night",
//         "start_date": "2023-12-18",
//         "end_date": "2023-12-18",
//         "location": "Business Auditorium, Room 201",
//         "description": "Witness the next generation of entrepreneurs as they pitch their innovative business ideas to a panel of industry experts.",
//         "club_name": "Entrepreneurship Club"
//     }
// ]);
//     useEffect(async () => {
//         if (eventData === undefined || eventData.length < 2) {
//             // const fetchedEventData = createEventAsync();
//             // alert(`fetchedEventData: ${JSON.stringify(fetchedEventData)}`);
//             // if (fetchedEventData !== undefined && fetchedEventData.length > 1) {
//                 let result = getEventData();
//                 setEventData(result)
//             // }
//         }
//     }, [eventData]);

    useEffect(() => {
        if (eventData === undefined || eventData.length < 2) {
            async function getEvents() {
                try {
                    let result = await fetchQuestions();
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