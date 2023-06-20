import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    })

    return (
        <Paper
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 5,
            }}
        >
            <Img
                src="https://cdn.pixabay.com/photo/2023/06/12/18/08/animals-8059068_1280.png"
                alt="Mi imagen de prueba"
            />
            <Box sx={{ flexGrow: 1, display: "grid" }}>
                <Typography variant="h4"> Product Name</Typography>
                <Typography variant="body1"> Product Description</Typography>
                <Button variant="contained">Add Card</Button>
            </Box>
            <Box
                sx={{ mr: 2 }}
                component="p"
            >
                $100.00
            </Box>

        </Paper>
    )
}