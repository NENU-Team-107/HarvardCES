import { keynoteSpeaker } from "~/lib/data";

export default defineEventHandler(async (event: any) => {


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
})