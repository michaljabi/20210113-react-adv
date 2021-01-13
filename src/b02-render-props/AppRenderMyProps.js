import React from 'react'
import ProductList from './components/ProductList'

function AppRenderMyProps () {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #B02. Render props </h1>
			</header>
			<main className="container">
				<ProductList title="Lista produktów jako Karty"/>
				<ProductList title="Lista produktów jako Tabela" />
			</main>
		</div>
	)
}

export default AppRenderMyProps
