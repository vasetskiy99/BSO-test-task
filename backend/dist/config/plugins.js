module.exports = ({ env }) => ({
    transformer: {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
            requestTransforms: {
                wrapBodyWithDataKey: true,
            },
            hooks: {
                preResponseTransform: (ctx) => console.log("hello from the preResponseTransform hook!"),
                postResponseTransform: (ctx) => console.log("hello from the postResponseTransform hook!"),
            },
        },
    },
    io: {
        enabled: true,
        config: {
            IOServerOptions: {
                cors: { origin: "*", methods: ["GET"] },
            },
            contentTypes: {
                message: "*",
                chat: ["create"],
            },
            events: [
                {
                    name: "connection",
                    handler: ({ strapi }, socket) => {
                        strapi.log.info(`[io] new connection with id ${socket.id}`);
                    },
                },
            ],
        },
    },
});
