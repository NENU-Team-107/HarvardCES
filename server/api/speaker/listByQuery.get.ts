import { speakers } from './../../../lib/placeholder';
export default defineEventHandler(async (event) => {
    // TODO read from database by query
    const query = getQuery(event)
    const t = await useTranslation(event)
    const result = speakers.filter(speaker => speaker.kind === query.kind)
    // result.forEach(speakers => {
    //     speakers.bio.details.description = t('server.bio' + speakers.name)
    // })
    const data = {
        'status': 'Success',
        'data': result,

        toJSON() {
            return {
                'status': this.status,
                'data': [
                    ...this.data
                ]
            }
        }
    }
    return data
})