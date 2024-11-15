import fs from "node:fs"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const t = await useTranslation(event)

    const filePath = t(query.path as string)


    try {
        const pdf = fs.readFileSync(filePath)
        event.node.res.setHeader('Content-Type', 'application/pdf')
        event.node.res.write(Buffer.from(pdf))
        event.node.res.end()
    } catch (err) {
        event.node.res.statusCode = 404
    }

});
