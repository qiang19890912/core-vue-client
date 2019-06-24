const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    // configureWebpack: {
    //     module:{
    //         rules:[
    //             {
    //                 test: /\.svg$/,
    //                 loader: 'svg-sprite-loader',
    //                 include: [resolve('src/icons')],
    //                 options: {
    //                   symbolId: 'icon-[name]'
    //                 }
    //             }
    //         ]
    //     }
    // }
    chainWebpack: config => {


        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        //svgRule.uses.clear()

        // 添加要替换的 loader
        // config.module
        //     .rule('svg-sprite-loader').test(/\.svg$/)
        //     .include
        //     .add(resolve('src/icons'))
        //     .end()
        //     .use('svg-sprite-loader')
        //     .loader('svg-sprite-loader').options({
        //         symbolId: 'icon-[name]'
        //     })

        config.module
        .rule('svg')
        .exclude.add(resolve('src/icons/svg'))
        .end()

    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons/svg'))
		.end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })   

    }
}