import { guestOfHonor, invitedSpeakers, keynoteSpeaker, organizingCommittee } from "~/lib/data";
import type { H3Event } from 'h3';
export default defineEventHandler(async (_event: H3Event) => {
    let result = keynoteSpeaker
    result = result.concat(organizingCommittee).concat(guestOfHonor).concat(invitedSpeakers)

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