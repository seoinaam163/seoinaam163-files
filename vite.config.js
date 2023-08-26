import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import path from 'path'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    // 项目插件
    plugins: [
      vue(),
     // 注册所有的svg文件生成svg雪碧图
      // createSvgIconsPlugin({
      //   iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")], // icon存放的目录
      //   symbolId: "icon-[name]", // symbol的id
      //   inject: "body-last", // 插入的位置
      //   customDomId: "__svg__icons__dom__" // svg的id
      // }),
    ],
    // 基础配置
    base: './',
    publicDir: 'public',
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            '@border-color-base': '#dce3e8',
          },
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      brotliSize: false,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境去除console及debug
          drop_console: false,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
            manualChunks(id) {  
                if (id.includes("node_modules")) {
                    return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
		        }
            }
        }
      }
    },
  }
})


