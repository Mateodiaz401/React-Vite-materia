import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/login";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";

const navArrayLinks = [
    {
        title: "Home",
        path: "/",
        icon: <InboxIcon />
    },
    {
        title: "Login",
        path: "login",
        icon: <DraftsIcon />,
    },
    {
        title: "Register",
        path: "register",
        icon: <MenuIcon />,
    }
]

export default function App() {
    return (
        <>
            <Navbar navArrayLinks={navArrayLinks} />
            <Container sx={{ mt: 5 }}>
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/login" element={<Login />}>Login</Route>
                    <Route path="/register" element={<Register />}>Register</Route>
                </Routes>
            </Container>

        </>
    )
}