import type { Speaker, Poster, RouterItem, ChairListItem, SpeakingInfo } from "./model";

export const speakerToKind: Map<number, string> = new Map([
    [1, 'Keynote Speakers'],
    [2, 'Keynote Speakers'],
    [3, 'Keynote Speakers'],
    [4, 'Keynote Speakers'],
    [5, 'Keynote Speakers'],
    [6, 'Keynote Speakers'],
    [7, 'Keynote Speakers'],
    [8, 'Invited Speakers'],
    [9, 'Organizing Committee'],
    [10, 'Organizing Committee'],
    [11, 'Organizing Committee'],
    [12, 'Organizing Committee'],
    [13, 'Organizing Committee'],
    [14, 'Guest of Honor'],
    [15, 'Guest of Honor'],
    [16, 'Guest of Honor'],
    [17, 'Keynote Speakers'],
    [18, 'Invited Speakers'],
    [19, 'Invited Speakers'],
    [20, 'Invited Speakers'],
    [21, 'Organizing Committee'],
    [22, 'Invited Speakers'],
    [23, 'Invited Speakers'],
    [24, 'Keynote Speakers'],
    [25, 'Invited Speakers'],
    [26, 'Invited Speakers'],
    [27, 'Organizing Committee'],
    [28, 'Organizing Committee'],
    [29, 'Organizing Committee'],
    [30, 'Invited Speakers'],
    [31, 'Invited Speakers']
]);

export const keynoteSpeaker: Array<Speaker> = [
    {
        id: 3,
        name: "server.Keynote Speakers.id3.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id3.inc",
        photo: "./assets/avatars/Chris Dede.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id3.description",
                title: "server.Keynote Speakers.id3.title",
                link: '/speakers/speaker/3 ChrisDede'
            }
        }
    },
    {
        id: 17,
        name: "server.Keynote Speakers.id9.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id9.inc",
        photo: "./assets/avatars/Tina Grotzer.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id9.description",
                title: "server.Keynote Speakers.id9.title",
                link: '/speakers/speaker/17 TinaGrotzer'
            }
        }
    },
    {
        id: 7,
        name: "server.Keynote Speakers.id7.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id7.inc",
        photo: "./assets/avatars/Paul Kim.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id7.description",
                title: "server.Keynote Speakers.id7.title",
                link: '/speakers/speaker/7 PaulKim'
            }
        }
    },
    {
        id: 1,
        name: "server.Keynote Speakers.id1.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id1.inc",
        photo: "./assets/avatars/Chi-Kin John.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id1.description",
                title: "server.Keynote Speakers.id1.title",
                link: '/speakers/speaker/1 ProfessorLEE,Chi-KinJohn'
            }
        }
    },
    {
        id: 24,
        name: "server.Invited Speakers.id1.name",
        kind: "Keynote Speakers",
        inc: "server.Invited Speakers.id1.inc",
        photo: "./assets/avatars/John Clifford Mitchell.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id1.description",
                title: "server.Invited Speakers.id1.title",
                link: '/speakers/speaker/24 John Clifford Mitchell'
            }
        }
    },
    {
        id: 6,
        name: "server.Keynote Speakers.id6.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id6.inc",
        photo: "./assets/avatars/Yew-Soon Ong.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id6.description",
                title: "server.Keynote Speakers.id6.title",
                link: '/speakers/speaker/6 Yew-SoonOng'
            }
        }
    },
    {
        id: 2,
        name: "server.Keynote Speakers.id2.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id2.inc",
        photo: "./assets/avatars/Ren Youqun.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id2.description",
                title: "server.Keynote Speakers.id2.title",
                link: '/speakers/speaker/2 RenYouqun'
            }
        }
    },
    {
        id: 5,
        name: "server.Keynote Speakers.id5.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id5.inc",
        photo: "./assets/avatars/Minjuan WANG.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id5.description",
                title: "server.Keynote Speakers.id5.title",
                link: '/speakers/speaker/5 MinjuanWANG'
            }
        }
    },
    {
        id: 4,
        name: "server.Keynote Speakers.id4.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id4.inc",
        photo: "./assets/avatars/Shijin Wang.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id4.description",
                title: "server.Keynote Speakers.id4.title",
                link: '/speakers/speaker/4 ShijinWang'
            }
        }
    },
];

