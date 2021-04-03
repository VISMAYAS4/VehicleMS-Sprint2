import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { Component } from 'react'

import { BookingNavBar } from "./BookingNavBar"
import { connect } from 'react-redux';
import { fetchBookingByID } from '../../actions/bookingAction';

class DetailViewBooking extends Component {
    constructor() {
        super();
        this.state = { booking: {}, message: '' }
    }

    componentDidMount() {
        this.props.onFetchBookingByID(this.props.match.params.id);
    }

    render() {
        let { booking } = this.props;
        booking = booking.bookingId ? booking : false
        return (
            !booking ? <div>
                Loading
            </div>
                :
                // <div>{JSON.stringify(booking)}</div>
                <div>
                    <BookingNavBar />
                    <h2 style={{color: '#3f51b5', align: 'center',  justifyContent: "center", display: "flex" }}>Detailed View Of Booking</h2>
                    <Container maxWidth="lg" style={{ marginTop: 15 }}>
                    <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody>
                                <TableRow><TableCell align="left">
                                    Customer Details</TableCell ><TableCell align="left">
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                <TableRow><TableCell align="left">
                                                    FirstName</TableCell ><TableCell >
                                                        {booking.customer.firstName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LastName</TableCell ><TableCell >
                                                        {booking.customer.lastName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    EmailId</TableCell ><TableCell >
                                                        {booking.customer.emailId}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    MobileNumber</TableCell ><TableCell >
                                                        {booking.customer.mobileNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Address</TableCell ><TableCell >
                                                        {booking.customer.address}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    Vehicle Details</TableCell ><TableCell >
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                <TableRow><TableCell align="left">
                                                    VehicleNumber</TableCell ><TableCell >
                                                        {booking.vehicle.vehicleNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Type</TableCell ><TableCell >
                                                        {booking.vehicle.type}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Category</TableCell ><TableCell >
                                                        {booking.vehicle.category}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Location</TableCell ><TableCell >
                                                        {booking.vehicle.location}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Description</TableCell ><TableCell >
                                                        {booking.vehicle.description}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Capacity</TableCell ><TableCell >
                                                        {booking.vehicle.capacity}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    ChargesPerKm</TableCell ><TableCell >
                                                        {booking.vehicle.chargesPerKm}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    FixedCharges</TableCell ><TableCell >
                                                        {booking.vehicle.fixedCharges}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    Driver Details</TableCell ><TableCell >
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                <TableRow><TableCell align="left">
                                                    FirstName</TableCell ><TableCell >
                                                        {booking.vehicle.driver.firstName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LastName</TableCell ><TableCell >
                                                        {booking.vehicle.driver.lastName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    EmailId</TableCell ><TableCell >
                                                        {booking.vehicle.driver.emailId}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    MobileNumber</TableCell ><TableCell >
                                                        {booking.vehicle.driver.mobileNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Address</TableCell ><TableCell >
                                                        {booking.vehicle.driver.address}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LicenseNo</TableCell ><TableCell >
                                                        {booking.vehicle.driver.licenseNo}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    BookingDate</TableCell ><TableCell >
                                        {booking.bookingDate}</TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    BookedTillDate</TableCell ><TableCell >
                                        {booking.bookedTillDate}</TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    BookingDescription</TableCell ><TableCell >
                                        {booking.bookingDescription}</TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    Distance</TableCell ><TableCell >
                                        {booking.distance}</TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    Total Cost</TableCell ><TableCell >
                                        {booking.totalCost}</TableCell ></TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>
                </Container>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booking: state.bookingsData.booking
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        onFetchBookingByID: (param) => dispatch(fetchBookingByID(param))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(DetailViewBooking);