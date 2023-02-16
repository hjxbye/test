module.exports = {
  devServer: {
    // host: "localhost",
    // port: 8080,
    open: true,
    //设置代理
    proxy: {
      "/api": {
        target: "http://1.116.64.64:5004/api2/",
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
// module.exports = {
//   lintOnSave:false,
//   devServer:{
//     open:turn,
//     proxy:{
//       'api':{
//         target:'http://1.116.64.64:5004/api2/',
//         changeOrigin:turn,
//         pathRewrite:{
//           '^/api':''
//         }
//       }
//     }
//   }
// }
