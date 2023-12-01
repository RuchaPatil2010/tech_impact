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

function convertTo12HourFormat(time) {
    // Ensure the input is a valid 4-digit number
    if (isNaN(time) || time < 0 || time >= 2400 || time % 100 >= 60) {
        return "Invalid time";
    }

    // Extract hours and minutes
    const hours = Math.floor(time / 100);
    const minutes = time % 100;

    // Determine AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    const hours12 = hours % 12 || 12;

    // Format the time
    const formattedTime = `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;

    return formattedTime;
}

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
    const [shift, setShift] = useState([]);

    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};

    const getShiftData = async () => {
        try {
        const data = await axios.get(
            "http://localhost:8000/shifts/shifts", {
            params: {username:"admin"}
        }
        );
        console.log(data);
        setShift(data.data);
    
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
                        const dateDisplay = new Date(item.date)
                        return (
                  
                        <StyledTableRow key={item.id}>
                            <StyledTableCell component="th" scope="row">
                            {item.title}
                            </StyledTableCell>
                            <StyledTableCell>
                                {/* {console.log(new Date(item.date))} */}
                                {/* {console.log(item.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))} */}
                            {new Date(item.date).toLocaleString('en-us', options)} 
                            </StyledTableCell>
                            <StyledTableCell>
                            {convertTo12HourFormat(item.startTime)}
                            </StyledTableCell>
                            <StyledTableCell>
                            {convertTo12HourFormat(item.endTime)}
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