import { guestOfHonor, guestOfHonor2026, invitedSpeakers, keynoteSpeaker, keynoteSpeaker2026, organizingCommittee, organizingCommittee2026, speakerToKind, speakerToKind2026 } from "~/lib/data"
import type { ApiResponseWithSpeaker } from "~/lib/model"
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    const id = Number.parseInt(query.id as string)
    const year = query.year as string
    
    // Use appropriate mapping based on year
    const speakerMapping = year === '2026' ? speakerToKind2026 : speakerToKind
    const kind = speakerMapping.get(id)

    const data: ApiResponseWithSpeaker = {
        status: "Error",
        data: null
    }

    switch (kind) {
        case "Keynote Speakers":
            {
                // Use appropriate dataset based on year
                const keynoteData = year === '2026' ? keynoteSpeaker2026 : keynoteSpeaker
                const result = keynoteData.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
            }
            break
        case "Organizing Committee":
            {
                // Use appropriate dataset based on year
                const organizingData = year === '2026' ? organizingCommittee2026 : organizingCommittee
                const result = organizingData.find(speaker => speaker.id === id)
                if (result !== undefined) {
                    data.status = "Success"
                    data.data = result
                }
            }
            break
        case "Guest of Honor":
            {
                // Use appropriate dataset based on year
                const guestData = year === '2026' ? guestOfHonor2026 : guestOfHonor
                const result = guestData.find(speaker => speaker.id === id)
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
