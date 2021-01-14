import React from 'react'

function ProductCard ( {title, description, imgUrl}) {
	return (
		<div className="card">
			<img className="card-img" src={imgUrl} alt={title}/>
			<div className="card-body">
				<h5 className="card-title"> {title} </h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	)
}

export default ProductCard

// Do testów przyda nam się to:
// przezwany export (aliasowany celowo !!)
export { ProductCard as ProductCardForTest }
