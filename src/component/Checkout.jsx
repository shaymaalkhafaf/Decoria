import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {

    const onToken = (token) => {
        console.log(token);
    }
    return (
        <div>
        <StripeCheckout 
        name= "DECORIA"
        image= "https://i.ibb.co/sVGghxJ/homrdecore.jpg"
        // billingAddress
        // shippingAddress

        token={onToken}
        stripeKey="pk_test_51KxEJ8L7zPoj4o6cSAYN2130PaFmoO0jRuO7W66Qq1E78hD9TnuDRsTQGGj9wSdiYlPGmNq2BL2CpljwAhwabXf1009omiZbYn"
          />
        </div>
    )
}

export default Pay;
