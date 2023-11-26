import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import '../css/History.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
function History() {

    const classes = useStyles();
    const [shift, setShift] = useState([{
        "title": "Tech Impact",
        "date": "2023-11-12",
        "startTime": "8:00 AM",
        "endTime": "12:00 PM"
    }]);

    const getShiftData = async () => {
        try {
        const data = await axios.get(
            "http://localhost:8000/shifts/shifts"
        );
        console.log(data);
        //setProduct(data.data);
        } catch (e) {
        console.log(e);
        }
    };

    useEffect(() => {
        getShiftData();
    }, []);

    return (
        <div className="History">
            <h2>Volunteer Shift History</h2>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Oraganization Name</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Start time</StyledTableCell>
                        <StyledTableCell>End time</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shift
                    .map((item) => {
                        return (
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                            {item.title}
                            </StyledTableCell>
                            <StyledTableCell>
                            {item.date}
                            </StyledTableCell>
                            <StyledTableCell>
                            {item.startTime}
                            </StyledTableCell>
                            <StyledTableCell>
                            {item.endTime}
                            </StyledTableCell>
                        </StyledTableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default History;