import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MeetUpListItem from '../MeetUpListItem'
import { createMemoryHistory } from 'history'
import { BrowserRouter, useLocation, Router } from 'react-router-dom'

describe('MeetUpListItem component', () => {


    const meeting = {
        id: '0',
        title: 'lördag på landet',
        tag: ['outdoors'],
        time: 'Lördag 20 Jan 18.00',
        location: 'Göteborg',
        image: 'http://example.se',
    }
    


    function MockRouter() {
        return (
            <BrowserRouter>
                <MeetUpListItem {...meeting} />
            </BrowserRouter>
        );
    }
    




    it('should render', () => {

        render(<MockRouter />)

    });


    it('should have clickable image', () => {
        render(<MockRouter />)
    
        const image = screen.getByRole('img')
    
        expect(image).toHaveStyle('cursor: pointer')
    });


    it('should have clickable info container', () => {
        render(<MockRouter />)
    
        const infoContainer = screen.getByTestId('list-info-container')
    
        expect(infoContainer).toHaveStyle('cursor: pointer')
    });
    
    
    it('should have date and location info', () => {
        render(<MockRouter />)
    
        const text = screen.getByRole('heading', { name: /göteborg/i })
    
        expect(text).toHaveTextContent(/göteborg/i)
        expect(text).toHaveTextContent(/20/i)
    });
    
    
    it('should have title present', () => {
        render(<MockRouter />)
    
        const text = screen.getByRole('heading', { name: 'lördag på landet' })
    
        expect(text).toHaveTextContent('lördag på landet')
    });
    
    
    it('should have type tag present', () => {
        render(<MockRouter />)
    
        const tag = screen.getByText('outdoors')
    
        expect(tag).toBeInTheDocument()
    });
    
    
    it('should have image present', () => {
        render(<MockRouter />)
    
        const image = screen.getByRole('img')
    
        expect(image).toBeInTheDocument()
    });

    it('should link to a detailed meetup page', () => {

        render(<MockRouter />)

        const listItem = screen.getByRole('listitem')
    
        userEvent.click(listItem) 
        const newPage = screen.getByText(/Meetup page/i)

        expect(newPage).toBeInTheDocument()
    
    }); 
    


})






