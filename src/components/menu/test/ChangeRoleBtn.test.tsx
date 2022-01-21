import { render } from '@testing-library/react';
import ChangeRoleBtn from '../ChangeRoleBtn';

describe('ChangeRoleBtn component', () => {
    it('renders without crashing', () => {
        render(<ChangeRoleBtn />);
    });
});
