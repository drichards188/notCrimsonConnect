import {Grid, Paper} from "@mui/material";

const EventThumb = () => {
    return (
        <Grid container style={{'backgroundColor': 'black'}}>
            <Grid item sm={12}>
                <h1>Event goes here</h1>
            </Grid>
            <Grid item sm={8}>
                <Grid item sm={12}>
                    <Paper elevation={3}>
                        long date
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper elevation={3}>
                        long title
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper elevation={3}>
                        club
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper elevation={3}>
                        location
                    </Paper>
                </Grid>
                <Grid item sm={4}>
                    The other side
                </Grid>
            </Grid>
        </Grid>
    );
}

export default EventThumb;