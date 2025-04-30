import { guestOfHonor, invitedSpeakers, keynoteSpeaker, organizingCommittee, speakerToKind } from "~/lib/data"
import type { ApiResponseWithSpeaker } from "~/lib/model"
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    const id = Number.parseInt(query.id as string)
    const kind = speakerToKind.get(id)

    const data: ApiResponseWithSpeaker = {
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
        case "Invited Speakers":
            {
                const result = invitedSpeakers.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
            }
            break

    }
    return data
})
