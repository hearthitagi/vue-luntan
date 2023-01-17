// vue.config.js for less-loader@6.0.0
module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#000',
                        'link-color': '#000',
                        'border-radius-base': '3px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    devServer: {
        open: true,
        // 配置代理
        proxy: {
            //天亮api
            "/baseApi": {
                target: "https://showme2.myhope365.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/baseApi': ''
                }
            },
            //我的阿里云服务器
            "/recreyed": {
                target: "http://59.110.124.95:3000",
                changeOrigin: true,
                pathRewrite: {
                    '^/recreyed': ''
                }
            },
            //网易云api
            "/music-api": {
                target: "http://59.110.124.95:3001",
                changeOrigin: true,
                pathRewrite: {
                    '^/music-api': ''
                }
            },
            //急速api
            "/jiSuApi": {
                target: "https://api.jisuapi.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/jiSuApi': ''
                }
            },
            //聚合api
            "/juHeApi": {
                target: "http://v.juhe.cn",
                changeOrigin: true,
                pathRewrite: {
                    '^/juHeApi': ''
                }
            },
            //uomgApi
            "/uOmgApi": {
                target: "https://api.uomg.com/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/uOmgApi': ''
                }
            },
            //rollApi
            "/rollApi": {
                target: "https://www.mxnzp.com/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/rollApi': ''
                }
            },
        },

    },
};