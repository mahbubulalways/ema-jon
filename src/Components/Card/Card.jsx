import React from 'react';

const Card = (props) => {
   
    const {img,name,price,ratings,seller,}=props.product
  const hendlerAdd=props.hendlerAdd
    return ( 
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl border border-gray-400">
  <figure><img className='p-2 rounded-2xl' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <div>
    <h1 className="card-title">{name}</h1>
    <h4 className='text-xl font-semibold'>Price: ${price}</h4>
    </div>
    <div className='mt-10'>
        <h1  className='text-lg font-semibold'>Manufacturer: {seller}</h1>
        <h1  className='text-lg font-semibold'>Rating: {ratings} stars</h1>
    </div>
    
  </div>
  <button onClick={()=>hendlerAdd(props.product)}>
  <div className='flex gap-3 border-t-1 rounded-br-xl rounded-bl-xl border-gray-400 bg-gray-700 text-white justify-center items-center  w-full '>
      <div>
      <button className="w-full rounded-sm py-2 font-semibold">Add to Cart
      </button>
      </div>
     <div>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
     </div>

    </div>
  </button>
</div>
        </div>
    );
};

export default Card;