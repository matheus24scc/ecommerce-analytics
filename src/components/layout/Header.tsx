import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../../store/uiSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color="inherit">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Ecommerce Analytics
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Badge badgeContent={4} color="secondary">
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Badge>
        <Box sx={{ ml: 2 }}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
