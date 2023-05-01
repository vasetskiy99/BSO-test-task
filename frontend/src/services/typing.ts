export interface ICollectionResponse<T> {
    data: Array<T>;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface IOneResponse<T> {
    data: T;
}

export interface IImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
        thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: null;
            url: string;
        };
        large: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: null;
            url: string;
        };
        medium: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: null;
            url: string;
        };
        small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            width: number;
            height: number;
            size: number;
            path: null;
            url: string;
        };
    };
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
}
