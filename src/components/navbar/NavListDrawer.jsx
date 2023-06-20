import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from 'prop-types';

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen }) {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {navArrayLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}
NavListDrawer.propTypes = {
    navArrayLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
    NavLink: PropTypes.object.isRequired,
    setOpen: PropTypes.func.isRequired
};