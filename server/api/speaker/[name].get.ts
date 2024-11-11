import { keynoteSpeaker } from "~/lib/data"

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const t = await useTranslation(event)
    if (query.kind === "Keynote Speakers") {
        const result = keynoteSpeaker.find(speaker => speaker.name === query.name)
        if (result === undefined) {
            return {
                'status': 'Error',
                'message': 'Speaker not found',
            }
        } else {
            result.bio.details.description = t(result.bio.details.description)
            result.name = t(result.name)
            result.bio.details.title = t(result.bio.details.title)
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
    }
})