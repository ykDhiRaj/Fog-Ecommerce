import {createSlice} from "@reduxjs/toolkit"
import { enqueueSnackbar } from "notistack"

const initialState = {
    wishlist:[]
}

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addWish:(state,action)=>{
            const wish = {
                id:action.payload,
            }

            const existingItem = state.wishlist.find(wishlist => wishlist.id == wish.id)
            // console.log(existingItem)

            if(existingItem){
                enqueueSnackbar("Item already exists", {variant:'warning'});
            }
            else{
                enqueueSnackbar("Item added successfully",{variant:'success'})
                state.wishlist.push(wish)
            }

        },
        removeWish:(state,action)=>{
            state.wishlist = state.wishlist.filter((wish)=>wish.id != action.payload)
        }   
    }
})

export const{addWish,removeWish} = wishlistSlice.actions

export default wishlistSlice.reducer