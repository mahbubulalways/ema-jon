import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Order from '../Order/Order';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect( ()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const hendlerAdd=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)

    }
    return (
        <div className='w-[90%] mx-auto gap-5 flex justify-between flex-col md:flex-row'>
          
                <div className='w-full  grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                 {products.map(product=><Card
                 product={product}
                 key={product.id}
                 hendlerAdd={hendlerAdd}
                 ></Card>)}
            </div>
            <div className=' w-full md:w-1/3 mt-10 '>
                   
                <Order cart={cart}></Order>

            
            </div>
        </div>
    );
};

export default Shop;