import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    marginTop: 15,
    maxWidth: "70%",
    backgroundColor: "#E2F2F9",
    position: "relative",
    overflow: "auto",
    maxHeight: 200,
    margin: "0 auto",
    padding: 0,
    color: "#08648C"
  },
  listHead: {
    backgroundColor: "#7c4dff",
    padding: 0
  },
  ul: {
    backgroundColor: "#7c4dff",
    padding: 0
  }
});

export default function TeamTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="caption table">
      {/* <caption></caption> */}
      <TableHead>
        <TableRow className={classes.listHead}>
          <TableCell>Team Title </TableCell>
          <TableCell align="center">Description</TableCell>
          <TableCell align="center">Purpose</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.list.map(item => (
          <TableRow key={item.name}>
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell align="center">{item.description}</TableCell>
            <TableCell align="center">{item.purpose}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}