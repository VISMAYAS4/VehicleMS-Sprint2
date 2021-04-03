import * as actions from '../../actions/bookingAction';

import { Button, Container, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import AlertMessage from '../AlertMessage';
import { BookingNavBar } from "./BookingNavBar"
import { connect } from 'react-redux';

class UpdateBooking extends Component {

    constructor() {
        super();
        this.bookingDate = React.createRef();
        this.bookedTillDate = React.createRef();
        this.bookingDescription = React.createRef();
        this.state = { message: '', booking: {}, bookings: {}, displayAlert: false }

    }

    componentDidMount() {
        this.props.onFetchBookingByID(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }): this.setState({ displayAlert: false });
        }
    }

    updateBooking(event) {
        event.preventDefault();
        this.props.onUpdateBooking({
            bookingId: this.props.match.params.id, bookingDate: this.bookingDate.current.value,
            bookedTillDate: this.bookedTillDate.current.value, bookingDescription: this.bookingDescription.current.value
        })
    }

    render() {
        let { booking } = this.props;
        booking = booking.bookingId ? booking : false
        return (
            !booking ?
                <div>Loading</div>
                :
                <div>
                <BookingNavBar/>
                {this.state.displayAlert && <AlertMessage message={this.props.message}/>}
                
                    <Container maxWidth="sm" style={{ marginTop: 15 }}>
                        <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                            <form>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer Name</Typography>
                                <input type="text" disabled value={booking.customer.firstName + ' ' + booking.customer.lastName} name="customerName" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Number</Typography>
                                <input type="text" disabled value={booking.vehicle.vehicleNumber} name="vehicleNumber" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking Date</Typography>
                                <input type="date" ref={this.bookingDate} placeholder="Enter bookingDate" name="bookingDate" required /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booked Till Date</Typography>
                                <input type="date" ref={this.bookedTillDate} placeholder="Enter bookedTillDate" name="bookedTillDate" required /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking description</Typography>
                                <input type="text" ref={this.bookingDescription} placeholder="Enter booking description" name="bookingDescription" required pattern=".*\S.*" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking distance</Typography>
                                <input type="text" disabled value={booking.distance} name="distance" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Total Cost</Typography>
                                <input type="text" disabled value={booking.totalCost} name="totalCost" /><br></br><br></br>
                                <Button style={{ align: "center" }} variant="contained" onClick={this.updateBooking.bind(this)} color="primary">Update Booking</Button>
                            </form>
                        </Paper>
                    </Container>
                </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.bookingsData.message,
        booking: state.bookingsData.booking,
        bookings: state.bookingsData.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onUpdateBooking: (payload) => dispatch(actions.updateBooking(payload)),
        onFetchBookingByID: (payload) => dispatch(actions.fetchBookingByID(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UpdateBooking);

