import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWish } from '../features/wishlist/wishlistSlice';
import products from '../scripts/products';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.wishlist);

    const removeFromWishlist = (id)=>{
        dispatch(removeWish(id))
    }


    // Check if wishlist is empty
    if (!wishlist || wishlist.length === 0) {
        return <p className="text-center text-2xl font-raleway pt-5">Nothing yet... Add some products.</p>
      }
    
      return (
        <div className="p-4 font-raleway">
          {wishlist.map((wish) => {
            const product = products.find((product) => product.id === wish.id)
    
            return product ? (
              <div
                key={wish.id}
                className="mb-4 border border-black p-4 sm:flex sm:items-center sm:justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 cursor-pointer"
                onClick={()=>navigate(`/products/${product.id}`)}>
                  <div className="relative h-28 w-28 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <img className="h-full w-full object-cover" src={product.images[0]} alt={product.name} />
                  </div>
                  <div onClick={()=>navigate(`/products/${product.id}`)} className="text-center sm:text-left">
                    <p className="text-sm">Product name</p>
                    <p className="font-sans font-semibold">{product.name}</p>
                  </div>
                </div>
    
                <div onClick={()=>navigate(`/products/${product.id}`)} className="text-center sm:text-left mt-4 sm:mt-0 cursor-pointer">
                  <p className="text-sm">Price</p>
                  <p className="font-sans text-xl">$ {product.price}</p>
                </div>
    
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="border border-black p-2 font-sans hover:bg-black hover:text-white duration-300 w-full sm:w-auto"
                  >
                    Remove from wishlist
                  </button>
                </div>
              </div>
            ) : (
              <p key={wish.id}>Product not found</p>
            )
          })}
        </div>
      )
}

export default WishList;
