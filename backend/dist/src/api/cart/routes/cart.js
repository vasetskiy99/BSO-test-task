"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/cart',
            handler: 'cart.cart',
        },
        {
            method: 'POST',
            path: '/cart/add',
            handler: 'cart.add',
        },
        {
            method: 'POST',
            path: '/cart/remove',
            handler: 'cart.remove',
        }
    ]
};
