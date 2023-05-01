import { Toast, ToastContainer } from 'react-bootstrap';

import { useEventChangeData } from 'src/hooks/useEventChangeData';

export const CollectionUpdateToast = () => {
    const { message, setMessage } = useEventChangeData();

    return (
        <ToastContainer position="top-end" containerPosition="absolute">
            <Toast bg="Light" onClose={() => setMessage(undefined)} show={!!message} delay={3000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Уведомление</strong>
                    <small>сейчас</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};
