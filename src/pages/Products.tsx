import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';

const Products: React.FC = () => {
  const columns = ['ID', 'Product Name', 'Category', 'Price', 'Stock'];
  const rows = [
    [1, 'Wireless Headphones', 'Electronics', '$89.99', 24],
    [2, 'Running Shoes', 'Apparel', '$129.99', 15],
    [3, 'Coffee Maker', 'Home Appliances', '$79.99', 8],
    [4, 'Yoga Mat', 'Fitness', '$29.99', 30],
    [5, 'Desk Lamp', 'Home Office', '$45.00', 12],
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Products Inventory
      </Typography>
      <Paper sx={{ p: 2 }}>
        <TableContainer>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col} align="left">
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <tbody>
              {rows.map((row) => (
                <TableRow key={row[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {row.map((cell) => (
                    <TableCell key={cell} align="left">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Products;
