import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '@services/base';
import { IProduct } from '@services/products/productsService';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { cartAddAsync, cartRemoveAsync } from '@store/slices/cart/cart';
import { productByIdAsync } from '@store/slices/product/product';
import { RoutesPath } from '@utils/routes-path';

import LikeEmpty from './../../assets/icons/like-empty.svg';
import Like from './../../assets/icons/like.svg';

interface ProductCard {
    product: IProduct;
    cart: Record<string, IProduct>;
}

const ProductCard = (props: ProductCard) => {
    const { product, cart } = props;
    const { isLogin } = useAppSelector(reducer => reducer.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const likeClickHandler: MouseEventHandler<HTMLImageElement> = event => {
        event.stopPropagation();

        if (!isLogin) return navigate(`/${RoutesPath.Login}`);

        if (cart[product.id]) {
            dispatch(cartRemoveAsync(product.id));
        } else {
            dispatch(cartAddAsync(product.id));
        }
    };

    return (
        <div
            className="product-card shadow mb-3 bg-body rounded"
            onClick={() => dispatch(productByIdAsync(product.id))}
        >
            <img className="product-card__image" src={BASE_URL + product.image.url} />
            <div className="product-card__title">{product.title}</div>
            <div className="product-card__price">{product.price} $</div>
            <img className="product-card__like" onClick={likeClickHandler} src={cart[product.id] ? Like : LikeEmpty} />
        </div>
    );
};

export { ProductCard };
