
import React from 'react';

const Order = (props) => {

    // const cart=props.cart
    const {cart}=props
  


    let total=0 
    let shipping=0
for(const singleCard of cart){
    total=total+singleCard.price
    shipping=shipping+singleCard.shipping
}
const tax=total*5/100
const grandTotal=total+tax+shipping

    return (
        <div className=' bg-gray-700 text-white px-2 sticky top-0 py-24 rounded-md'>
            <h1 className='text-3xl font-semibold  text-center'>Order Summary</h1>
            <div className='space-y-5'>
                <h1 className='text-2xl font-semibold mt-10'>Selected Items: {cart.length}</h1>
                <p className='text-lg'>Total Price: ${total}</p>
                <p className='text-lg'>Total Shipping Charge: ${shipping}</p>
                <p className='text-lg'>Tax: ${tax.toFixed(2)} </p>
                <p className='text-2xl font-bold'>Grand Total: ${grandTotal.toFixed(2)} </p>
              
            </div>
        </div>
    );
};

export default Order;