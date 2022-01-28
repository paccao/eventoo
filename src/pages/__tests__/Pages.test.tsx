import { render } from '@testing-library/react';

import AppState from '../../context/AppState';
import MeetupListPage from '../MeetupListPage';
import MeetupPage from '../MeetupPage';

describe('MeetupListPage component', () => {
    it('renders without crashing', () => {
        render(<MeetupListPage />);
    });
});

describe('MeetupPage component', () => {
    it('renders without crashing', () => {
        render(
            <AppState>
                <MeetupPage />
            </AppState>,
        );
    });
});
