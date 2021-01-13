import React from 'react'

function ProductRow ( {title, description, imgUrl}) {
	return (
		<tr>
			<td>
				<img className="img-responsive" height="100" src={imgUrl} alt={title}/>
			</td>
			<td><strong>{title}</strong></td>
			<td>{description}</td>
		</tr>
	)
}

export default ProductRow
