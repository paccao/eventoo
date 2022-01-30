import { nanoid } from 'nanoid';

export const meetups = [
    {
        id: nanoid(),
        title: 'Lördag på landet',
        description: 'Träffen för alla bilnördar! Kom som du är, det bjuds på kaffe korv och turbo. Gratis däck för alla som vill elda',
        tag: ['outdoors', 'bilar'],
        time: '2023-01-28 15:01',
        isOnline: false,
        location: 'Göteborg',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2022-01-28 15:01',
                content: 'First comment!',
                role: 'guest',
            },
            {
                id: '2',
                time: '2022-01-28 16:01',
                content: 'Second comment!',
                role: 'admin',
            },
            {
                id: '3',
                time: '2022-01-28 21:01',
                content: 'Third comment!',
                role: 'guest',
            },
        ],
    },

    {
        id: nanoid(),
        title: 'Sockerkaka hos gpa',
        description: 'Ta med dig sockerkaka och ett glatt humör. Kaffet måste dock drickas med sockerbit och kopparna måste vara små. Va beredd på gamla anekdoter från tidig 60-tal',
        tag: ['fika', 'bakelse'],
        time: '2023-01-29 15:01',
        isOnline: false,
        location: 'Göteborg',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1602077812176-1bd3ff433d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'guest',
            },
        ],
    },
    {
        id: nanoid(),
        title: 'Game night',
        description: 'Nu kör vi magic! Gröna och röda lekar onskas. Denna tillställning ska ghå långsamt och räknar med ett pas på ett dygn. Vinnaren tar hem äran.',
        tag: ['fika'],
        time: '2023-01-27 15:01',
        isOnline: true,
        location: 'Göteborg',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1500061228850-950b0dc792c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'guest',
            },
        ],
    },
    {
        id: nanoid(),
        title: 'Räkjostillverkning med greger',
        description: 'OBS, sista upplagan av detta inte så populära evenemang. Här träffas vi och bjuder varandra på räkcocktail som när den var som bäst.. (på 80-talet)',
        tag: ['food', 'gourme'],
        time: '2023-01-20 15:01',
        isOnline: true,
        location: 'Göteborg',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1613585535485-dc11f77335ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'guest',
            },
        ],
    },

    {
        id: nanoid(),
        title: 'Arcade Night!',
        description: 'Ta med hinken med mynt, här ska det spelas spel. Den som vinner Sega Rally får 10 000 kronor i enkronor. Glöm inte handspriten.',
        tag: ['spel', 'liten grupp', 'arcade'],
        time: '2023-01-20 15:01',
        isOnline: true,
        location: 'Berlin',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'guest',
            },
        ],
    },
    {
        id: nanoid(),
        title: 'Meercat spaning',
        description: 'Kom och möts i Lasses minibuss.  Lån av kikare erbjuds  där vi skall spana på naturens egna spanare. Lite grupp på minst 10p.',
        tag: ['fika', 'slow', 'djur'],
        time: '2023-01-20 15:01',
        isOnline: true,
        location: 'Skåne',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1612412664025-052be804ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'guest',
            },
        ],
    },
];

export const user = {
    name: 'kalle',
    id: '1',
    isAdmin: false,
    bookedMeetups: [],
};
