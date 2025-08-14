import { routerArray } from '~/lib/route';
import type { H3Event } from 'h3';
export default defineEventHandler(async (event: H3Event) => {
    let result = routerArray
    const query = getQuery(event)
    if (query.year) {
        result = result.filter(item => item.year === Number(query.year))
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