export const organizingCommittee: Array<Speaker> = [
    {
        id: 9,
        name: "server.Organizing Committee.id1.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id1.inc",
        photo: "./assets/avatars/Chi-Kin John.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id1.description",
                title: "server.Organizing Committee.id1.title",
                link: '/speakers/speaker/9 ProfessorLEE,Chi-KinJohn'
            }
        }
    },
    {
        id: 10,
        name: "server.Organizing Committee.id2.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id2.inc",
        photo: "./assets/avatars/Minjuan WANG.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id2.description",
                title: "server.Organizing Committee.id2.title",
                link: '/speakers/speaker/10 MinjuanWANG'
            }
        }
    },
    {
        id: 12,
        name: "server.Organizing Committee.id4.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id4.inc",
        photo: "./assets/avatars/Anny Chan.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id4.description",
                title: "server.Organizing Committee.id4.title",
                link: '/speakers/speaker/12 AnnyChan'
            }
        }
    },
    {
        id: 13,
        name: "server.Organizing Committee.id5.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id5.inc",
        photo: "./assets/avatars/Xuefan Li.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id5.description",
                title: "server.Organizing Committee.id5.title",
                link: '/speakers/speaker/13 Xuefan Li'
            }
        }
    },
    {
        id: 11,
        name: "server.Organizing Committee.id3.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id3.inc",
        photo: "./assets/avatars/Rongbing Shen.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id3.description",
                title: "server.Organizing Committee.id3.title",
                link: '/speakers/speaker/11 RongbingShen'
            }
        }
    },
    {
        id: 21,
        name: "server.Invited Speakers.id5.name",
        kind: "Organizing Committee",
        inc: "server.Invited Speakers.id5.inc",
        photo: "./assets/avatars/LI HuiPhilip.png",

        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id5.description",
                title: "server.Invited Speakers.id5.title",
                // link: 'https://www.eduhk.hk/zhs/experts/professor-li-hui-philip'
                link: 'https://www.eduhk.hk/zhs/experts/professor-li-hui-philip'
            }
        }
    },
    {
        id: 29,
        name: "server.Invited Speakers.id1.name",
        kind: "Organizing Committee",
        inc: "server.Invited Speakers.id1.inc",
        photo: "./assets/avatars/John Clifford Mitchell.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id1.description",
                title: "server.Invited Speakers.id1.title",
                link: '/speakers/speaker/29 John Clifford Mitchell'
            }
        }
    },
    {
        id: 28,
        name: "server.Keynote Speakers.id7.name",
        kind: "Organizing Committee",
        inc: "server.Keynote Speakers.id7.inc",
        photo: "./assets/avatars/Paul Kim.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id7.description",
                title: "server.Keynote Speakers.id7.title",
                link: '/speakers/speaker/28 PaulKim'
            }
        }
    },
    {
        id: 27,
        name: "server.Organizing Committee.id6.name",
        kind: "Organizing Committee",
        inc: "server.Organizing Committee.id6.inc",
        photo: "./assets/avatars/Yue Jia.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id6.description",
                title: "server.Organizing Committee.id6.title",
                link: '/speakers/speaker/27 Yue Jia'
            }
        }
    },
]

export const guestOfHonor: Array<Speaker> = [
    {
        id: 15,
        name: "server.Guest of Honor.id2.name",
        kind: "Guest of Honor",
        inc: "server.Guest of Honor.id2.inc",
        photo: "./assets/avatars/CHENG May Hung.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id2.description",
                title: "server.Guest of Honor.id2.title",
                link: '/speakers/speaker/15 CHENG,MayHung'
            }
        }
    },
    {
        id: 16,
        name: "server.Guest of Honor.id3.name",
        kind: "Guest of Honor",
        inc: "server.Guest of Honor.id3.inc",
        photo: "./assets/avatars/CHAN Che Hin Chetwyn.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id3.description",
                title: "server.Guest of Honor.id3.title",
                link: '/speakers/speaker/16 CHAN,CheHinChetwyn'
            }
        }
    },
    {
        id: 14,
        name: "server.Guest of Honor.id1.name",
        kind: "Guest of Honor",
        inc: "server.Guest of Honor.id1.inc",
        photo: "./assets/avatars/Anny Chan.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id1.description",
                title: "server.Guest of Honor.id1.title",
                link: '/speakers/speaker/14 AnnyChan'
            }
        }
    },
]

