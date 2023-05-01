export default {
  async cart(ctx, next) {
    const { id } = ctx.state.user;

    try {
      const cart = (
        await strapi
          .query("plugin::users-permissions.user")
          .findOne({ where: { id }, populate: { carts: true } })
      ).carts?.map((el) => el.id);
      ctx.send(
        await strapi.entityService.findMany("api::product.product", {
          filters: {
            id: {
              $in: cart,
            },
          },
          populate: { image: true },
        })
      );
    } catch (err) {
      return ctx.badRequest(err.message);
    }
  },
  async add(ctx, next) {
    const { id } = ctx.state.user;

    const productId = ctx.request.body.data.id;

    if (productId) {
      ctx.notFound();
    }

    try {
      const product = await strapi.entityService.findOne(
        "api::product.product",
        productId
      );

      if (!product) {
        return ctx.notFound();
      }

      const record = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id }, populate: { carts: true } });

      await strapi.entityService.update(
        "plugin::users-permissions.user",
        record.id,
        {
          populate: { carts: true },
          data: {
            carts: {
              connect: [product.id],
            },
          },
        }
      );

      const carts = (
        await strapi
          .query("plugin::users-permissions.user")
          .findOne({ where: { id }, populate: { carts: true } })
      ).carts?.map((el) => el.id);
      ctx.send(
        await strapi.entityService.findMany("api::product.product", {
          filters: {
            id: {
              $in: carts,
            },
          },
          populate: { image: true },
        })
      );
    } catch (err) {
      return ctx.badRequest(err.message);
    }
  },
  async remove(ctx, next) {
    const { id } = ctx.state.user;

    const productId = ctx.request.body.data.id;

    if (productId) {
      ctx.notFound();
    }

    try {
      const product = await strapi.entityService.findOne(
        "api::product.product",
        productId
      );

      if (!product) {
        return ctx.notFound();
      }

      const record = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id }, populate: { carts: true } });

      await strapi.entityService.update(
        "plugin::users-permissions.user",
        record.id,
        {
          populate: { carts: true },
          data: {
            carts: {
              disconnect: [product.id],
            },
          },
        }
      );

      const carts = (
        await strapi
          .query("plugin::users-permissions.user")
          .findOne({ where: { id }, populate: { carts: true } })
      ).carts?.map((el) => el.id);
      ctx.send(
        await strapi.entityService.findMany("api::product.product", {
          filters: {
            id: {
              $in: carts,
            },
          },
          populate: { image: true },
        })
      );
    } catch (err) {
      return ctx.badRequest(err.message);
    }
  },
};
