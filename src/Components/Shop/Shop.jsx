import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect( ()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='w-[90%] mx-auto  flex justify-between flex-col md:flex-row'>
          
                <div className='w-full  grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                 {products.map(product=><Card
                 product={product}
                 key={product.id}
                 ></Card>)}
            </div>
            <div className=' w-full md:w-1/3'>
                <h1>cmlskcjsdljcdsljc</h1>

            
            </div>
        </div>
    );
};

export default Shop;