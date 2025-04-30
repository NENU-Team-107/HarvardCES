import fs from "node:fs"
import { useI18n } from 'vue-i18n';
import type { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    const { t } = useI18n();

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
    } catch {
        event.node.res.statusCode = 404
    }

});
