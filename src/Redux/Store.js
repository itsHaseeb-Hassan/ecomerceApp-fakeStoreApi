import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slice/productSlice'
import cartReducer from './Slice/CartSlice'
import checkoutReducer from './Slice/CheckoutSlice'
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
    key:'root',
    storage,
}

const rootReducer =combineReducers({
    product:productReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})
export const persistor = persistStore(store)