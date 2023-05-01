import { AxiosError, isAxiosError } from 'axios';

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService, IAuthError, IAuthResponse, IUser } from '@services/user/userService';
import { removeCurrentAccessToken, setCurrentAccessToken } from '@utils/getCurrentAccessToken';

interface IUserSlice {
    isLogin: boolean;
    loading: boolean;
    user?: IUser;
    error: {
        code?: number;
        message?: string;
    };
}

const initialState: IUserSlice = {
    isLogin: false,
    loading: false,
    error: {},
};

export type TUserLogin = { identifier: string; password: string };
export type TUserRegister = { email: string; username: string; password: string };

export const loginAsync = createAsyncThunk('user/login', async (data: TUserLogin) => {
    return await AuthService.login(data.identifier, data.password);
});

export const registerAsync = createAsyncThunk('user/register', async (data: TUserRegister) => {
    return await AuthService.register(data.username, data.email, data.password);
});

export const myAccountAsync = createAsyncThunk('user/me', async () => {
    return AuthService.getMyAccount();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state: IUserSlice) => {
            state.isLogin = false;
            removeCurrentAccessToken();
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginAsync.pending, asyncPending)
            .addCase(loginAsync.fulfilled, loginAndRegisterAsyncFulfilled)
            .addCase(loginAsync.rejected, asyncRejected)

            .addCase(registerAsync.pending, asyncPending)
            .addCase(registerAsync.fulfilled, loginAndRegisterAsyncFulfilled)
            .addCase(registerAsync.rejected, asyncRejected)

            .addCase(myAccountAsync.pending, asyncPending)
            .addCase(myAccountAsync.fulfilled, (state, action) => {
                state.loading = false;

                const response = action.payload;

                if (response instanceof AxiosError) {
                    state.error.code = response.response?.data?.error?.status;
                    state.error.message = response.response?.data?.error?.message;
                    state.isLogin = false;
                    removeCurrentAccessToken();
                } else {
                    state.isLogin = true;
                    state.user = response;
                }
            })
            .addCase(myAccountAsync.rejected, asyncRejected);
    },
});

type TAction = PayloadAction<
    IAuthResponse | AxiosError<IAuthError, unknown>,
    string,
    {
        arg: TUserLogin | TUserRegister;
        requestId: string;
        requestStatus: 'fulfilled';
    }
>;

function asyncPending(state: IUserSlice) {
    state.loading = true;
    state.isLogin = false;

    state.error.code = undefined;
    state.error.message = undefined;
}

function asyncRejected(state: IUserSlice) {
    state.loading = true;
    state.isLogin = false;

    state.error.code = -1;
    state.error.message = 'Unexpected error';
}

function loginAndRegisterAsyncFulfilled(state: IUserSlice, action: TAction) {
    state.loading = false;

    const response = action.payload;

    if (isAxiosError(response)) {
        state.error.code = response.response?.data?.error?.status;
        state.error.message = response.response?.data?.error?.message;
        state.isLogin = false;
    } else {
        state.isLogin = true;
        state.user = response.user;

        setCurrentAccessToken(response.jwt);
    }
}

export default authSlice.reducer;
export const { logout } = authSlice.actions;
