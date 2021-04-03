import * as actions from '../../actions/bookingAction'

import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react'

import AlertMessage from '../AlertMessage';
import { BookingNavBar } from "./BookingNavBar"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';

class ViewBookings extends Component {


    constructor() {
        super();
        this.state = { bookings: [], message: '', displayAlert: false }
    }

    componentDidMount() {
        const user = this.props.user;
        if (this.props.isLoggedIn) {
            if (user.roles.includes("ROLE_ADMIN")) { this.props.onFetchBookings() }
        else { this.props.onFetchCustomerBookings(user.email) }
        }
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }) : this.setState({ displayAlert: false });
        }
    }

    deleteBoooking(id) {
        this.props.onDeleteBooking(id);
    }

    render() {
        const { isLoggedIn } = this.props;
        if (!isLoggedIn) {
            return <Redirect to="/login" />;
        }

        return (
            <div>
                <BookingNavBar isAdmin={this.props.user.roles.includes("ROLE_ADMIN")}/>
                {this.state.displayAlert && <AlertMessage message={this.props.message}/>}
                <br></br><br></br>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead >
                            <TableRow style={{ color: "#3f51b5", fontSize: 'medium' }}>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }} >#</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Customer Name</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Vehicle Number</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Booking Date</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Booked Till Date</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Booking Desc</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Distance</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Total Cost</TableCell>
                                <TableCell align="center" style={{ color: "#3f51b5", fontSize: 'medium' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        {this.props && this.props.bookings && <TableBody>
                            {this.props.bookings.map((booking, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {i + 1}
                                    </TableCell>
                                    <TableCell align="center">{booking.customer.firstName} {booking.customer.lastName}</TableCell>
                                    <TableCell align="center">{booking.vehicle.vehicleNumber}</TableCell>
                                    <TableCell align="center">{booking.bookingDate}</TableCell>
                                    <TableCell align="center">{booking.bookedTillDate}</TableCell>
                                    <TableCell align="center">{booking.bookingDescription}</TableCell>
                                    <TableCell align="center">{booking.distance}</TableCell>
                                    <TableCell align="center">{booking.totalCost}</TableCell>
                                    <TableCell align="center">
                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
                                            <Button><Link to={"/detailViewBooking/" + booking.bookingId} style={{ textDecoration: 'none', color: 'white' }}><VisibilityIcon /></Link></Button>
                                            <Button><Link to={"/updateBooking/" + booking.bookingId} style={{ textDecoration: 'none', color: 'white' }}><EditIcon /></Link></Button>
                                            <Button onClick={this.deleteBoooking.bind(this, booking.bookingId)}><DeleteIcon /></Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>}
                    </Table>
                </TableContainer>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        message: state.bookingsData.message,
        bookings: state.bookingsData.bookings,
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        onFetchBookings: () => dispatch(actions.fetchBookings()),
        onDeleteBooking: (id) => dispatch(actions.deleteBooking(id)),
        onUpdateAlertMessage: (msg) => dispatch(actions._deleteBooking(msg)),
        onFetchCustomerBookings: (email) => dispatch(actions.fetchBookingByCustomerEmail(email))

    }
}

export default connect(mapStateToProps, mapDispatchToState)(ViewBookings);

