// /**
//  *  项目配置项
//  */
// // const path = require("path");

// // const resolve = (dir) => path.join(__dirname, dir);


// // const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

// // console.log(IS_PROD, "========");
// module.exports = {
//     // publicPath: "./",

//     // outputDir: "dist", // 打包后的目录

//     // assetsDir: "static", //静态资源文件目录

//     // lintOnSave: true, // 保存进行自动检查esline

//     // productionSourceMap: false, // 加速构建打包块

//     devServer: {
//         port: "9091", // 浏览器打开端口

//         open: true, // 自动打开浏览器

//         proxy: {
//             // 配置跨域
//             "/api": {
//                 target: "", // 代理请求地址

//                 changOrigin: true, // 开启跨域

//                 pathRewrite: {
//                     "^/api/": "/",
//                 },
//             },
//         },
//     },

//     // css: {
//     //     extract: IS_PROD, //是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。

//     //     sourceMap: false,

//     //     loaderOptions: {
//     //         scss: {},
//     //     },
//     // },

//     // configureWebpack: (config) => {
//     //     console.log(config)
//     //     if (IS_PROD) {
//     //         console.log("生产环境");
//     //     } else {
//     //         console.log("开发环境");
//     //     }
//     // },

//     // chainWebpack: (config) => {
//     //     // 别名 alias
//     //     config.resolve.alias
//     //         .set("@", resolve("src"))
//     //         .set("assets", resolve("src/assets"))
//     //         .set("api", resolve("src/api"))
//     //         .set("views", resolve("src/views"))
//     //         .set("components", resolve("src/components"));
//     // }
// };
