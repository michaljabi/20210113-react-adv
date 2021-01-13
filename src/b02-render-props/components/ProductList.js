import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductList extends Component {

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
		const { title } = this.props;
		return (
			<div className="mt-3">
				<h3>{title}</h3>
				<div className="row mt-2">
					{products.map( ( product ) => (
						<div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
							<ProductCard {...product} />
						</div>)
					)}
				</div>
			</div>
		)
	}
}

export default ProductList
