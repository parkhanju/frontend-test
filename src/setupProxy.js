const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://52.91.229.74:8080",
      changeOrigin: true,
    })
  );
};
