import fs from 'node:fs'

export default defineEventHandler(async (event: any) => {
    const query = getQuery(event)
    const imagePath = query.photo as string

    const regex = /^\.\/assets\/avatars\/([a-zA-Z0-9\s_-]+)\.png$/;
    const match = imagePath.match(regex) && imagePath.split('/').length === 4;

    if (match) {
        const image = fs.readFileSync(imagePath)
        event.node.res.setHeader('Content-Type', 'image/png')
        event.node.res.write(Buffer.from(image))
        event.node.res.end()
    } else {
        event.node.res.statusCode = 400;
        event.node.res.end('Invalid Avatar Path');
    }


})