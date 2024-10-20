import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice"
import cartlistReducer from "../features/cart/cartSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
    key: 'root',
    storage, // Choose localStorage as the storage engine
  };

const persistedWishlistReducer = persistReducer(persistConfig,wishlistReducer)
const persistedCartReducer = persistReducer(persistConfig,cartlistReducer)

export const store = configureStore({
  reducer: {
    wishlist: persistedWishlistReducer,
    cart: persistedCartReducer
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Disabling the serializable check
        }),
})

export const persistor = persistStore(store)