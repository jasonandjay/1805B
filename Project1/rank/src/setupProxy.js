const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware ('/api',{
            "target": "http://47.92.71.239",
            "pathRewrite": {
                // "^/api": "/"
            },
            changeOrigin: true,
        })
    );
};