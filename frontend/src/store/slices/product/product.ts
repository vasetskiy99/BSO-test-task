import { AxiosError, isAxiosError } from 'axios';

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct, IProductResponse, ProductsService } from '@services/products/productsService';

interface IInitialState {
    products: Array<IProduct>;
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
    product: IProduct | null;
    loadingProduct: boolean;
    showProductModal: boolean;
}

const initialState: IInitialState = {
    products: [],
    pagination: {
        page: 1,
        pageSize: 8,
        pageCount: 0,
        total: 0,
    },
    product: null,
    loadingProduct: false,
    showProductModal: false,
};

export const productsAsync = createAsyncThunk('products/getAll', async (page: number) => {
    return ProductsService.getProducts(page);
});

export const productByIdAsync = createAsyncThunk('products/id', async (id: number) => {
    return ProductsService.getProductById(id);
});

export const productSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        hideProductModal: state => {
            state.showProductModal = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(productByIdAsync.pending, productPending)
            .addCase(productByIdAsync.fulfilled, productFulfilled)
            .addCase(productByIdAsync.rejected, productReject)

            .addCase(productsAsync.fulfilled, (state, action) => {
                const response = action.payload;

                if (!isAxiosError(response)) {
                    state.products = response.data;
                    state.pagination.total = response.meta.pagination.total;
                    state.pagination.pageCount = response.meta.pagination.pageCount;
                    state.pagination.page = response.meta.pagination.page;
                }
            });
    },
});

function productPending(state: IInitialState) {
    state.loadingProduct = true;
    state.showProductModal = true;
}

function productReject(state: IInitialState) {
    state.loadingProduct = false;
    state.showProductModal = false;
}

type TAction = PayloadAction<
    IProductResponse | AxiosError<unknown, any>,
    string,
    {
        arg: number;
        requestId: string;
        requestStatus: 'fulfilled';
    },
    never
>;

function productFulfilled(state: IInitialState, action: TAction) {
    state.loadingProduct = false;

    const product = action.payload;

    if (!isAxiosError(product)) {
        state.product = product.data;
    }
}

export default productSlice.reducer;
export const { hideProductModal } = productSlice.actions;
