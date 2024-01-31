import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "青青子衿",
  description: "个人网站",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "vue学习资料", link: "/vue" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "vue新特性", link: "/vue" },
          { text: "vue 资料", link: "/vue2" },
          { text: "vuex 资料", link: "/vuex" },
          { text: "uniApp", link: "/uni-app" },
        ],
      },
    ],
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/jiwei-hemeng/summary/" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 诗和远方",
    },
  },
});
