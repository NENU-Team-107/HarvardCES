import type { Speaker } from "./model";

export const speakerToKind: Map<string, string> = new Map([
    ['ProfessorLEE,Chi-KinJohn', 'Keynote Speakers'],
    ['RenYouqun', 'Keynote Speakers'],
    ['ChrisDede', 'Keynote Speakers'],
    ['ShijinWang', 'Keynote Speakers'],
    ['ProfessorMinjuanWANG', 'Keynote Speakers'],
    ['Yew-SoonOng', 'Keynote Speakers'],
    ['PaulKim', 'Keynote Speakers'],
    ['AnnyChan', 'Keynote Speakers']
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
        photo: "./assets/avatars/Anny Chan.png",
        activateDate: new Date("2025-05-09"),
        bio: {
            details: {
                description: "server.Keynote Speakers.id8.description",
                title: "server.Keynote Speakers.id8.title",
                link: 'speaker/8 AnnyChan'
            }
        }
    },
];
