import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "item",
    headerName: "Item",
    width: 150,
    editable: true
  },
  {
    field: "Price",
    headerName: "Price",
    width: 150,
    editable: true
  },
  {
    field: "RecPrice",
    headerName: "Rec Price",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    editable: true,
    renderCell: (params) => (
      <div>
        <Typography>{params.row.RecPrice}</Typography>
        <Typography color="textSecondary">{params.row.IMU}</Typography>
      </div>
    )
  }
];

const rows = [
  { id: 1, item: 1347, Price: "$5.99", RecPrice: "$6.99", IMU: "5.66%" },
  { id: 2, item: 3565, Price: "$6.99", RecPrice: "$7.99", IMU: "5.00%" },
  { id: 3, item: 7775, Price: "$7.99", RecPrice: "$8.99", IMU: "4.33%" },
  { id: 4, item: 3864, Price: "$5.99", RecPrice: "$6.99", IMU: "6.56%" },
  { id: 5, item: 1399, Price: "$3.99", RecPrice: "$4.99", IMU: "2.66%" },
  { id: 6, item: 1988, Price: "$2.99", RecPrice: "$3.99", IMU: "8.66%" },
  { id: 7, item: 9933, Price: "$1.99", RecPrice: "$2.99", IMU: "4.66%" },
  { id: 8, item: 1982, Price: "$9.99", RecPrice: "$10.99", IMU: "4.66%" },
  { id: 9, item: 5678, Price: "$4.99", RecPrice: "$5.99", IMU: "5.66%" }
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
