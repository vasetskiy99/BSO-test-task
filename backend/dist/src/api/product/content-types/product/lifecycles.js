module.exports = {
    async afterCreate(result, data) {
        var _a, _b;
        await ((_a = strapi === null || strapi === void 0 ? void 0 : strapi.$io) === null || _a === void 0 ? void 0 : _a.raw("create product", (_b = result === null || result === void 0 ? void 0 : result.result) === null || _b === void 0 ? void 0 : _b.title));
    },
    async afterUpdate(result, params, data) {
        var _a, _b, _c, _d, _e;
        if ((_a = result === null || result === void 0 ? void 0 : result.result) === null || _a === void 0 ? void 0 : _a.publishedAt) {
            await ((_b = strapi === null || strapi === void 0 ? void 0 : strapi.$io) === null || _b === void 0 ? void 0 : _b.raw("update product", (_c = result === null || result === void 0 ? void 0 : result.result) === null || _c === void 0 ? void 0 : _c.title));
        }
        else {
            await ((_d = strapi === null || strapi === void 0 ? void 0 : strapi.$io) === null || _d === void 0 ? void 0 : _d.raw("delete product", (_e = result === null || result === void 0 ? void 0 : result.result) === null || _e === void 0 ? void 0 : _e.title));
        }
    },
    async afterDelete(result, params) {
        var _a, _b;
        await ((_a = strapi === null || strapi === void 0 ? void 0 : strapi.$io) === null || _a === void 0 ? void 0 : _a.raw("delete product", (_b = result === null || result === void 0 ? void 0 : result.result) === null || _b === void 0 ? void 0 : _b.title));
    },
};
