import { useState } from 'react';
import { Alert, AlertTitle, Box, Button, Snackbar } from "@mui/material";



export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <h1>
                Home
            </h1>
            <Box sx={{ display: "grid", gap: "1rem" }}>

                <Alert severity="warning" variant="outlined">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — check it out!
                </Alert>
                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                >
                    Open
                </Button>
                <Snackbar open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                >
                    <Alert severity="success">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — check it out!
                    </Alert>
                </Snackbar>
            </Box>


        </>
    )
}