export const invitedSpeakers: Array<Speaker> = [
    {
        id: 18,
        name: "server.Invited Speakers.id2.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id2.inc",
        photo: "./assets/avatars/Qing LI.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id2.description",
                title: "server.Invited Speakers.id2.title",
                link: '/speakers/speaker/18 Qing LI'
            }
        }
    },
    {
        id: 19,
        name: "server.Invited Speakers.id3.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id3.inc",
        photo: "./assets/avatars/Hongjie Chen.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id3.description",
                title: "server.Invited Speakers.id3.title",
                link: '/speakers/speaker/19 Hongjie Chen'
            }
        }
    },
    {
        id: 20,
        name: "server.Invited Speakers.id4.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id4.inc",
        photo: "./assets/avatars/Anny Chan.png",

        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id4.description",
                title: "server.Invited Speakers.id4.title",
                link: '/speakers/speaker/20 Anny Chan'
            }
        }
    },
    {
        id: 22,
        name: "server.Invited Speakers.id6.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id6.inc",
        photo: "./assets/avatars/Fridolin Ting.png",

        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id6.description",
                title: "server.Invited Speakers.id6.title",
                link: '/speakers/speaker/22 Fridolin Ting'
            }
        }
    },
    {
        id: 23,
        name: "server.Invited Speakers.id7.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id7.inc",
        photo: "./assets/avatars/Enhong Chen.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id7.description",
                title: "server.Invited Speakers.id7.title",
                link: '/speakers/speaker/23 Enhong Chen'
            }
        }
    },
    {
        id: 25,
        name: "server.Invited Speakers.id8.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id8.inc",
        photo: "./assets/avatars/Mutlu Cukurova.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id8.description",
                title: "server.Invited Speakers.id8.title",
                link: '/speakers/speaker/25 Mutlu Cukurova'
            }
        }
    },
    {
        id: 26,
        name: "server.Invited Speakers.id9.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id9.inc",
        photo: "./assets/avatars/Weipeng Yang.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id9.description",
                title: "server.Invited Speakers.id9.title",
                link: '/speakers/speaker/26 Weipeng Yang'
            }
        }
    },
    {
        id: 8,
        name: "server.Keynote Speakers.id8.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id8.inc",
        photo: "./assets/avatars/Jonathon Ritcher.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id8.description",
                title: "server.Keynote Speakers.id8.title",
                link: '/speakers/speaker/8 Jonathon Ritcher'
            }
        }
    },
    {
        id: 30,
        name: "server.Invited Speakers.id10.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id10.inc",
        photo: "./assets/avatars/Ping Li.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id10.description",
                title: "server.Invited Speakers.id10.title",
                link: '/speakers/speaker/30 Ping Li'
            }
        }
    },
    {
        id: 31,
        name: "server.Invited Speakers.id11.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id11.inc",
        photo: "./assets/avatars/Alberto Sols.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Invited Speakers.id11.description",
                title: "server.Invited Speakers.id11.title",
                link: '/speakers/speaker/31 Alberto Sols'
            }
        }
    },
]
export const keynoteSpeaking: Array<SpeakingInfo> = [
    {
        name: "server.Keynote Speakers.id3.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id3.speaking.inc",
        photo: "./assets/avatars/Chris Dede.png",
        title: "server.Keynote Speakers.id3.speaking.title",
        abstract: "server.Keynote Speakers.id3.speaking.abstract"
    },
    {
        name: "server.Keynote Speakers.id9.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id9.speaking.inc",
        photo: "./assets/avatars/Tina Grotzer.png",
        title: "server.Keynote Speakers.id9.speaking.title",
        abstract: "server.Keynote Speakers.id9.speaking.abstract"
    },
    {
        name: "server.Invited Speakers.id1.name",
        kind: "Keynote Speakers",
        inc: "server.Invited Speakers.id1.speaking.inc",
        photo: "./assets/avatars/John Clifford Mitchell.png",
        title: "server.Invited Speakers.id1.speaking.title",
        abstract: "server.Invited Speakers.id1.speaking.abstract"
    },
    {
        name: "server.Keynote Speakers.id2.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id2.speaking.inc",
        photo: "./assets/avatars/Ren Youqun.png",
        title: "server.Keynote Speakers.id2.speaking.title",
        abstract: "server.Keynote Speakers.id2.speaking.abstract"
    },
    {
        name: "server.Keynote Speakers.id4.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id4.speaking.inc",
        photo: "./assets/avatars/Shijin Wang.png",
        title: "server.Keynote Speakers.id4.speaking.title",
        abstract: "server.Keynote Speakers.id4.speaking.abstract"
    },
    {
        name: "server.Keynote Speakers.id5.name",
        kind: "Keynote Speakers",
        inc: "server.Keynote Speakers.id5.speaking.inc",
        photo: "./assets/avatars/Minjuan WANG.png",
        title: "server.Keynote Speakers.id5.speaking.title",
        abstract: "server.Keynote Speakers.id5.speaking.abstract"
    }
];
export const invitedSpeaking: Array<SpeakingInfo> = [
    {
        name: "server.Invited Speakers.id2.name",
        kind: "Invited Speakers",
        inc: "server.Invited Speakers.id2.speaking.inc",
        photo: "./assets/avatars/Qing LI.png",
        title: "server.Invited Speakers.id2.speaking.title",
        abstract: "server.Invited Speakers.id2.speaking.abstract"
    }
];

