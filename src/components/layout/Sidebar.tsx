import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/uiSlice';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.ui);

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ py: 3 }} >
          <Typography variant="h6" component="h1" noWrap sx={{ px: 2 }}>
            Ecommerce
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem button component={Link} to="/" sx={{ pb: 1 }}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/products" sx={{ pb: 1 }}>
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/sales" sx={{ pb: 1 }}>
            <ListItemIcon>
              <ShowChartIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/orders" sx={{ pb: 1 }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
