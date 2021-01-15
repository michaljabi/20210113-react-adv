import AppMyTddComponent from './AppMyTddComponent'
import { render, fireEvent } from '@testing-library/react'

xdescribe( 'AppMyTddComponent', () => {

	 it('should start with no likes', () => {
		   const { container } = render(<AppMyTddComponent />)

		   const box = container.querySelector('.rating');

		   expect(box).toHaveTextContent('');
	  })

		it('should have 3 stars when liked 3 times', () => {
			const { container } = render(<AppMyTddComponent />)
			const btnUp = container.querySelector('.btn.btn-success');

			fireEvent.click(btnUp)
			fireEvent.click(btnUp)
			fireEvent.click(btnUp)

			const box = container.querySelector('.rating');
			expect(box.textContent.trim()).toBe('⭐⭐⭐');
		})

		it('should have 1 star when liked 2 times then disliked', () => {
			const { container } = render(<AppMyTddComponent />)
			const btnUp = container.querySelector('.btn.btn-success');
			const btnDown = container.querySelector('.btn.btn-danger');

			fireEvent.click(btnUp)
			fireEvent.click(btnUp)
			fireEvent.click(btnDown)

			const box = container.querySelector('.rating');
			expect(box.textContent.trim()).toBe('⭐');
		})

		it('should not be able to give more than 5 stars', () => {
			const { container } = render(<AppMyTddComponent />)
			const btnUp = container.querySelector('.btn.btn-success');

			// eslint-disable-next-line no-unused-vars
			for(const x of '123456'){
				fireEvent.click(btnUp);
			}

			const box = container.querySelector('.rating');
			expect(box.textContent.trim()).toBe('⭐⭐⭐⭐⭐');
		})

		it('should not throw error when at start dislike clicked', () => {
			const { container } = render(<AppMyTddComponent />)
			const btnDown = container.querySelector('.btn.btn-danger');

			expect(() => {
				fireEvent.click(btnDown)
			}).not.toThrow()
		})
} )
