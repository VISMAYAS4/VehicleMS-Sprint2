import * as actions from '../../actions/customerAction';

import { Button, Container, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import Alert from '@material-ui/lab/Alert';
import { CustomerNavBar } from "./CustomerNavBar"
import { connect } from 'react-redux';

class UpdateCustomer extends Component {

    constructor() {
        super();
        this.emailId = React.createRef();
        this.state = { message: '', customer: {}, customers: {}, displayAlert: false }

    }

    updateCustomer() {
        console.log("updating...");
    
        var customer = {
            customerId: this.props.match.params.id,
            emailId: this.emailId.current.value
        };
    
        this.props.onUpdateCustomer(customer)
    }

    componentDidMount() {
        this.props.onFetchCustomerByID(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }): this.setState({ displayAlert: false });
        }
    }
  

    render() {
        let { customer } = this.props;
        customer = customer.customerId ? customer : false
        return (
            !CustomElementRegistry ?
                <div>Loading</div>
                :
                <div>
                <CustomerNavBar/>
                    {this.state.displayAlert && <Alert variant="filled" severity="success" style={{justifyContent:"center"}}>
                        {this.props.message}
                    </Alert>}
                    <Container maxWidth="sm" style={{ marginTop: 15 }}>
                        <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                            <form>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer Name</Typography>
                                <input type="text" disabled value={customer.firstName + ' ' + customer.lastName} name="customerName" /><br></br><br></br>
                                {/* <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Vehicle Number</Typography>
                                <input type="text" disabled value={booking.vehicle.vehicleNumber} name="vehicleNumber" /><br></br><br></br> */}
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Email Id</Typography>
                                <input type="text" ref={this.emailId} placeholder="Enter EmailId" name="emailId" required /><br></br><br></br>
                                {/* <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booked Till Date</Typography>
                                <input type="date" ref={this.bookedTillDate} placeholder="Enter bookedTillDate" name="bookedTillDate" required /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking description</Typography>
                                <input type="text" ref={this.bookingDescription} placeholder="Enter booking description" name="bookingDescription" required pattern=".*\S.*" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Booking distance</Typography>
                                <input type="text" disabled value={booking.distance} name="distance" /><br></br><br></br>
                                <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Total Cost</Typography>
                                <input type="text" disabled value={booking.totalCost} name="totalCost" /><br></br><br></br> */}
                                <Button style={{ align: "center" }} variant="contained" onClick={this.updateCustomer.bind(this)} color="primary">Update Customer</Button>
                            </form>
                        </Paper>
                    </Container>
                </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.customersData.message,
        customer: state.customersData.customer,
        customers: state.customersData.customers
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onUpdateCustomer: (payload) => dispatch(actions.updateCustomer(payload)),
        onFetchCustomerByID: (payload) => dispatch(actions.fetchCustomerByID(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UpdateCustomer);

