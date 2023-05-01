import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCartAsync } from '@store/slices/cart/cart';
import { productsAsync } from '@store/slices/product/product';
import { myAccountAsync } from '@store/slices/user/user';
import { getCurrentAccessToken } from '@utils/getCurrentAccessToken';

interface IInitialState {
    initApp: boolean;
    loading: boolean;
}

const initialState: IInitialState = {
    initApp: false,
    loading: true,
};

export const initAppAsync = createAsyncThunk('app/init', async (_, thunkAPI) => {
    await thunkAPI.dispatch(productsAsync(1));

    if (getCurrentAccessToken()) {
        const account = thunkAPI.dispatch(myAccountAsync());
        const cart = thunkAPI.dispatch(getCartAsync());
        await Promise.all([account, cart]);
    }
});

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(initAppAsync.pending, initAppAsyncPending)
            .addCase(initAppAsync.fulfilled, initAppAsyncThen)
            .addCase(initAppAsync.rejected, initAppAsyncThen);
    },
});

function initAppAsyncPending(state: IInitialState) {
    state.initApp = false;
    state.loading = true;
}

function initAppAsyncThen(state: IInitialState) {
    state.initApp = true;
    state.loading = false;
}

export default appSlice.reducer;
