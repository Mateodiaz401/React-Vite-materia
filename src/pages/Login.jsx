import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
export default function Login() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar("Hola mateo diaz lopez", {
            variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "right",
            },
        });
    };
    return (
        <>
            <h1>
                Login
            </h1>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                Open
            </Button>
        </>
    )
}