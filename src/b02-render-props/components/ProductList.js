import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductList extends Component {

	static propTypes = {
		render: PropTypes.func.isRequired
	}

	state = {
		products: [
			{id: 1, title: 'Widelce', description: 'Nówki sztućki', imgUrl: 'https://picsum.photos/id/23/300/300'},
			{id: 2, title: 'ajFon', description: 'Używany ale dobry stan!', imgUrl: 'https://picsum.photos/id/3/300/300'},
			{id: 3, title: 'Plakat', description: '...z mostem', imgUrl: 'https://picsum.photos/id/43/300/300'},
		]
	}

	componentDidMount () {
		// umówmy się, że produkty są ładowane jakimś Ajaxem tutaj i potem podpinane pod state.products
	}

	render () {
		const { products } = this.state;
		const { title, render } = this.props;
		if(typeof render !== 'function') {
			throw new Error('ProductList needs render prop to be a function')
		}
		return (
			<div className="mt-3">
				<h3>{title}</h3>
				{
					render({ products })
					/*
						===
						render({ products: products })
					*/
				}
			</div>
		)
	}
}

export default ProductList
