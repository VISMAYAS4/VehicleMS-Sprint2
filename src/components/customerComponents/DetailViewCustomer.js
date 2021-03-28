import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React, { Component } from 'react'

import { CustomerNavBar } from "./CustomerNavBar"
import { connect } from 'react-redux';
import { fetchCustomerByID } from '../../actions/customerAction';

class DetailViewCustomer extends Component {
    constructor() {
        super();
        this.state = { customer: {}, message: '' }
    }

    componentDidMount() {
        this.props.onFetchCustomerByID(this.props.match.params.id);
    }

    render() {
        let { customer } = this.props;
        customer = customer.customerId ? customer : false
        return (
            !customer ? <div>
                Loading
            </div>
                :
                // <div>{JSON.stringify(booking)}</div>
                <div>
                    <CustomerNavBar />
                    <h2 style={{color: '#3f51b5', align: 'center',  justifyContent: "center", display: "flex" }}>Detailed View Of Customer</h2>
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
                                                        {customer.firstName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LastName</TableCell ><TableCell >
                                                        {customer.lastName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    EmailId</TableCell ><TableCell >
                                                        {customer.emailId}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    MobileNumber</TableCell ><TableCell >
                                                        {customer.mobileNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Address</TableCell ><TableCell >
                                                        {customer.address}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow>

                                {/* <TableRow><TableCell align="left">
                                    Vehicle Details</TableCell ><TableCell >
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                <TableRow><TableCell align="left">
                                                    VehicleNumber</TableCell ><TableCell >
                                                        {customer.booking.vehicle.vehicleNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Type</TableCell ><TableCell >
                                                        {customer.booking.vehicle.type}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Category</TableCell ><TableCell >
                                                        {customer.booking.vehicle.category}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Location</TableCell ><TableCell >
                                                        {customer.booking.vehicle.location}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Description</TableCell ><TableCell >
                                                        {customer.booking.vehicle.description}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Capacity</TableCell ><TableCell >
                                                        {customer.booking.vehicle.capacity}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    ChargesPerKm</TableCell ><TableCell >
                                                        {customer.booking.vehicle.chargesPerKm}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    FixedCharges</TableCell ><TableCell >
                                                        {customer.booking.vehicle.fixedCharges}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow>

                                <TableRow><TableCell align="left">
                                    Driver Details</TableCell ><TableCell >
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                <TableRow><TableCell align="left">
                                                    FirstName</TableCell ><TableCell >
                                                        {customer.vehicle.driver.firstName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LastName</TableCell ><TableCell >
                                                        {customer.vehicle.driver.lastName}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    EmailId</TableCell ><TableCell >
                                                        {customer.vehicle.driver.emailId}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    MobileNumber</TableCell ><TableCell >
                                                        {customer.vehicle.driver.mobileNumber}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    Address</TableCell ><TableCell >
                                                        {customer.vehicle.driver.address}</TableCell ></TableRow>

                                                <TableRow><TableCell align="left">
                                                    LicenseNo</TableCell ><TableCell >
                                                        {customer.vehicle.driver.licenseNo}</TableCell ></TableRow>

                                            </TableBody></Table>
                                    </TableCell ></TableRow> */}

                                {/* <TableRow><TableCell align="left">
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
                                        {booking.totalCost}</TableCell ></TableRow> */}

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
        customer: state.customer
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        onFetchCustomerByID: (param) => dispatch(fetchCustomerByID(param))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(DetailViewCustomer);