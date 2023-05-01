"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async cart(ctx, next) {
        var _a;
        const { id } = ctx.state.user;
        try {
            const cart = (_a = (await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { id }, populate: { carts: true } })).carts) === null || _a === void 0 ? void 0 : _a.map((el) => el.id);
            ctx.send(await strapi.entityService.findMany("api::product.product", {
                filters: {
                    id: {
                        $in: cart,
                    },
                },
                populate: { image: true },
            }));
        }
        catch (err) {
            return ctx.badRequest(err.message);
        }
    },
    async add(ctx, next) {
        var _a;
        const { id } = ctx.state.user;
        const productId = ctx.request.body.data.id;
        if (productId) {
            ctx.notFound();
        }
        try {
            const product = await strapi.entityService.findOne("api::product.product", productId);
            if (!product) {
                return ctx.notFound();
            }
            const record = await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { id }, populate: { carts: true } });
            await strapi.entityService.update("plugin::users-permissions.user", record.id, {
                populate: { carts: true },
                data: {
                    carts: {
                        connect: [product.id],
                    },
                },
            });
            const carts = (_a = (await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { id }, populate: { carts: true } })).carts) === null || _a === void 0 ? void 0 : _a.map((el) => el.id);
            ctx.send(await strapi.entityService.findMany("api::product.product", {
                filters: {
                    id: {
                        $in: carts,
                    },
                },
                populate: { image: true },
            }));
        }
        catch (err) {
            return ctx.badRequest(err.message);
        }
    },
    async remove(ctx, next) {
        var _a;
        const { id } = ctx.state.user;
        const productId = ctx.request.body.data.id;
        if (productId) {
            ctx.notFound();
        }
        try {
            const product = await strapi.entityService.findOne("api::product.product", productId);
            if (!product) {
                return ctx.notFound();
            }
            const record = await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { id }, populate: { carts: true } });
            await strapi.entityService.update("plugin::users-permissions.user", record.id, {
                populate: { carts: true },
                data: {
                    carts: {
                        disconnect: [product.id],
                    },
                },
            });
            const carts = (_a = (await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { id }, populate: { carts: true } })).carts) === null || _a === void 0 ? void 0 : _a.map((el) => el.id);
            ctx.send(await strapi.entityService.findMany("api::product.product", {
                filters: {
                    id: {
                        $in: carts,
                    },
                },
                populate: { image: true },
            }));
        }
        catch (err) {
            return ctx.badRequest(err.message);
        }
    },
};
