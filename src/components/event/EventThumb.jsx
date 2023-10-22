import {Grid, Paper} from "@mui/material";
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
        <Grid container style={{'backgroundColor': 'black', 'margin': '2%'}} spacing={2}>
            {/*<Paper elevation={3}>*/}
                    <Grid item sm={12}>
                        <h1>{data.name}</h1>
                    </Grid>

                    <Grid item sm={6} style={{'backgroundColor': 'black'}}>
                        <EventDetail data={data.start_date}/>
                        <EventDetail data={data.club_name}/>
                        <EventDetail data={data.location}/>
                        <EventDetail data={data.description}/>
                    </Grid>
            {/*</Paper>*/}
        </Grid>
    )
        ;
}

export default EventThumb;