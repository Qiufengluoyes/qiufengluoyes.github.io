import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  social: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  sitemap: {
    hostname: 'https://feng1026.top', //替换为你自己的域名
  },
  title: "枫落丰源's Blog",
  description: "Hello, Sensei !",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "枫落丰源's Blog",
    welcomeText: 'Hello, Sensei !',
    motto: ['和你的日常，就是奇迹', '何気ない日常で、ほんの少しの奇跡を見つける物語。'],
    social: [
      { icon: 'github', url: 'https://github.com/Qiufengluoyes' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/1735270180' },
      { icon: 'qq', url: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=435900598&website=www.oicqzone.com' },
      { icon: 'status', url: 'https://status.feng1026.top/' },
      { icon: 'metro', url: 'https://www.travellings.cn/plain.html' },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'jp',

    //footer配置
    footerName: '枫落丰源 本站内容遵循 CC BY-NC-SA 4.0 协议',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Actions', url: 'https://docs.github.com/zh/actions' },
      { name: 'Vercel', url: 'https://vercel.com/' },
    ],

    //gitalk配置
    clientID: 'Ov23liO0iQaATau6273r',
    clientSecret: '9edeed8be04ba35d3ea08ba05364983c9618fc9c',
    repo: 'qiufengluoyes.github.io',
    owner: 'Qiufengluoyes',
    admin: ['Qiufengluoyes'],
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
