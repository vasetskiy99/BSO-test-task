module.exports = {
  async afterCreate(result, data) {
    await (strapi as any)?.$io?.raw("create product", result?.result?.title);
  },

  async afterUpdate(result, params, data) {
    if (result?.result?.publishedAt) {
        await (strapi as any)?.$io?.raw("update product", result?.result?.title);
    } else {
        await (strapi as any)?.$io?.raw("delete product", result?.result?.title);
    }

  },

  async afterDelete(result, params) {
    await (strapi as any)?.$io?.raw("delete product", result?.result?.title);
  },
};
