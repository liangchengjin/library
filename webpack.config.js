let path = require("path");
let webpack = require("webpack");
let libraryName = "sparrow";

let config = {
    entry:path.resolve(__dirname, "./src/index.js"),
    output:{
        path:path.resolve(__dirname, "./lib"),
        filename:libraryName+'.js',
        // 配置打包成umd
        library:libraryName,
        libraryTarget:'umd',
        umdNamedDefine:true

    },

    "devtool":'cheap-source-map',
    // webpack几个小配置
    resolve:{
        extension:['.js', '.css', '.json'],
        root:path.resolve('./src')
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}
module.exports = config;
