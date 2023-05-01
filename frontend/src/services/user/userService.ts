import { AxiosError } from 'axios';

import { API } from '@services/base';

export interface IUser {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IAuthResponse {
    jwt: string;
    user: IUser;
}

export interface IAuthError {
    error?: {
        status: number;
        name: string;
        message: string;
    };
}

class AuthService {
    static async getMyAccount(): Promise<IUser | AxiosError<IAuthError>> {
        return await API.get<IUser>('/api/users/me', { params: { populate: '*' } })
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError<IAuthError>) => {
                return error;
            });
    }

    static async login(identifier: string, password: string): Promise<IAuthResponse | AxiosError<IAuthError>> {
        return await API.post<IAuthResponse>(
            '/api/auth/local',
            {
                identifier,
                password,
            },
            { withCredentials: false }
        )
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError<IAuthError>) => {
                return error;
            });
    }

    static async register(
        username: string,
        email: string,
        password: string
    ): Promise<IAuthResponse | AxiosError<IAuthError>> {
        return await API.post<IAuthResponse>(
            '/api/auth/local/register',
            {
                email,
                username,
                password,
            },
            { withCredentials: false }
        )
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError<IAuthError>) => {
                return error;
            });
    }
}

export { AuthService };
