import type { Speaker } from "./model";

export const speakers: Array<Speaker> = [
    {
        name: "Alice Johnson",
        kind: "Keynote Speakers",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "A renowned expert in artificial intelligence, Alice has delivered talks at various international conferences.",
                title: "AI Researcher",
                link: "https://alicejohnson.com"
            }
        },
        activateDate: new Date("2025-05-08")
    },
    {
        name: "Bob Smith",
        kind: "Invite Speakers",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Bob is a software engineer with over a decade of experience in web development and open-source contributions.",
                title: "Senior Software Engineer",
                link: undefined
            }
        },
        activateDate: new Date("2025-05-09")
    },
    {
        name: "Charlie Brown",
        kind: "Guest of Honor",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Charlie specializes in user experience design and has conducted workshops globally.",
                title: "UX Designer",
                link: "https://charliebrownux.com"
            }
        },
        activateDate: new Date("2025-05-10")
    },
    {
        name: "Diana Prince",
        kind: "Keynote Speakers",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Diana is a cybersecurity expert and has spoken at numerous tech events about online safety.",
                title: "Cybersecurity Consultant",
                link: undefined
            }
        },
        activateDate: new Date("2025-05-08")
    },
    {
        name: "Ethan Hunt",
        kind: "Track Workshop Chair",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Ethan inspires audiences with his stories of resilience and success in entrepreneurship.",
                title: "Entrepreneur",
                link: "https://ethanhunt.com"
            }
        },
        activateDate: new Date("2025-05-09")
    },
    {
        name: "Fiona Green",
        kind: "Track Workshop Chair",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Fiona focuses on emerging technologies and their impact on business transformation.",
                title: "Tech Evangelist",
                link: "https://fionagreen.tech"
            }
        },
        activateDate: new Date("2025-05-10")
    },
    {
        name: "George Martin",
        kind: "Organizing Committee",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "George has extensive knowledge in blockchain technology and its applications.",
                title: "Blockchain Expert",
                link: "https://georgemartin.com"
            }
        },
        activateDate: new Date("2025-05-08")
    },
    {
        name: "Hannah Lee",
        kind: "Keynote Speaker",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Hannah is a thought leader in sustainability and speaks passionately about eco-friendly practices.",
                title: "Sustainability Advocate",
                link: undefined
            }
        },
        activateDate: new Date("2025-05-09")
    },
    {
        name: "Ian Wright",
        kind: "Invite Speakers",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Ian teaches digital marketing strategies and helps businesses grow their online presence.",
                title: "Digital Marketing Expert",
                link: "https://ianwright.com"
            }
        },
        activateDate: new Date("2025-05-10")
    },
    {
        name: "Jessica Taylor",
        kind: "Track Workshop Chair",
        photo: "https://example.com/photos/example.png",
        bio: {
            details: {
                description: "Jessica is an advocate for diversity in tech and shares her journey to empower others.",
                title: "Diversity Advocate",
                link: "https://jessicataylor.com"
            }
        },
        activateDate: new Date("2025-05-08")
    }
];