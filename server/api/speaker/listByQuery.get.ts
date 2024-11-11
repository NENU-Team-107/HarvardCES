import { keynoteSpeaker } from '~/lib/data';
export default defineEventHandler(async (event) => {
    // TODO read from database by query
    const query = getQuery(event)
    const t = await useTranslation(event)


    if (query.kind === "Keynote Speakers") {
        const result = keynoteSpeaker
        result.forEach(speaker => {
            speaker.name = t(speaker.name);
            speaker.bio.details.description = t(speaker.bio.details.description);
            speaker.bio.details.title = t(speaker.bio.details.title);
        })
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
    } else {
        const data = {
            'status': 'Error',
            'data': null,

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