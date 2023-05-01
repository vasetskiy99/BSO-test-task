import { Col, Container, Row } from 'react-bootstrap';

import Pagination from '@components/Pagination/Pagination';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { ProductModal } from '@components/ProductModal/ProductModal';
import { useAppSelector } from '@store/hooks/hooks';

export const HomePage = () => {
    const { products, pagination, product } = useAppSelector(reducer => reducer.product);
    const { cart } = useAppSelector(reducer => reducer.cart);

    return (
        <Container>
            <Row xs={1} sm={2} lg={4}>
                {products.map(product => (
                    <Col key={product.id} className="p-2">
                        <ProductCard product={product} key={product.id} cart={cart} />
                    </Col>
                ))}
            </Row>
            <Pagination {...pagination} />
            <ProductModal />
        </Container>
    );
};
