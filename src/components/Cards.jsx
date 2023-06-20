import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function Cards() {
    return (
        <Card sx={{
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.05)",
            },
        }}>
        <CardActionArea>
            <CardMedia
                component="img"
                image="https://cdn.pixabay.com/photo/2023/06/12/18/08/animals-8059068_1280.png"
                height={500}
                alt="Una descripción de la imagen"
            />
            <CardContent>
                <Typography variant="h5" > Card Title</Typography>
                <Typography component="p" variant="body2"> Lorem ipsum dolor sit amet, consectetur adip</Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
            <Button variant="contained">Add</Button>
            <Button color="warning">Remove</Button>
            </CardActions>
        </Card>
    )
}