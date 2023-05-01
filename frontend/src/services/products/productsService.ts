import { AxiosError } from 'axios';

import { API } from '@services/base';
import { ICollectionResponse, IImage, IOneResponse } from '@services/typing';

export interface IProduct {
    id: number;
    title: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: IImage;
    inCart?: boolean;
}

export type IProductsResponse = ICollectionResponse<IProduct>;
export type IProductResponse = IOneResponse<IProduct>;

class ProductsService {
    static async getProducts(page: number): Promise<IProductsResponse | AxiosError> {
        return await API.get<IProductsResponse>('/api/products', {
            params: { populate: '*', 'pagination[page]': page, 'pagination[pageSize]': 8 },
        })
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError) => {
                return error;
            });
    }
    static async getProductById(id: number): Promise<IProductResponse | AxiosError> {
        return await API.get<IProductResponse>('/api/products/' + id, { params: { populate: '*' } })
            .then(value => {
                return value.data;
            })
            .catch((error: AxiosError) => {
                return error;
            });
    }
}

export { ProductsService };
