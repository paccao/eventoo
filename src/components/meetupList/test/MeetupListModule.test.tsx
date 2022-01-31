import AppState from '../../../context/AppState';
import { BrowserRouter } from 'react-router-dom';

import MeetUpListModule from '../MeetupListModule';

describe('MeetUpListModule component', () => {
    it('should render', () => {
        <BrowserRouter>
            <AppState>
                <MeetUpListModule />
            </AppState>
        </BrowserRouter>;
    });
});
