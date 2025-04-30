import { SubSymposiumPoster } from "~/lib/data";
import type { ApiResponse, Poster } from "~/lib/model";
import type { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const query = getQuery(event)

    const id = Number.parseInt(query.id as string)

    const data: ApiResponse<Poster> = {
        status: "Success",
        data: null
    }

    if (SubSymposiumPoster.length > id && id >= 0) {
        data.data = SubSymposiumPoster[id]
    }

    return data

}); 