import React,{useState} from 'react'
import products from '../scripts/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { addWish } from '../features/wishlist/wishlistSlice'
import { useDispatch } from 'react-redux'
import { SnackbarProvider } from 'notistack'

const Womens = () => {

  const [hoverIndex, setHoverIndex] = useState(null)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const addToWishList = (id)=>{
    dispatch(addWish(id))
    
}

  return (
    <>
    <div className="container mx-auto md:px-4 py-8">
     <SnackbarProvider/>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-2">
       {products.map((product, index) => (
         product.categories ==='female' && (
         <div
           key={product.id}
           onMouseEnter={() => setHoverIndex(index)}
           onMouseLeave={() => setHoverIndex(null)}
           className="border border-black"
         >
           <div 
             onClick={() => navigate(`/products/${product.id}`)}
             className="h-80 overflow-hidden cursor-pointer object-cover "
           >
             <img
               className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
               src={hoverIndex === index && product.images[1] ? product.images[1] : product.images[0]}
               alt={product.name}
             />
           </div>
           <div className="font-mono p-4 text-[1.1rem] tracking-tighter text-gray-800 flex items-center justify-between">
             <div>
               <p
                 onClick={() => navigate(`/products/${product.id}`)}
                 className="cursor-pointer hover:underline md:text-base text-sm"
               >
                 {product.name}
               </p>
               <p className="tracking-wide md:text-base text-sm">${product.price.toFixed(2)}</p>
             </div>
             <div>
                 <FontAwesomeIcon className="md:text-2xl hover:text-red-500 duration-300 cursor-pointer" onClick={() => addToWishList(product.id)} icon={faHeart} size='sm'/> 
             </div>
           </div>
         </div>)
       ))}
     </div>
   </div>
   </>
  )
}

export default Womens
