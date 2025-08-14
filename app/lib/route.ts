import type { RouterItem } from "./model";

export const routerArray: Array<RouterItem> = [
    {
        year: 2025,
        name: "Home",
        path: "/2025",
        children: [
            {
                year: 2025,
                name: "Registration",
                path: '/2025/registration'
            }
        ]
    },
    {
        year: 2025,
        name: "About",
        children: [
            {
                year: 2025,
                name: "Symposium Introduction",
                path: "/2025/symposium/introduction",
            },
            {
                year: 2025,
                name: "Symposium Time.title",
                path: "/2025/symposium/time"
            },
            {
                year: 2025,
                name: "Visitor Guide",
                path: "/2025/symposium/guide"
            }
        ]
    },
    {
        year: 2025,
        name: "Speakers",
        children: [
            {
                year: 2025,
                name: "Keynote Speakers",
                path: "/2025/speakers/keynote"
            },
            {
                year: 2025,
                name: "Invited Speakers",
                path: "/2025/speakers/invited"
            },
            {
                year: 2025,
                name: "Guest of Honor",
                path: "/2025/speakers/guest"
            },
            {
                year: 2025,
                name: 'Speaking',
                path: '/2025/speakers/speaking'
            }
        ]
    },
    {
        year: 2025,
        name: "Session",
        path: "/2025/session",
    },
    {
        year: 2025,
        name: "Workshop",
        path: "/2025/workshops"
    },
    {
        year: 2025,
        name: "Contact",
        children: [
            {
                year: 2025,
                name: "Organizing Committee",
                path: "/2025/contact/committee"
            },
            {
                year: 2025,
                name: "EduHK",
                path: '/2025/contact/eduhk'
            },
            {
                year: 2025,
                name: 'Harvard CES',
                path: '/2025/contact/ces'
            },
            {
                year: 2025,
                name: "New MA Program",
                path: "/2025/contact/program"
            }
        ]
    }
]
