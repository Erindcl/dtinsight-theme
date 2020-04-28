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
            开发前必读: 0,
            颜色规范: 1,
            字体规范: 2,
            Components: 3,
            更新日志: 4
        },
        typeOrder: {}
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