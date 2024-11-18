import fs from "node:fs"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const t = await useTranslation(event)

    const filePath = t(query.path as string)
    const regex = /^\.\/assets\/poster\/([a-zA-Z0-9_-]+)\.pdf$/;
    const match = filePath.match(regex) && filePath.split('/').length === 4;

    try {
        if (match) {
            const pdf = fs.readFileSync(filePath)
            event.node.res.setHeader('Content-Type', 'application/pdf')
            event.node.res.write(Buffer.from(pdf))
            event.node.res.end()
        }
        else {
            event.node.res.statusCode = 400;
            event.node.res.end('Invalid PDF File Path');
        }
    } catch (err) {
        event.node.res.statusCode = 404
    }

});
