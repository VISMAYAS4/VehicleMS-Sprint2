import * as actions from '../../actions/customerAction'

import { Button, Container, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import AlertMessage from '../AlertMessage';
import { CustomerNavBar } from "./CustomerNavBar"
import { connect } from 'react-redux';

class AddCustomer extends Component {

    constructor() {
        super();
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.emailId = React.createRef();
        this.mobileNumber = React.createRef();
        this.address = React.createRef();
        this.state = { message: '',displayAlert:''}
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            this.props.message ? this.setState({ displayAlert: true }): this.setState({ displayAlert: false });
        }
    }
    

    addCustomer() {
       
        var customer = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            emailId: this.emailId.current.value,
            mobileNumber: this.mobileNumber.current.value,
            address: this.address.current.value
        };
        this.props.onAddCustomer(customer)
    }

    render() { 
        return (
            <div>
                 <CustomerNavBar/>
                 {this.state.displayAlert && <AlertMessage message={this.props.message}/>}

                <Container maxWidth="sm" style={{ marginTop: 15 }}>
                    <Paper elevation={5} style={{ padding: 8, justifyContent: "center", display: "flex" }} >
                        <form>

                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer firstName</Typography>
                            <input type="text" ref={this.firstName} placeholder="Enter firstName" name="firstName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Customer lastName</Typography>
                            <input type="text" ref={this.lastName} placeholder="Enter lastName" name="lastName" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Email Id</Typography>
                            <input type="text" ref={this.emailId} placeholder="Enter emailId" name="emailId" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Mobile Number</Typography>
                            <input type="number" ref={this.mobileNumber} placeholder="Enter mobileNumber" name="mobileNumber" required /><br></br><br></br>
                            <Typography variant="h6" style={{ width: 'fit-content', margin: '' }}>Address</Typography>
                            <input type="text" ref={this.address} placeholder="Enter address" name="address" required /><br></br><br></br>
                            <br></br><br></br>
                            <Button style={{ align: "center" }} variant="contained" onClick={this.addCustomer.bind(this)} color="primary">Add Customer</Button>
                        </form>
                    </Paper>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.customersData.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddCustomer: (payload) => dispatch(actions.addCustomer(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddCustomer);
