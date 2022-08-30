import react from "@vitejs/plugin-react";
import path from "path";
// import px2rem from "postcss-px2rem";
import postCssPxToViewport from "postcss-px-to-viewport-8-plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: process.env.NODE_ENV === "production" ? "./" : "./",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postCssPxToViewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          // exclude: [],
          landscape: false // 是否处理横屏情况
        })

        // px2rem({
        //   remUnit: 75,
        //   remPrecision: 8
        // })
      ]
    }
  },
  server: {
    host: "0.0.0.0",
    port: 9600,
    cors: true,
    open: true,
    // 反向代理
    proxy: {
      [process.env.VITE_APP_BASE_API]: {
        target: process.env.VITE_APP_BASE_API_URL,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VITE_APP_BASE_API}`]: ""
        }
      }
    }
  },
  resolve: {
    // 设置别名，同时要在alias.json 中添加对应的路径
    alias: [{
      find: "@",
      replacement: path.resolve(__dirname, "src")
    }, {
      find: "component",
      replacement: path.resolve(__dirname, "src/component")
    }]
  }
}));
