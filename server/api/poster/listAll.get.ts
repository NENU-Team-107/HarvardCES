import { SubSymposiumPoster } from "~/lib/data";
import type { ApiResponse, Poster } from "~/lib/model";

export default defineEventHandler(async (event) => {
    const data: ApiResponse<Array<Poster>> = {
        status: "Success",
        data: SubSymposiumPoster,
    }
    return data
});