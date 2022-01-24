import { render } from '@testing-library/react';
import CreateMeetupModal from '../CreateMeetupModal';

describe('CreateMeetupBtn component', () => {
    it('renders without crashing', () => {
        render(<CreateMeetupModal />);
    });
});
