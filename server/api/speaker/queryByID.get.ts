import { guestOfHonor, keynoteSpeaker, organizingCommittee, speakerToKind } from "~/lib/data"
import type { ApiResponseWithSpeaker } from "~/lib/model"

export default defineEventHandler(async (event: any) => {
    const query = getQuery(event)

    const id = Number.parseInt(query.id as string)
    const kind = speakerToKind.get(id)

    let data: ApiResponseWithSpeaker = {
        status: "Error",
        data: null
    }

    switch (kind) {
        case "Keynote Speakers":
            {
                const result = keynoteSpeaker.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
            }
            break
        case "Organizing Committee":
            {
                const result = organizingCommittee.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
                console.log(data)
            }
            break
        case "Guest of Honor":
            {
                const result = guestOfHonor.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
            }
            break
    }
    return data
})
