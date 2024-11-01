# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```


## ddl写的

DevTools开启的时候好像非常卡，样式什么的加载的好慢，所以我关掉了。

调整之后TailwindCSS可以兼容插件。

主要读一下Nuxt关于Route部分的文档，pages文件夹下的文件会自动生成路由，这个Nuxt的路由是基于文件的，所以不需要配置路由，只需要在pages文件夹下创建文件即可，关于动态路由的参数看官方文档应该就能看懂。

关于Nuxt的Layout，可以在layouts文件夹下创建文件，然后在页面文件中使用layout属性指定使用的layout，如果不指定layout，那么就会使用默认的layout，也就是default.vue，我写了一个粗略的default.vue，打算用来做首页的layout。


## 关于首页的布局

### 导航栏

条目为: 
- 首页
- 论坛介绍
	- 论坛背景
	- 论坛日程
	- 论坛地点
- 嘉宾
	- 特邀嘉宾
	- 演讲者
- 关于我们
	- 哈佛大学
	- 香港教育大学
- 论文征稿
	- workshop：工作室，
	- poster：海报，
	- track：？

### 首页背景颜色

使用固定的信纸，链接为 [Letterhead_rainbowWhiteSnow.png](https://uedhk-my.sharepoint.com/:i:/r/personal/yyin_eduhk_hk/Documents/ResearchEDU/02_Reseach%20Collaborations/Prof%20Wang%20Research%20Team/6.%20JointSyposium/Materials%20for%20Joint%20Symposium%27s%20Website/Publicity%20logos+Letter%20head+%20Rainbow%20Decoration/Letterhead_rainbowWhiteSnow.png?csf=1&web=1&e=zs16zQ)

### 首页封面图（也就是会议的主题海报）

不需要管，等做好了图片直接贴上就可以

### 首页的页脚

分为两栏，左边一栏可以

```plaintext
公眾號請關注：Harvard CES-EdUHK

小紅書請關注：哈佛CES 香港教大聯合論壇

詳情請諮詢：GIETfuture@eduhk.hk
```


## Model Defination

```ts
type SpeakerBio = {
    [lang: string] : {
        description: string,
        title: string | undefined
        link: string | undefined
    } 
}

type Speaker = {
    name: string
    kind: string
    photo: string
    bio: SpeakerBio
    activateDate: Date
}

type NewsItem = {
    title: string
    content: string
    link: string | undefined
}
```