export const SubSymposiumPoster: Array<Poster> = [
    {
        id: 0,
        name: 'Sub-symposium1',
        path: 'img/poster/Sub-symposium1.jpg',
        callPath: "server.Poster.id0",
        link: 'sub-symposium/0'
    },
    {
        id: 1,
        name: 'Sub-symposium2',
        path: 'img/poster/Sub-symposium2.jpg',
        callPath: "server.Poster.id1",
        link: 'sub-symposium/1'
    },
    {
        id: 2,
        name: 'Sub-symposium3',
        path: 'img/poster/Sub-symposium3.jpg',
        callPath: "server.Poster.id2",
        link: 'sub-symposium/2'
    },
    {
        id: 3,
        name: 'Sub-symposium4',
        path: 'img/poster/Sub-symposium4.jpg',
        callPath: "server.Poster.id3",
        link: 'sub-symposium/3'
    },
    {
        id: 4,
        name: 'Sub-symposium5',
        path: 'img/poster/Sub-symposium5.jpg',
        callPath: "server.Poster.id4",
        link: 'sub-symposium/4'
    },
    {
        id: 5,
        name: 'Sub-symposium6',
        path: 'img/poster/Sub-symposium6.jpg',
        callPath: "server.Poster.id5",
        link: 'sub-symposium/5'
    },
    {
        id: 6,
        name: 'Sub-symposium7',
        path: 'img/poster/Sub-symposium7.jpg',
        callPath: "server.Poster.id6",
        link: 'sub-symposium/6'
    }
]

export const routerArray: Array<RouterItem> = [
    {
        name: "Home",
        path: "/",
        children: [
            {
                name: "Registration",
                path: '/registration'
            }
        ]
    },
    {
        name: "About",
        children: [
            // {
            //     name: "Symposium Introduction",
            //     path: "/symposium/introduction",
            // },
            {
                name: "Symposium Time",
                path: "/symposium/time"
            },
            {
                name: "Visitor Guide",
                path: "/symposium/guide"
            }
        ]
    },
    {
        name: "Speakers",
        children: [
            {
                name: "Keynote Speakers",
                path: "/speakers/keynote"
            },
            {
                name: "Invited Speakers",
                path: "/speakers/invited"
            },
            {
                name: "Guest of Honor",
                path: "/speakers/guest"
            },
            {
                name: 'Speaking',
                path: '/speakers/speaking'
            }
        ]
    },
    {
        name: "Session",
        path: "/session",
    },
    {
        name: "Workshop",
        path: "/workshops"
    },
    {
        name: "Contact",
        children: [
            {
                name: "Organizing Committee",
                path: "/contact/committee"
            },
            {
                name: "EduHK",
                path: '/contact/eduhk'
            },
            {
                name: 'Harvard CES',
                path: '/contact/ces'
            },
            {
                name: "New MA Program",
                path: "/contact/program"
            }
        ]
    }
]

