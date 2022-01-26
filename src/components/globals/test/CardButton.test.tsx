import { render, screen } from '@testing-library/react'
import CardButton from '../CardButton'
import userEvent from '@testing-library/user-event';


describe('CardButton', () => {

    const testData = 'Hi'
    const mockFunction = jest.fn()


    const basicTestProps = {
        text: testData, 
        clickHandler: mockFunction,
        isActive: false, 
    }


    it('should render', () => {
        render(<CardButton {...basicTestProps} />)
    })

    it('should contain the text "Hi"', () => {
        render(<CardButton {...basicTestProps} />)

        const button = screen.getByRole('button', { name: 'Hi' })

        expect(button).toHaveTextContent('Hi')

    })

    it('should call passed function on click', () => {

        render(<CardButton {...basicTestProps}  />)

        const button = screen.getByRole('button', { name: 'Hi' })
        userEvent.click(button)

        expect(mockFunction).toHaveBeenCalledTimes(1)

    })

})