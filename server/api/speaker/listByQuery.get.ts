import { guestOfHonor, guestOfHonor2026, invitedSpeakers, invitedSpeakers2026, keynoteSpeaker, keynoteSpeaker2026, organizingCommittee, organizingCommittee2026 } from '~/lib/data';
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    if (query.kind === "Keynote Speakers") {
        // Check if year parameter is provided to determine which dataset to use
        const year = query.year as string
        const result = year === '2026' ? keynoteSpeaker2026 : keynoteSpeaker
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
        // Check if year parameter is provided to determine which dataset to use
        const year = query.year as string
        const result = year === '2026' ? organizingCommittee2026 : organizingCommittee
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
        // Check if year parameter is provided to determine which dataset to use
        const year = query.year as string
        const result = year === '2026' ? guestOfHonor2026 : guestOfHonor
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
        const year = query.year as string
        const result = year === '2026' ? invitedSpeakers2026 : invitedSpeakers
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