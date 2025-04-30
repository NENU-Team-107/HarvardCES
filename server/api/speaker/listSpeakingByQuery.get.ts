import { invitedSpeaking, keynoteSpeaking } from '~/lib/data';
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    if (query.kind === "Keynote Speakers") {
        const result = keynoteSpeaking
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
        const result = invitedSpeaking
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