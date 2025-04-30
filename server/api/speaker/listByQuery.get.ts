import { guestOfHonor, invitedSpeakers, keynoteSpeaker, organizingCommittee } from '~/lib/data';
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    if (query.kind === "Keynote Speakers") {
        const result = keynoteSpeaker
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
    } else if (query.kind === 'Organizing Committee') {
        const result = organizingCommittee
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
    } else if (query.kind === 'Guest of Honor') {
        const result = guestOfHonor
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
    } else if (query.kind === "Invited Speakers") {
        const result = invitedSpeakers
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