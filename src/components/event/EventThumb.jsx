import {Button, Grid, Paper} from "@mui/material";
import EventDetail from "./EventDetail";

const EventThumb = ({
                        data = {
                            "name": "TechFest 2023",
                            "start_date": "2023-11-01",
                            "end_date": "2023-11-03",
                            "location": "Engineering Building, Room 101",
                            "description": "A three-day event showcasing the latest technological innovations by students. Workshops, panels, and competitions included.",
                            "club_name": "Tech Club"
                        }
                    }) => {

    if (data === undefined) {
        data.name = "No name available.";
        data.start_date = "No start date available.";
        data.description = "No description available.";
        data.club_name = "No club name available.";
        data.location = "No location available.";
    }

    return (
        <Grid container direction="column"
              alignItems="center"
              justifyContent="center">
            <Grid item sm={6} style={{'padding': '1%', 'backgroundColor': 'rgba(0,0,0,.25'}}>
                <Grid item sm={10}>
                    <Paper elevation={3}>
                        <h1>{data.event_name}</h1>
                    </Paper>
                </Grid>

                <Grid item sm={6}>
                    <Paper elevation={3}>
                        <EventDetail data={data.start_date}/>
                        <EventDetail data={data.club_name}/>
                        <EventDetail data={data.location}/>
                        <EventDetail data={data.description}/>
                    </Paper>
                </Grid>

                <Grid container sx={{justifyContent: 'space-between'}}>
                <Grid item sm={4} style={{'backgroundColor':'#333333'}} onClick={() => alert('Saved event')}>
                    <Button  >Save</Button>
                </Grid>
                <Grid item sm={4} style={{'backgroundColor':'#333333'}} onClick={() => alert('Share event')}>
                    <Button  >Share</Button>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    );
}

export default EventThumb;