import { useState } from 'react';

import { io } from 'socket.io-client';

export const useEventChangeData = () => {
    const [message, setMessage] = useState<string>();

    const SERVER_URL = 'http://localhost:1337';
    const socket = io(SERVER_URL);

    socket.on('connect', () => {
        console.log('connect');

        socket.on('create product', data => {
            setMessage('Был добавлен новый товар: ' + data);
        });

        socket.on('update product', data => {
            setMessage('Был изменен товар: ' + data);
        });

        socket.on('delete product', data => {
            setMessage('Был удален товар: ' + data);
        });
    });

    return { message, setMessage };
};
