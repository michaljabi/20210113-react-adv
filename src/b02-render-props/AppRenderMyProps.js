import React from 'react'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import ProductRow from './components/ProductRow'

function AppRenderMyProps () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #B02. Render props </h1>
			</header>
			<main className="container">
				<ProductList title="Lista produktów jako Karty" render={({products}) => (
					<div className="row mt-2">
						{
							products.map(
								( product ) => (
										<div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<ProductCard {...product} />
										</div>
								)
							)
						}
					</div>
				)} />
				<ProductList title="Lista produktów jako Tabela"  render={({products}) => (
					<table className="table">
						<thead>
						<tr>
							<th scope="col">Foto</th>
							<th scope="col">Tytuł</th>
							<th scope="col">Opis</th>
						</tr>
						</thead>
						<tbody>
							{
								products.map(
									( product ) => (<ProductRow {...product} />)
								)
							}
						</tbody>
					</table>
				)}/>
				<ProductList title="Lista produktów jako JSON"  render={({products}) => (
					<pre> { JSON.stringify(products, null, 2) } </pre>
				)}/>
			</main>
		</div>
	)
}

export default AppRenderMyProps
