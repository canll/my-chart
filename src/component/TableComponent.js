import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const generateData = (num) => {
  const newData = [];
  for (let i = 1; i <= num; i++) {
    newData.push({ id: i, name: `User ${i}`, age: 20 + (i % 30) });
  }
  return newData;
};

const data = generateData(100);

const TableComponent = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseMove = (event, rowId) => {
    setHoveredRow(rowId);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              onMouseMove={(event) => handleMouseMove(event, row.id)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                backgroundColor: hoveredRow === row.id ? "#f5f5f5" : "white",
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell style={{ position: "relative" }}>
                {hoveredRow === row.id && (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ position: "absolute", right: 6, top: 6 }}
                  >
                    Action
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