export const ChairListParallel: Array<ChairListItem> = [
    {
        "title": "Chair of Parallel session.Details.line1.title",
        "name": "Chair of Parallel session.Details.line1.name",
        "inc": "Chair of Parallel session.Details.line1.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line2.title",
        "name": "Chair of Parallel session.Details.line2.name",
        "inc": "Chair of Parallel session.Details.line2.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line3.title",
        "name": "Chair of Parallel session.Details.line3.name",
        "inc": "Chair of Parallel session.Details.line3.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line4.title",
        "name": "Chair of Parallel session.Details.line4.name",
        "inc": "Chair of Parallel session.Details.line4.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line5.title",
        "name": "Chair of Parallel session.Details.line5.name",
        "inc": "Chair of Parallel session.Details.line6.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line7.title",
        "name": "Chair of Parallel session.Details.line7.name",
        "inc": "Chair of Parallel session.Details.line7.inc"
    },
    {
        "title": "Chair of Parallel session.Details.line8.title",
        "name": "Chair of Parallel session.Details.line8.name",
        "inc": "Chair of Parallel session.Details.line8.inc"
    },
]

export const ChairListProgram: Array<ChairListItem> = [
    {
        "name": "Program Chair.Details.line1.name",
        "inc": "Program Chair.Details.line1.inc"
    },
];

export const ChairListPublicity: Array<ChairListItem> = [
    {
        "name": "Publicity Chair.Details.line1.name",
        "inc": "Publicity Chair.Details.line1.inc"
    },
];

export const ChairListRegistration: Array<ChairListItem> = [
    {
        "name": "Registration Chair.Details.line1.name",
        "inc": "Registration Chair.Details.line1.inc"
    },
];

export const ChairListWorkshop: Array<ChairListItem> = [
    {
        "name": "Workshop Chair.Details.line1.name",
        "inc": "Workshop Chair.Details.line1.inc"
    },
]

export const ChairListLocalParallel: Array<ChairListItem> = [
    {
        "title": "Local Chair of Parallel session.Details.line1.title",
        "name": "Local Chair of Parallel session.Details.line1.name",
        "inc": "Local Chair of Parallel session.Details.line1.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line2.title",
        "name": "Local Chair of Parallel session.Details.line2.name",
        "inc": "Local Chair of Parallel session.Details.line2.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line3.title",
        "name": "Local Chair of Parallel session.Details.line3.name",
        "inc": "Local Chair of Parallel session.Details.line3.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line4.title",
        "name": "Local Chair of Parallel session.Details.line4.name",
        "inc": "Local Chair of Parallel session.Details.line4.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line5.title",
        "name": "Local Chair of Parallel session.Details.line5.name",
        "inc": "Local Chair of Parallel session.Details.line5.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line6.title",
        "name": "Local Chair of Parallel session.Details.line6.name",
        "inc": "Local Chair of Parallel session.Details.line6.inc"
    },
    {
        "title": "Local Chair of Parallel session.Details.line7.title",
        "name": "Local Chair of Parallel session.Details.line7.name",
        "inc": "Local Chair of Parallel session.Details.line7.inc"
    },
];

export const ChairListWorkshopCo: Array<ChairListItem> = [
    {
        "name": "Workshop Co-Chair.Details.line1.name",
        "inc": "Workshop Co-Chair.Details.line1.inc"
    },
]

export const ChairListPublicityCo: Array<ChairListItem> = [
    {
        "name": "Publicity Co-chair.Details.line1.name",
        "inc": "Publicity Co-chair.Details.line1.inc"
    },
    {
        "name": "Publicity Co-chair.Details.line2.name",
        "inc": "Publicity Co-chair.Details.line2.inc"
    },
    {
        "name": "Publicity Co-chair.Details.line3.name",
        "inc": "Publicity Co-chair.Details.line3.inc"
    },
    {
        "name": "Publicity Co-chair.Details.line4.name",
        "inc": "Publicity Co-chair.Details.line4.inc"
    },
    {
        "name": "Publicity Co-chair.Details.line5.name",
        "inc": "Publicity Co-chair.Details.line5.inc"
    }
]

export const ChairListOutreachCo: Array<ChairListItem> = [
    {
        "name": "Outreach Co-Chair.Details.line1.name",
        "inc": "Outreach Co-Chair.Details.line1.inc"
    }
]

export const ChairListLogistics: Array<ChairListItem> = [
    {
        "name": "Logistics Support.Details.line1.name",
        "inc": "Logistics Support.Details.line1.inc"
    }
]

