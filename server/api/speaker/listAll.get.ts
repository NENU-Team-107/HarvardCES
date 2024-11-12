import { guestOfHonor, keynoteSpeaker, organizingCommittee } from "~/lib/data";

export default defineEventHandler(async (event: any) => {
    let result = keynoteSpeaker
    result = result.concat(organizingCommittee).concat(guestOfHonor)

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