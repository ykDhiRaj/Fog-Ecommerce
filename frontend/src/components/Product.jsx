import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../scripts/products";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react"; // Assuming you're using CoreUI
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import { useDispatch } from "react-redux";
import { addWish } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const Product = () => {
  const { id } = useParams();
  const [apparelSize, setApparelSize] = useState("");
  // console.log(apparelSize)
  
  const dispatch = useDispatch()

  const addToWishlist = (id)=>{
    dispatch(addWish(id))
  }

  const addCart = (id,apparelSize,price)=>{
      
       if(apparelSize == ''){
        return enqueueSnackbar("Please select size", {variant:"warning"});
       }
       else{
          dispatch(addToCart({ id, size: apparelSize, price  }));
       }
      
  }

  

  // Find the product by comparing the id
  const product = products.find((product) => product.id === parseInt(id)); // Assuming id is a number

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SnackbarProvider/>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <CCarousel controls indicators className="h-[320px] md:h-[560px] object-cover overflow-hidden ">
            {product.images.map((image, index) => (
              <CCarouselItem key={index}>
                <CImage
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`slide ${index + 1}`}
                />
              </CCarouselItem>
            ))}
          </CCarousel>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-5">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">{product.name}</h1>

          <div className="text-yellow-300 space-x-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>

          <p className="text-lg mb-6">{product.description}</p>

          <div className="flex space-x-2 mb-6">
            {product.sizes.map((size) => (
              <div
                key={size}
                className={`border border-black h-10 w-10 text-center py-1 cursor-pointer ${
                  apparelSize === size ? "bg-gray-400" : "hover:bg-gray-400"
                }`}
                onClick={() => setApparelSize(size)}
              >
                {size}
              </div>
            ))}
          </div>

          <p className="text-xl mb-6">
            Price: <span className="tracking-wider">${product.price}</span>
          </p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 font-semibold rounded-md bg-black text-white"
              onClick={()=>addToWishlist(product.id)}
              
            >
              Add to wishlist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 font-semibold rounded-md bg-black text-white"
              onClick={()=>addCart(product.id,apparelSize,product.price)}
              // disabled={!apparelSize}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
