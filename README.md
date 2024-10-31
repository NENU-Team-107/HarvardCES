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

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.




## ddl写的

DevTools开启的时候好像非常卡，样式什么的加载的好慢，所以我关掉了。

调整之后TailwindCSS可以兼容插件。

主要读一下Nuxt关于Route部分的文档，pages文件夹下的文件会自动生成路由，这个Nuxt的路由是基于文件的，所以不需要配置路由，只需要在pages文件夹下创建文件即可，关于动态路由的参数看官方文档应该就能看懂。

关于Nuxt的Layout，可以在layouts文件夹下创建文件，然后在页面文件中使用layout属性指定使用的layout，如果不指定layout，那么就会使用默认的layout，也就是default.vue，我写了一个粗略的default.vue，打算用来做首页的layout。