import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BASE_URL } from '@services/base';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { cartRemoveAsync } from '@store/slices/cart/cart';
import { RoutesPath } from '@utils/routes-path';

import Like from './../assets/icons/like.svg';

export const CartPage = () => {
    const { cart } = useAppSelector(reducer => reducer.cart);
    const dispatch = useAppDispatch();

    return (
        <Container>
            {Object.values(cart).length > 0 ? (
                Object.values(cart).map(product => (
                    <div className="cart-card mb-3">
                        <img className="cart-card__image m-3" src={BASE_URL + product.image?.url} />
                        <div className="cart-card__title m-3">{product.title}</div>
                        <div className="cart-card__price m-3">{product.price} $</div>
                        <img
                            className="cart-card__like m-3"
                            onClick={() => dispatch(cartRemoveAsync(product.id))}
                            src={Like}
                        />
                    </div>
                ))
            ) : (
                <Link to={`/${RoutesPath.Home}`} className="d-flex justify-content-center m-5 cart-card__empty-link">
                    Добавить товар
                </Link>
            )}
        </Container>
    );
};
