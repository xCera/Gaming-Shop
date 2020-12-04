import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const publishableKey='pk_test_51HuhQcL5HnpQwEVTz0gniJhUuubtrTRdr1EACMtYyb1KRzRiBuorcdH3i9BaHw6n6voB5J2uOgW3jl0CP7BwnA1300lAEG0lgq';
    const priceForStripe=price;
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout  
        label='Pay Now' 
        name='G-shop' 
        description={`Your total is ${price}rsd`} 
        currency="RSD"
        panelLabel='Pay Now'
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )
} 

export default StripeCheckoutButton;
