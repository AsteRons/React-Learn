import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from  './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

       const order = {
       
            ingredients: this.props.ingredients,
            price: this.props.price,
            constomer: {
                name: 'Mat Alinex',
                address: {
                    street: 'Polna',
                    zipCode: '43565',
                    country: 'Poland'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fasrest'
       }
       axios.post('/orders.json', order)
        .then(response => 
            {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
        .catch(error => {

                this.setState({ loading: false});    
        });

    }

    render() {
        let from = (
            <form>
                <Input type = "text" name="name" placeholder="Your Name"/>
                <Input type = "text" name="email" placeholder="Your Mail"/>
                <Input type = "text" name="street" placeholder="Street"/>
                <Input type = "text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked = {this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            from = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {from}
            </div>
        );
    }
}

export default ContactData;