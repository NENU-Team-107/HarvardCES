import { SubSymposiumPoster } from "~/lib/data";
import type { ApiResponse, Poster } from "~/lib/model";
import type { H3Event } from 'h3';

export default defineEventHandler(async (_event: H3Event) => {
    const data: ApiResponse<Array<Poster>> = {
        status: "Success",
        data: SubSymposiumPoster,
    }
    return data
});