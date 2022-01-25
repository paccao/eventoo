import { useContext, useEffect, useState } from 'react';
import { AppContext, Comment, Meeting } from '../../context/AppState';
import { meetups as mockMeetups } from '../../mockData';
import { useLocation, useParams } from 'react-router-dom';
import ChatMessageItem from './ChatMessageItem';

function ChatMessageList() {
    const { state } = useContext(AppContext);
    const { id } = useParams();
    const [currentMeeting, setCurrentMeeting] = useState<Meeting>();

    let currentMeetings: Meeting[];

    useEffect(() => {
        currentMeetings = state?.meetings?.filter((meeting) => meeting.id === id);

        setCurrentMeeting(currentMeetings[0]);
    }, []);

    return (
        <ul data-testid="chatMessageList">
            {currentMeeting?.comments?.map((comment: Comment) => (
                <ChatMessageItem key={'commentItem-' + comment.id} {...comment} />
            ))}
        </ul>
    );
}

export default ChatMessageList;
