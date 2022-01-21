import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MeetUpListItem from '../MeetUpListItem'



it('should render', () => {
    render(<MeetUpListItem />);
});

it('should link to a detailed meetup page', () => {
    render(<MeetUpListItem />);

});

it('should be clickable', () => {
    render(<MeetUpListItem />);

    const listItem = screen.getAllByRole('listitem')

    expect(listItem).toHaveStyle('cursor: pointer')
});


it('should have date and location info', () => {
    render(<MeetUpListItem />);

    const text = screen.getAllByRole('heading', { name: /göteborg/i })

    expect(text).toHaveTextContent('göteborg')
    expect(text).toHaveTextContent(/2020/i)
});


it('should have title present', () => {
    render(<MeetUpListItem />)

    const text = screen.getAllByRole('heading', { name: 'lördag på landet' })

    expect(text).toHaveTextContent('göteborg')
});


it('should have type tag present', () => {
    render(<MeetUpListItem />);

    const tag = screen.getByAltText('outdoors')

    expect(tag).toBeInTheDocument()
});


it('should have image present', () => {
    render(<MeetUpListItem />);

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
});


