import * as actions from '../../actions/bookingAction'

import { Button, Container, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import AlertMessage from '../AlertMessage';
import { BookingNavBar } from "./BookingNavBar"
import { connect } from 'react-redux';

class AddBooking extends Component {

    constructor() {
        super();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.vehicleNumber = React.createRef();
        this.bookingDate = React.createRef();
        this.bookedTillDate = React.createRef();
        this.bookingDescription = React.createRef();
        this.distance = React.createRef();
        this.customer = React.createRef();
        this.vehicle = React.createRef();
        this.state = { message: '',displayAlert:''}
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }): this.setState({ displayAlert: false });
        }
    }
    

    addBooking(event) {
        event.preventDefault();
        this.props.onAddBooking({
            customer: { firstName: this.firstName.current.value, lastName: this.lastName.current.value },
            vehicle: { vehicleNumber: this.vehicleNumber.current.value }, bookingDate: this.bookingDate.current.value,
            bookedTillDate: this.bookedTillDate.current.value, bookingDescription: this.bookingDescription.current.value,
            distance: this.distance.current.value
        });

    }

    render() { 
        return (
            <div>
                 <BookingNavBar/>
                {this.state.displayAlert && <AlertMessage message={this.props.message}/>}

                <Container maxWidth="sm" style={{ marginTop: 15 }}>
                    <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                        <form>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer firstName</Typography>
                            <input type="text" ref={this.firstName} placeholder="Enter firstName" name="firstName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer lastName</Typography>
                            <input type="text" ref={this.lastName} placeholder="Enter lastName" name="lastName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Number</Typography>
                            <input type="text" ref={this.vehicleNumber} placeholder="Enter vehicleNumber" name="vehicleNumber" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking Date</Typography>
                            <input type="date" ref={this.bookingDate} placeholder="Enter bookingDate" name="bookingDate" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booked Till Date</Typography>
                            <input type="date" ref={this.bookedTillDate} placeholder="Enter bookedTillDate" name="bookedTillDate" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking description</Typography>
                            <input type="text" ref={this.bookingDescription} placeholder="Enter booking description" name="bookingDescription" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking distance</Typography>
                            <input type="text" ref={this.distance} placeholder="Enter distance" name="distance" required /><br></br><br></br>
                            <Button style={{ align: "center" }} variant="contained" onClick={this.addBooking.bind(this)} color="primary">Add Booking</Button>
                        </form>
                    </Paper>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.bookingsData.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddBooking: (payload) => dispatch(actions.addBooking(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBooking);
