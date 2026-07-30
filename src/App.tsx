import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Box, Typography, Toolbar, CssBaseline } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Sales from './pages/Sales';

function App() {
  const { isOpen } = useSelector((state: RootState) => state.ui); // We haven't created ui slice yet, but we can use a default

  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { xs: 'auto', sm: 'auto' },
              height: '100vh',
              overflowY: 'auto',
              bgcolor: '#f4f6f8',
            }}
          >
            <Toolbar sx={{ mb: 2 }}>
              <Typography variant="h6">Dashboard</Typography>
            </Toolbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </>
  );
}

export default App;
