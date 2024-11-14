import type { Speaker, Poster } from "./model";

export const speakerToKind: Map<number, string> = new Map([
    [1, 'Keynote Speakers'],
    [2, 'Keynote Speakers'],
    [3, 'Keynote Speakers'],
    [4, 'Keynote Speakers'],
    [5, 'Keynote Speakers'],
    [6, 'Keynote Speakers'],
    [7, 'Keynote Speakers'],
    [8, 'Keynote Speakers'],
    [17, 'Keynote Speakers'],
    [9, 'Organizing Committee'],
    [10, 'Organizing Committee'],
    [11, 'Organizing Committee'],
    [12, 'Organizing Committee'],
    [13, 'Organizing Committee'],
    [14, 'Guest of Honor'],
    [15, 'Guest of Honor'],
    [16, 'Guest of Honor'],
]);

export const keynoteSpeaker: Array<Speaker> = [
    {
        id: 1,
        name: "server.Keynote Speakers.id1.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Chi-Kin John.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id1.description",
                title: "server.Keynote Speakers.id1.title",
                link: 'speaker/1 ProfessorLEE,Chi-KinJohn'
            }
        }
    },
    {
        id: 2,
        name: "server.Keynote Speakers.id2.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Ren Youqun.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id2.description",
                title: "server.Keynote Speakers.id2.title",
                link: 'speaker/2 RenYouqun'
            }
        }
    },
    {
        id: 3,
        name: "server.Keynote Speakers.id3.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Chris Dede.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id3.description",
                title: "server.Keynote Speakers.id3.title",
                link: 'speaker/3 ChrisDede'
            }
        }
    }, {
        id: 17,
        name: "server.Keynote Speakers.id9.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Tina Grotzer.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id9.description",
                title: "server.Keynote Speakers.id9.title",
                link: 'speaker/17 TinaGrotzer'
            }
        }
    },
    {
        id: 4,
        name: "server.Keynote Speakers.id4.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Shijin Wang.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id4.description",
                title: "server.Keynote Speakers.id4.title",
                link: 'speaker/4 ShijinWang'
            }
        }
    },
    {
        id: 5,
        name: "server.Keynote Speakers.id5.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Minjuan WANG.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id5.description",
                title: "server.Keynote Speakers.id5.title",
                link: 'speaker/5 MinjuanWANG'
            }
        }
    },
    {
        id: 6,
        name: "server.Keynote Speakers.id6.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Yew-Soon Ong.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id6.description",
                title: "server.Keynote Speakers.id6.title",
                link: 'speaker/6 Yew-SoonOng'
            }
        }
    },
    {
        id: 7,
        name: "server.Keynote Speakers.id7.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Paul Kim.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id7.description",
                title: "server.Keynote Speakers.id7.title",
                link: 'speaker/7 PaulKim'
            }
        }
    },
    {
        id: 8,
        name: "server.Keynote Speakers.id8.name",
        kind: "Keynote Speakers",
        photo: "./assets/avatars/Jonathon Ritcher.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id8.description",
                title: "server.Keynote Speakers.id8.title",
                link: 'speaker/8 Jonathon Ritcher'
            }
        }
    },
];


export const organizingCommittee: Array<Speaker> = [
    {
        id: 9,
        name: "server.Organizing Committee.id1.name",
        kind: "Organizing Committee",
        photo: "./assets/avatars/Chi-Kin John.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id1.description",
                title: "server.Organizing Committee.id1.title",
                link: 'speaker/9 ProfessorLEE,Chi-KinJohn'
            }
        }
    },
    {
        id: 10,
        name: "server.Organizing Committee.id2.name",
        kind: "Organizing Committee",
        photo: "./assets/avatars/Minjuan WANG.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id2.description",
                title: "server.Organizing Committee.id2.title",
                link: 'speaker/10 MinjuanWANG'
            }
        }
    },
    {
        id: 11,
        name: "server.Organizing Committee.id3.name",
        kind: "Organizing Committee",
        photo: "./assets/avatars/Rongbing Shen.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id3.description",
                title: "server.Organizing Committee.id3.title",
                link: 'speaker/11 RongbingShen'
            }
        }
    },
    {
        id: 12,
        name: "server.Organizing Committee.id4.name",
        kind: "Organizing Committee",
        photo: "./assets/avatars/Anny Chan.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id4.description",
                title: "server.Organizing Committee.id4.title",
                link: 'speaker/12 AnnyChan'
            }
        }
    },
    {
        id: 13,
        name: "server.Organizing Committee.id5.name",
        kind: "Organizing Committee",
        photo: "./assets/avatars/Xuefan Li.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Organizing Committee.id5.description",
                title: "server.Organizing Committee.id5.title",
                link: 'speaker/13 Xuefan Li'
            }
        }
    },
]

export const guestOfHonor: Array<Speaker> = [
    {
        id: 14,
        name: "server.Guest of Honor.id1.name",
        kind: "Guest of Honor",
        photo: "./assets/avatars/Anny Chan.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id1.description",
                title: "server.Guest of Honor.id1.title",
                link: 'speaker/14 AnnyChan'
            }
        }
    },
    {
        id: 15,
        name: "server.Guest of Honor.id2.name",
        kind: "Guest of Honor",
        photo: "./assets/avatars/CHENG May Hung.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id2.description",
                title: "server.Guest of Honor.id2.title",
                link: 'speaker/15 CHENG,MayHung'
            }
        }
    },
    {
        id: 16,
        name: "server.Guest of Honor.id3.name",
        kind: "Guest of Honor",
        photo: "./assets/avatars/CHAN Che Hin Chetwyn.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Guest of Honor.id3.description",
                title: "server.Guest of Honor.id3.title",
                link: 'speaker/16 CHAN,CheHinChetwyn'
            }
        }
    },
]

export const SubSymposiumPoster: Array<Poster> = [
    {
        id: 0,
        name: 'Sub-symposium1',
        path: 'img/poster/Sub-symposium1.png',
        callPath: "server.Poster.id0",
        link: 'sub-symposium/0'
    },
    {
        id: 1,
        name: 'Sub-symposium2',
        path: 'img/poster/Sub-symposium2.png',
        callPath: "server.Poster.id1",
        link: 'sub-symposium/1'
    },
    {
        id: 2,
        name: 'Sub-symposium3',
        path: 'img/poster/Sub-symposium3.png',
        callPath: "server.Poster.id2",
        link: 'sub-symposium/2'
    },
    {
        id: 3,
        name: 'Sub-symposium4',
        path: 'img/poster/Sub-symposium4.png',
        callPath: "server.Poster.id3",
        link: 'sub-symposium/3'
    },
    {
        id: 4,
        name: 'Sub-symposium5',
        path: 'img/poster/Sub-symposium5.png',
        callPath: "server.Poster.id4",
        link: 'sub-symposium/4'
    },
    {
        id: 5,
        name: 'Sub-symposium6',
        path: 'img/poster/Sub-symposium6.png',
        callPath: "server.Poster.id5",
        link: 'sub-symposium/5'
    },

]