export const ChairListMemberLeft: Array<ChairListItem> = [
    {
        "name": "MemberLeft.Details.line1.name",
        "inc": "MemberLeft.Details.line1.inc"
    },
    {
        "name": "MemberLeft.Details.line2.name",
        "inc": "MemberLeft.Details.line2.inc"
    },
    {
        "name": "MemberLeft.Details.line3.name",
        "inc": "MemberLeft.Details.line3.inc"
    },
    {
        "name": "MemberLeft.Details.line4.name",
        "inc": "MemberLeft.Details.line4.inc"
    },
    {
        "name": "MemberLeft.Details.line5.name",
        "inc": "MemberLeft.Details.line5.inc"
    },
    {
        "name": "MemberLeft.Details.line6.name",
        "inc": "MemberLeft.Details.line6.inc"
    },
    {
        "name": "MemberLeft.Details.line7.name",
        "inc": "MemberLeft.Details.line7.inc"
    },
    {
        "name": "MemberLeft.Details.line8.name",
        "inc": "MemberLeft.Details.line8.inc"
    },
    {
        "name": "MemberLeft.Details.line9.name",
        "inc": "MemberLeft.Details.line9.inc"
    },
    {
        "name": "MemberLeft.Details.line10.name",
        "inc": "MemberLeft.Details.line10.inc"
    },
    {
        "name": "MemberLeft.Details.line11.name",
        "inc": "MemberLeft.Details.line11.inc"
    },
    {
        "name": "MemberLeft.Details.line12.name",
        "inc": "MemberLeft.Details.line12.inc"
    },
    {
        "name": "MemberLeft.Details.line13.name",
        "inc": "MemberLeft.Details.line13.inc"
    },
    {
        "name": "MemberLeft.Details.line14.name",
        "inc": "MemberLeft.Details.line14.inc"
    },
    {
        "name": "MemberLeft.Details.line15.name",
        "inc": "MemberLeft.Details.line15.inc"
    },
    {
        "name": "MemberLeft.Details.line16.name",
        "inc": "MemberLeft.Details.line16.inc"
    },
    {
        "name": "MemberLeft.Details.line17.name",
        "inc": "MemberLeft.Details.line17.inc"
    },
]

export const ChairListMemberRight: Array<ChairListItem> = [
    {
        "name": "MemberRight.Details.line1.name",
        "inc": "MemberRight.Details.line1.inc"
    },
    {
        "name": "MemberRight.Details.line2.name",
        "inc": "MemberRight.Details.line2.inc"
    },
    {
        "name": "MemberRight.Details.line3.name",
        "inc": "MemberRight.Details.line3.inc"
    },
    {
        "name": "MemberRight.Details.line4.name",
        "inc": "MemberRight.Details.line4.inc"
    },
    {
        "name": "MemberRight.Details.line5.name",
        "inc": "MemberRight.Details.line5.inc"
    },
    {
        "name": "MemberRight.Details.line6.name",
        "inc": "MemberRight.Details.line6.inc"
    },
    {
        "name": "MemberRight.Details.line7.name",
        "inc": "MemberRight.Details.line7.inc"
    },
    {
        "name": "MemberRight.Details.line8.name",
        "inc": "MemberRight.Details.line8.inc"
    },
    {
        "name": "MemberRight.Details.line9.name",
        "inc": "MemberRight.Details.line9.inc"
    },
    {
        "name": "MemberRight.Details.line10.name",
        "inc": "MemberRight.Details.line10.inc"
    },
    {
        "name": "MemberRight.Details.line11.name",
        "inc": "MemberRight.Details.line11.inc"
    },
    {
        "name": "MemberRight.Details.line12.name",
        "inc": "MemberRight.Details.line12.inc"
    },
    {
        "name": "MemberRight.Details.line13.name",
        "inc": "MemberRight.Details.line13.inc"
    },
    {
        "name": "MemberRight.Details.line14.name",
        "inc": "MemberRight.Details.line14.inc"
    },
    {
        "name": "MemberRight.Details.line15.name",
        "inc": "MemberRight.Details.line15.inc"
    },
    {
        "name": "MemberRight.Details.line16.name",
        "inc": "MemberRight.Details.line16.inc"
    },
    {
        "name": "MemberRight.Details.line17.name",
        "inc": "MemberRight.Details.line17.inc"
    },
]