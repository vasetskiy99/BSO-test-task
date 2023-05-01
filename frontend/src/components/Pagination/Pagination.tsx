import { Pagination as BootstrapPagination } from 'react-bootstrap';

import { useAppDispatch } from '@store/hooks/hooks';
import { productsAsync } from '@store/slices/product/product';

interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

function Pagination(props: IPagination) {
    const { page, pageCount } = props;

    const dispatch = useAppDispatch();

    const handlePageChange = (page: number) => {
        dispatch(productsAsync(page));
    };

    return (
        <BootstrapPagination className="mt-3 justify-content-center">
            <BootstrapPagination.Prev disabled={page <= 1} onClick={() => handlePageChange(page - 1)} />
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(pageNumber => (
                <BootstrapPagination.Item
                    key={pageNumber}
                    active={pageNumber === page}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </BootstrapPagination.Item>
            ))}
            <BootstrapPagination.Next disabled={page >= pageCount} onClick={() => handlePageChange(page + 1)} />
        </BootstrapPagination>
    );
}

export default Pagination;
