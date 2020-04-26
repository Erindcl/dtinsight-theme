const path = require('path');

module.exports = {
    source: {
        components: './components',
        docs: './docs',
    },
    output: './dist',
    theme: './theme',
    htmlTemplate: path.join(__dirname, './theme/static/template.html'),
    themeConfig: {
        categoryOrder: {
            接入指南: 1,
            Components: 2,
        },
        typeOrder: {
            基础接口: 2,
            扩展接口: 3,
        }
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    baseConfig: {
        // logo: 'https://coder.slowlog.cn/images/avatar.png?v=1566195794967',
        projectName: 'DTInsight-Theme',
        homeUrl: '/docs/react/getting-started-cn'
    }
};