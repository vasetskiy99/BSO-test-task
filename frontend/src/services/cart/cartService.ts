import { AxiosError } from 'axios';

import { API } from '@services/base';
import { IProduct } from '@services/products/productsService';

class CartService {
    static async getCart(): Promise<Array<IProduct> | AxiosError> {
        return await API.get<Array<IProduct>>('/api/cart')
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError) => {
                return error;
            });
    }
    static async cartAdd(id: number): Promise<Array<IProduct> | AxiosError> {
        return await API.post<Array<IProduct>>('/api/cart/add', { id })
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError) => {
                return error;
            });
    }

    static async cartRemove(id: number): Promise<Array<IProduct> | AxiosError> {
        return await API.post<Array<IProduct>>('/api/cart/remove', { id })
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError) => {
                return error;
            });
    }
}

export { CartService };
