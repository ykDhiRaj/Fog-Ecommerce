import React, { useState } from "react";
import Intro from "../assets/NewIntro.mp4";
import IntroPic from "../assets/IntroPic1.jpg";
import factory from "../assets/denimFactory.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addWish } from "../features/wishlist/wishlistSlice";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import products from "../scripts/products";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

const Home = () => {
  const navigate = useNavigate()
  const [hoverIndex, setHoverIndex] = useState(null)
  const dispatch = useDispatch()
  const addToWishList = (id)=>{
      dispatch(addWish(id))
      // enqueueSnackbar("Added to wishlist",{variant:'success'})
  }
  return (
    <>
      <div className=" h-screen w-full relative object-contain">
        <SnackbarProvider/>
        <div className="absolute top-5 md:p-10 p-2">
          <h1 className=" md:text-[9rem] text-7xl text-[#292F30] text-opacity-80 md:tracking-wider font-raleway ">
            Elevate{" "}
          </h1>
        </div>
        <div className="absolute top-[30%] md:right-[40%] right-[30%]">
          <h1 className=" md:text-[10rem] text-7xl text-yellow-100 text-opacity-80 md:tracking-wider font-raleway ">
            Your
          </h1>
        </div>
        <div className="absolute top-[60%] right-0 md:p-10 p-5">
          <h1 className=" md:text-[10rem] text-7xl text-white text-opacity-60 md:tracking-wider font-raleway ">
            {" "}
            Style
          </h1>
        </div>
        <video
          className="h-screen w-full object-cover"
          src={Intro}
          autoPlay
          muted
          loop
        ></video>

        <div className=" w-full relative ">
          <div className="ml-5 absolute top-4">
            <h1 className=" font-raleway tracking-widest md:text-9xl text-3xl">
              Effortless Style for
            </h1>
            <h1 className=" font-raleway tracking-widest md:text-9xl text-3xl text-red-500">
              Everyday Living.
            </h1>
            <a href="#products" className="font-raleway md:text-3xl text-xs md:mt-5 md:ml-4 cursor-pointer underline hover:text-gray-400 duration-300">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />{" "}
            </a>
          </div>
          <img
            className="md:h-[700px] w-screen md:object-cover md:object-top"
            src={IntroPic}
            alt=""
          />
        </div>

        <div id="products" className="font-raleway md:mt-6 mt-3">
  <h1 className="text-center md:text-6xl text-3xl font-semibold">
    Products
  </h1>
  <div className="h-[550px] w-full md:mt-4 mt-2 p-2 px-4 relative space-x-5 overflow-x-auto scrollbar-hide">
    <div className="flex h-full w-max space-x-5 cursor-pointer">
      {products.map((product, index) => (
        product.arrival === "new" && (
          <div key={index}  
            onMouseEnter={()=> setHoverIndex(index)}
            onMouseLeave={()=>setHoverIndex(null)}
           className="h-full w-[350px]  border border-black ">
            <div onClick={() => navigate(`/products/${product.id}`)} className="h-[80%] ">
              <img className="h-full w-full object-cover"  src={hoverIndex === index && product.images[1] ? product.images[1] : product.images[0]} alt="" />
            </div>
            <div className="font-mono p-4 text-[1.1rem] tracking-tighter text-gray-800 pt-7 flex items-center justify-between" >
              <div>
              <p onClick={() => navigate(`/products/${product.id}`)}>
              {product.name}
              </p>
              <p className="tracking-wide"> ${product.price}</p>
              </div>

              <div>
              <FontAwesomeIcon
               onClick={()=>addToWishList(product.id)}
               className="hover:text-red-500 duration-300 cursor-pointer"
               icon={faHeart}
               size="xl"  />
              </div>
              
            </div>
          </div>
        )
      ))}
    </div>
  </div>
</div>


        <div className="flex mt-5 relative font-raleway md:p-5 p-3">
          <div className="left w-[50%] ">
            <h1 className="md:text-4xl  font-semibold md:ml-3 ">
              Why to choose Us?
            </h1>
            <p className="md:mt-5 mt-3 md:text-2xl text-xs md:mx-9 mx-1 tracking-wide">
              At *F O G, we believe that fashion is more than just clothing—
              it's a statement of individuality. Our mission is to provide
              high-quality, trend-forward apparel that reflects your unique
              style, while ensuring comfort and durability. We source the finest
              fabrics, design with care, and prioritize ethical production
              practices, so you can look and feel great knowing your wardrobe
              choices are both stylish and sustainable. Whether you're dressing
              for a special occasion or upgrading your everyday essentials,
              we’re here to help you express your true self with confidence.
            </p>
            <div className="mt-6 md:text-xl text-xs md:ml-4 ml-1">
              <button
              onClick={()=>navigate("/mens")}
               className="block mb-2 border border-black rounded-3xl p-1 hover:bg-black hover:text-white duration-300 md:px-5 px-2">
                Shop mens <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
              onClick={()=>navigate("/womens")}
               className="block border border-black  rounded-3xl p-1 hover:bg-black hover:text-white duration-300 md:px-5 px-2">
                Shop womens <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="right w-[50%]">
            <img
              className="h-[550px] w-screen object-cover"
              src={factory}
              alt=""
            />
          </div>
        </div>

        <div className="tracking-tighter font-raleway md:h-[550px] h-[450px] w-full bg-[#EDECE8] md:pt-10 pt-4 mt-9 relative">
          <div className="text-center p-2 md:text-3xl font-medium md:mx-40 ">
            <p className="">
              "Discover a collection of thoughtfully crafted garments that
              celebrate the artisans behind each piece and the stories of where
              they come from."
            </p>
          </div>

          <div className="font-raleway text-center md:mt-9 mt-5 text-3xl font-semibold">
            <p>Get 10% off on your first order.</p>
          </div>

          <div className="font-raleway md:space-x-5 space-x-2 text-center md:mt-10 mt-5 font-semibold md:tracking-normal text-xs md:text-base ">
            <a href="">About Us</a>
            <a href="">Our Stores</a>
            <a href="">Help</a>
            <a href="">Terms & Conditions</a>
            <a href="">Returns & Exchanges</a>
          </div>

          <div className="font-raleway md:space-x-5 space-x-2 text-center md:mt-1 mt-4 md:tracking-normal font-semibold text-xs md:text-base">
            <a href="">Privacy Policy</a>
            <a href="">Shipping Information</a>
            <a href="">Contact Us</a>
            <a href="">FAQs</a>
          </div>

          <div className="text-center md:space-x-14 space-x-10 md:text-5xl text-4xl mt-11">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-gray-600 duration-300"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-gray-600 duration-300"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-gray-600 duration-300"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-gray-600 duration-300"
              icon={faWhatsapp}
            />
          </div>

          <div className="md:text-end text-center font-raleway font-semibold md:mr-9 md:mt-24 mt-10 text-xs md:text-base">
            <p>©2024 Dhiraj Jatav. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
