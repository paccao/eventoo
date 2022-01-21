import { render, screen } from '@testing-library/react';
import MeetupListPage from '../MeetupListPage';
import DetailsPage from '../DetailsPage';

describe('MeetupListPage component', () => {
    it('renders without crashing', () => {
        render(<MeetupListPage />);
    });
});

describe('DetailsPage component', () => {
    it('renders without crashing', () => {
        render(<DetailsPage />);
    });
});
