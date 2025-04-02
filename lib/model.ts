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
    inc: string
    photo: string
    bio: SpeakerBio
    activateDate: Date
}

export type SpeakingInfo = {
    name: string
    kind: string
    photo: string
    inc: string
    title: string
    abstract: string
}

export type NewsItem = {
    title: string
    content: string
    link: string | undefined
}

export type Poster = {
    id: number,
    name: string
    path: string
    callPath: string
    link: string
}

export interface ApiResponse<T> {
    status: string;
    data: T | null;
}

export interface ApiResponseWithSpeaker extends ApiResponse<Speaker> {
    status: string;
    data: Speaker | null;
}

export interface TabItems {
    label: string,
    content: string,
    show: boolean,
    index: number
}
export interface SwiperItem {
    src: string,
    link?: string,
    details?: boolean
}

export interface RouterItem {
    name: string;
    path?: string;
    children?: RouterItem[];
}

export interface WorkshopItem {
    title: string,
    description: string,
    takeaways: string,
    speaker: string,
    slides: string,
}

export interface ChairListItem {
    title?: string,
    name: string,
    inc: string,
}

export interface BusScheduleItemResp {
    col: { key: string }[],
    data: { [key: string]: string }[],
}