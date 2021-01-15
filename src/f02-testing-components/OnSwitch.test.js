import { render, fireEvent, queryByTestId } from '@testing-library/react'
import OnSwitch from './OnSwitch'

describe( 'OnSwitch', () => {

	let mySwitchContainer;
	beforeEach(() => {
		const { container  } = render( <OnSwitch /> )
		mySwitchContainer = container
	})

	it( 'should start with light on', () => {

		const myH1 = queryByTestId(mySwitchContainer, 'light')

		expect(myH1).toHaveTextContent('💡')
	})

	it( 'should toggle to off when one click', () => {
		// Arrange
		const button = mySwitchContainer.querySelector('button')

		fireEvent.click(button)
		const myH1 = queryByTestId(mySwitchContainer, 'light')

		expect(myH1.textContent.trim()).toBe('💤')
	})

	it( 'should really toggle when clicked 2 times', () => {
		// Arrange
		const button = mySwitchContainer.querySelector('button')

		fireEvent.click(button)
		fireEvent.click(button)
		const myH1 = queryByTestId(mySwitchContainer, 'light');

		expect(myH1.textContent.trim()).toEqual('💡')
	})
})
