import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Divider, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface MobileDrawerProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
    navitems: { name: string; path: string }[];
}

const MobileHeader: React.FC<MobileDrawerProps> = ({ mobileOpen, handleDrawerToggle, navitems }) => {
    return (
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
            <Box sx={{ width: 250, p: 2, display: "flex", flexDirection: "column", justifyContent: 'space-between', height: '100vh' }}>
                {/* Close Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Navigation Items */}
                <List>
                    {navitems.map((item) => (
                        <ListItem key={item.name} disablePadding sx={{ textAlign: 'center' }}>
                            <ListItemButton>
                                <NavLink
                                    to={item.path}
                                    style={({ isActive }) => ({
                                        textDecoration: 'none',
                                        color: isActive ? 'rgba(17, 142, 234, 1)' : 'inherit',
                                        fontSize: '18px',
                                        width: '100%',
                                        textAlign: 'center'
                                    })}
                                    onClick={handleDrawerToggle}
                                >
                                    {item.name}
                                </NavLink>
                            </ListItemButton>
                            <Divider />
                        </ListItem>
                    ))}
                </List>

                {/* Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", mb: 2 }}>
                    <IconButton color='inherit'>
                        <NotificationsNoneIcon />
                    </IconButton>
                    <Avatar sx={{ background: 'linear-gradient(to right,rgba(242, 196, 111, 1),rgba(198, 148, 63, 1))' }}>A</Avatar>
                </Box>
            </Box>
        </Drawer>
    );
};

export default MobileHeader;
