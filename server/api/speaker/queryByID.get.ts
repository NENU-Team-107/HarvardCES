import { keynoteSpeaker, speakerToKind } from "~/lib/data"
import type { ApiResponse } from "~/lib/model"

export default defineEventHandler(async (event: any) => {
    const query = getQuery(event)

    const id = Number.parseInt(query.id as string)
    const kind = speakerToKind.get(query.name as string)

    if (kind === "Keynote Speakers") {
        const result = keynoteSpeaker.find(speaker => speaker.id === id)
        if (result !== undefined) {

            const data: ApiResponse = {
                'status': 'Success',
                'data': result,
            }
            return data
        } else {
            const data: ApiResponse = {
                'status': 'Error',
                'data': null,
            }
            return data
        }
    }
})
