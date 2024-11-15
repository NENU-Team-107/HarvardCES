from node:22.11.0 as build-stage

run mkdir -p /app
workdir /app

copy . /app

run npm install pnpm -g

run pnpm install && \
    pnpm build && \
    pnpm cache clean --force

run rm -rf ./node_modules

from node:22.11.0 as run-stage

run mkdir -p /app && npm install pnpm -g
workdir /app

copy --from=build-stage /app/.output /app/.output
copy ./assets /app/assets
copy ./package.json /app/

env PORT=3000

expose 3000

entrypoint ["pnpm", "start"]
