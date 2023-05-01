import { AxiosError } from 'axios';

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartService } from '@services/cart/cartService';
import { IProduct } from '@services/products/productsService';

interface IUserSlice {
    loading: boolean;
    cart: Record<string, IProduct>;
}

const initialState: IUserSlice = {
    loading: false,
    cart: {},
};

export const getCartAsync = createAsyncThunk('cart/products', async () => {
    return CartService.getCart();
});

export const cartAddAsync = createAsyncThunk('cart/add', async (id: number) => {
    return CartService.cartAdd(id);
});

export const cartRemoveAsync = createAsyncThunk('cart/remove', async (id: number) => {
    return CartService.cartRemove(id);
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCartAsync.pending, loadingPending)
            .addCase(getCartAsync.fulfilled, cartAsyncFulfilled)
            .addCase(getCartAsync.rejected, loadingRejected)

            .addCase(cartAddAsync.pending, loadingPending)
            .addCase(cartAddAsync.fulfilled, cartAsyncFulfilled)
            .addCase(cartAddAsync.rejected, loadingRejected)

            .addCase(cartRemoveAsync.pending, loadingPending)
            .addCase(cartRemoveAsync.fulfilled, cartAsyncFulfilled)
            .addCase(cartRemoveAsync.rejected, loadingRejected);
    },
});

type TAction = PayloadAction<
    IProduct[] | AxiosError<unknown, unknown>,
    string,
    {
        arg?: number | void;
        requestId: string;
        requestStatus: 'fulfilled';
    },
    never
>;

function loadingPending(state: IUserSlice) {
    state.loading = true;
}

function loadingRejected(state: IUserSlice) {
    state.loading = false;
}

function cartAsyncFulfilled(state: IUserSlice, action: TAction) {
    state.loading = false;
    const products = action.payload;

    state.cart = {};

    if (products instanceof AxiosError) {
    } else {
        for (const product of products) {
            state.cart[product.id] = product;
        }
    }
}

export default cartSlice.reducer;
