import fs from 'node:fs'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const image = fs.readFileSync(query.photo as string)
    event.node.res.setHeader('Content-Type', 'image/png')
    event.node.res.write(Buffer.from(image))
    event.node.res.end()
})