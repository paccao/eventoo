export const meetups = [
    {
        id: '1',
        title: 'lördag på landet',
        tag: ['outdoors'],
        time: '2020-06-04 15:01',
        isOnline: false,
        location: 'Göteborg',
        timeStamp: 1643097488,
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '1640263576',
                content: 'First comment!',
                role: 'guest',
            },
            {
                id: '2',
                time: '1641863576',
                content: 'Second comment!',
                role: 'admin',
            },
            {
                id: '3',
                time: '1643118376',
                content: 'Third comment!',
                role: 'guest',
            },
        ],
    },

    {
        id: '2',
        title: 'sockerkaka hos gpa',
        tag: ['fika'],
        time: '2020-06-04 15:01',
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
        id: '3',
        title: 'game night',
        tag: ['fika'],
        time: '2020-06-04 15:01',
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
];

export const meetupsNoComments = [
    {
        id: '1',
        title: 'lördag på landet',
        tag: ['outdoors'],
        time: 'Lördag 20 Jan 18.00',
        isOnline: false,
        location: 'Göteborg',
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [],
    },
];

export const user = {
    name: 'kalle',
    id: '1',
    isAdmin: false,
    bookedMeetups: ['1', '3'],
};