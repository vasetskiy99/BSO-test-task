import { combineReducers, configureStore } from '@reduxjs/toolkit';

import app from './slices/app/app';
import cart from './slices/cart/cart';
import product from './slices/product/product';
import user from './slices/user/user';

const rootReducer = combineReducers({
    product,
    user,
    app,
    cart,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
