import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import products from '../scripts/products';
import { removeFromCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cartlist = useSelector(state => state.cart.cartlist); // Access the cartlist from state.cart
    // console.log(cartlist);

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        // Calculate total price
        const calculatedTotalPrice = cartlist.reduce((total, item) => {
            const product = products.find((product) => product.id === item.id);
            return product ? total + product.price : total;
        }, 0);

        setTotalPrice(calculatedTotalPrice);
    }, [cartlist]);

    const removeFromCartlist = (id)=>{
        dispatch(removeFromCart(id))
    }

    if (!cartlist || cartlist.length === 0) {
        return <p className='text-center text-2xl font-raleway pt-5'>Your cart is empty...</p>; 
    }

    return (
        <div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 py-8 gap-8 font-raleway'>
            <div className='lg:w-[70%] '>
                <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
                {cartlist.map((item) => {
                    const product = products.find((product) => product.id === item.id)

                    return product ? (
                        <div
                            key={item.id}
                            className="md:mb-4 mb-3 border border-gray-200 md:p-4 p-2 rounded-lg flex flex-col sm:flex-row items-center justify-between"
                        >
                            <div className="flex items-center space-x-4 w-full">
                                <div className="relative h-24 w-24 flex-shrink-0">
                                    <img className="h-full w-full object-cover rounded-md" src={product.images[0]} alt={product.name} />
                                </div>
                                <div className="flex flex-grow justify-between items-center " >
                                    <div onClick={()=>navigate(`/products/${product.id}`)}>
                                        <p className="font-semibold md:text-lg text-xs cursor-pointer">{product.name}</p>
                                        <p className="text-gray-500 md:text-base text-xs cursor-pointer">Size: {item.size}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold md:text-xl text-sm">$ {product.price.toFixed(2)}</p>
                                        <button
                                            onClick={() => removeFromCartlist(product.id)}
                                            className="border border-black md:text-base text-xs p-1 mt-2 font-sans hover:bg-black hover:text-white duration-300 w-full sm:w-auto"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                })}
            </div>
            <div className='lg:w-[30%]'>
                <div className='bg-gray-100 p-6 rounded-lg sticky top-8'>
                    <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>
                    <div className='space-y-4'>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Subtotal</span>
                            <span className='font-semibold'>$ {totalPrice.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Shipping</span>
                            <span className='font-semibold'>$ 0.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-600'>Tax</span>
                            <span className='font-semibold'>$ 0.00</span>
                        </div>
                        <div className='border-t pt-4 mt-4'>
                            <div className='flex justify-between font-bold text-xl'>
                                <span>Total</span>
                                <span>$ {totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <button className='w-full mt-6 bg-black text-white py-3 font-semibold hover:bg-gray-800 transition duration-300'>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
