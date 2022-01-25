import { render } from '@testing-library/react';
import CreateMeetupBtn from '../CreateMeetupBtn';

describe('CreateMeetupBtn component', () => {
    it('renders without crashing', () => {
        render(<CreateMeetupBtn />);
    });
});
