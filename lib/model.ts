export type SpeakerBio = {
    details: {
        description: string,
        title: string
        link: string | undefined
    }
}

export type Speaker = {
    id: number
    name: string
    kind: string
    photo: string
    bio: SpeakerBio
    activateDate: Date
}

export type NewsItem = {
    title: string
    content: string
    link: string | undefined
}

export interface ApiResponse {
    status: string;
    data: Speaker | null;
}

export interface ApiResponseWithToJSON extends ApiResponse {
    toJSON(): { status: string; data: Speaker | null };
}
