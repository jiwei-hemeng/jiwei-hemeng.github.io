module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: 'ES6',
        link: '/ES6.md'
      },
      {
        text: '闭包',
        link: '/closure.md'
      },
      {
        text: '继承',
        link: '/extends.md'
      },
      {
        text: '网络请求',
        link: '/network.md'
      },
      {
        text: 'Vue',
        ariaLabel: 'Vue',
        items: [{
            text: 'vue',
            link: '/vue.md'
          }, {
            text: 'Vuex',
            link: '/vuex.md'
          },
          {
            text: 'Vue3.0',
            link: '/vue3.0.md'
          },
          {
            text: 'uniApp',
            link: '/uni-app.md'
          },
        ]
      },
      {
        text: 'React',
        ariaLabel: 'React',
        items: [{
            text: 'React',
            link: '/react.md'
          },
          {
            text: 'ReactRedux',
            link: '/react-redux.md'
          },
          {
            text: '可视区域渲染',
            link: '/React-virtualized.md'
          },
        ]
      },
      {
        text: '工具',
        ariaLabel: '工具',
        items: [{
            text: 'Git',
            link: '/Git.md'
          }, {
            text: 'webpack',
            link: '/webpack.md'
          }, {
            text: 'moment',
            link: '/moment.md'
          },
          {
            text: 'mysql',
            link: '/mysql.md'
          },
        ]
      },
      {
        text: 'webSocket',
        link: '/websocket.md'
      },
      {
        text: 'Node',
        link: '/nodejs.md'
      },
    ],
    sidebar: 'auto'
  },
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top']
}