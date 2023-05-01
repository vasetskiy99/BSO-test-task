import { Button, Modal } from 'react-bootstrap';

import { Preloader } from '@components/Preloader/Preloader';
import { BASE_URL } from '@services/base';
import { useAppDispatch, useAppSelector } from '@store/hooks/hooks';
import { hideProductModal } from '@store/slices/product/product';

export const ProductModal = () => {
    const dispatch = useAppDispatch();

    const { loadingProduct, product, showProductModal } = useAppSelector(reducer => reducer.product);

    return (
        <Modal show={showProductModal} onHide={() => dispatch(hideProductModal())}>
            <Modal.Header closeButton>
                <Modal.Title>Смартфон</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loadingProduct ? (
                    <Preloader />
                ) : (
                    <>
                        <img className="product-card__image" src={BASE_URL + product?.image?.url} />
                        <div className="product-card__title">{product?.title}</div>
                        <div className="product-card__price">{product?.price} $</div>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => dispatch(hideProductModal())}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
