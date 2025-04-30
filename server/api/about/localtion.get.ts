import fs from 'node:fs'

export default defineEventHandler(async (event) => {
    const image = fs.readFileSync('./assets/img/maplocation.png')
    event.node.res.setHeader('Content-Type', 'image/png')
    event.node.res.write(Buffer.from(image))
    event.node.res.end()
});