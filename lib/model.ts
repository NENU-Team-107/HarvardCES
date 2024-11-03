export type SpeakerBio = {
    details: {
        description: string,
        title: string | undefined
        link: string | undefined
    }
}

export type Speaker = {
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