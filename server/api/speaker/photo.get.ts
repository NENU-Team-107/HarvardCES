import fs from 'node:fs'
import path from 'node:path'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)
    const imagePath = query.photo as string

    if (!imagePath) {
        event.node.res.statusCode = 400
        event.node.res.end('No Avatar Path Provided')
        return
    }

    // 修正正则：允许路径为 `avatars/文件名.png`，且文件名支持空格、特殊字符
    const regex = /^avatars\/([a-zA-Z0-9\s_\-\\.]+)\.png$/i
    const match = imagePath.match(regex)

    if (match) {
        try {
            // 拼接实际文件路径（假设文件存储在项目根目录的 `public/avatars/` 下）
            const fullPath = path.join(process.cwd(), 'public', imagePath)

            // 检查文件是否存在
            if (!fs.existsSync(fullPath)) {
                event.node.res.statusCode = 404
                event.node.res.end('File Not Found')
                return
            }

            const image = fs.readFileSync(fullPath)
            event.node.res.setHeader('Content-Type', 'image/png')
            event.node.res.end(image)
        } catch {
            event.node.res.statusCode = 500
            event.node.res.end('Internal Server Error')
        }
    } else {
        event.node.res.statusCode = 400
        event.node.res.end('Invalid Avatar Path')
    }
})