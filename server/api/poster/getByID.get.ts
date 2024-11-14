import { SubSymposiumPoster } from "~/lib/data";
import type { ApiResponse, Poster } from "~/lib/model";

export default defineEventHandler(async (event) => {
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