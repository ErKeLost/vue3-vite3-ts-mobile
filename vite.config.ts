import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import { resolvePath } from './src/utils/utils'

// https://vitejs.dev/config/
const vitePath = resolvePath('../../../', import.meta.url)
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: `${pathResolve('types')}/`
      },
      {
        find: '@',
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        // presetTagify({
        //   // prefix: 'un-'
        // })
      ]
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`)
      },
      scale: 1,
      defaultClass: 'inline-block',
      autoInstall: true
    }),
    Components({
      dts: './types/components.d.ts',
      extensions: ['vue', 'tsx'],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
      // imports 指定组件所在位置，默认为 src/components
      dirs: ['src/components/', 'src/layout/', 'src/views', 'src/assets'],
      resolvers: [
        // IconsResolver({
        //   enabledCollections: ['a']
        // }),
        VantResolver(),
        IconsResolver({
          customCollections: ['custom'],
          componentPrefix: 'icon'
        }),
        VueUseComponentsResolver()
      ]
    }),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      // imports: ['vue', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      imports: ['vue', 'vue/macros', 'vue-router', 'pinia', '@vueuse/core'],
      dirs: ['src/composables', 'src/utils'],
      // Auto import for all module exports under directories
      // dirs: [
      //   // './hooks',
      //   // './composables'
      //   // ...
      // ],

      eslintrc: {
        // enabled: true, // Default `false`
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // resolvers: [ElementPlusResolver()]
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    })
  ]
})
