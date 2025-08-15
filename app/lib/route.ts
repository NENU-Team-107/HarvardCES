import type { RouterItem } from "./model";

export const routerArray: Array<RouterItem> = [
    // 2026年菜单配置
    {
        year: 2026,
        name: "Home",
        path: "/2026",
        children: [
            {
                year: 2026,
                name: "Organizing Committee",
                path: '/2026/contact/committee'
            },
            {
                year: 2026,
                name: "About EdUHK",
                path: '/2026/contact/eduhk'
            },
            {
                year: 2026,
                name: "About GIET",
                path: '/2026/contact/giet'
            },
            {
                year: 2026,
                name: "MA Programme",
                path: '/2026/contact/ma_program'
            }
        ]
    },
    {
        year: 2026,
        name: "About Symposium",
        children: [
            {
                year: 2026,
                name: "2nd Symposium (2026)",
                children: [
                    {
                        year: 2026,
                        name: "Program Overview",
                        path: "/2026/symposium/program"
                    },
                    {
                        year: 2026,
                        name: "Handbook",
                        path: "/2026/symposium/introduction"
                    },
                    {
                        year: 2026,
                        name: "Agenda",
                        path: "/2026/symposium/time"
                    }
                ]
            },
            {
                year: 2026,
                name: "1st Symposium (2025)",
                path: "/2025"
            },
            {
                year: 2026,
                name: "Press Release, Photo and Video",
                path: "/2026/press"
            }
        ]
    },
    {
        year: 2026,
        name: "Speakers",
        children: [
            {
                year: 2026,
                name: "Keynote Speakers",
                path: "/2026/speakers/keynote"
            },
            {
                year: 2026,
                name: "Invited Speakers",
                path: "/2026/speakers/invited"
            },
            {
                year: 2026,
                name: "Guest of Honor",
                path: "/2026/speakers/guest"
            }
        ]
    },
    {
        year: 2026,
        name: "Call For Presentations",
        children: [
            {
                year: 2026,
                name: "Important Dates",
                path: "/2026/call/dates"
            },
            {
                year: 2026,
                name: "Format and Submission",
                path: "/2026/call/submission"
            },
            {
                year: 2026,
                name: "Parallel Sessions",
                path: "/2026/call/session"
            }
        ]
    },
    {
        year: 2026,
        name: "Workshop",
        path: "/2026/workshops"
    },
    {
        year: 2026,
        name: "Logistics",
        children: [
            {
                year: 2026,
                name: "Registration",
                path: '/2026/registration'
            },
            {
                year: 2026,
                name: "Visitor Guide",
                path: '/2026/visitor-guide'
            }
        ]
    },
    // 原有2025配置
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
        name: "Archive",
        children: [
            {
                year: 2025,
                name: "2025",
                path: "/2025"
            },
            {
                year: 2026,
                name: "2026",
                path: "/"

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
