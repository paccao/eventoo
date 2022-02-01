import { render } from '@testing-library/react';

import AppState from '../../context/AppState';
import MeetupListPage from '../MeetupListPage';
import MeetupPage from '../MeetupPage';

import { BrowserRouter } from 'react-router-dom';

describe('MeetupListPage component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <MeetupListPage />
            </BrowserRouter>,
        );
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
