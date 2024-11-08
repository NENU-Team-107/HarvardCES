import { speakers } from "~/lib/placeholder"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const t = await useTranslation(event)
    const result = speakers.find(speaker => speaker.name === query.name)
    if (result === undefined) {
        return {
            'status': 'Error',
            'message': 'Speaker not found',
        }
    } else {
        result.bio.details.description = t('server.bio' + result.name)
        const data = {
            'status': 'Success',
            'data': result,
            toJSON() {
                return {
                    'status': this.status,
                    'data': this.data
                }
            }
        }
        return data
    }
})