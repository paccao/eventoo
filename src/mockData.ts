export const meetups = [

    {
        id: '1',
        title: 'lördag på landet',
        tag: ['outdoors'],
        time: 'Lördag 20 Jan 18.00',
        isOnline: false,
        location: 'Göteborg',
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'admin',
            },
        ],

    },

    {
        id: '2',
        title: 'sockerkaka hos gpa',
        tag: ['fika'],
        time: 'LÖRDAG  20 JAN 18:00',
        isOnline: false,
        location: 'Göteborg',
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'admin',
            },
        ],

    },
    {
        id: '3',
        title: 'game night',
        tag: ['fika'],
        time: 'LÖRDAG  20 JAN 18:00',
        isOnline: true,
        location: 'Göteborg',
        image: 'https://images.unsplash.com/photo-1618264366449-c8a2a1b799ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        comments: [
            {
                id: '1',
                time: '2020-05-25',
                content: 'First comment!',
                role: 'admin',
            },
        ],

    }



]


export const user = {

    id: '1',
    isAdmin: false,
    bookedMeetups: [ '1', '3' ]


}





