import React from 'react'

function CounterReport ({notComing = 0, maybeComing = 0, willCome = 0}) {
	return (
		<div className="d-flex justify-content-end mt-3">
			<strong className="mr-2 p-2">Podsumowanie:</strong>
			<div className="mr-2 py-2 px-3 bg-primary text-light">
				{notComing+maybeComing+willCome}
			</div>
			<div className="mr-2 p-2 bg-danger text-light">
				Nie przyjdzie: <span className="badge badge-light">{notComing}</span>
			</div>
			<div className="mr-2 p-2 bg-secondary text-light">
				Może przyjść: <span className="badge badge-light">{maybeComing}</span>
			</div>
			<div className="mr-2 p-2 bg-success text-light">
				Przybędą: <span className="badge badge-light">{willCome} </span>
			</div>
		</div>
	)
}

export default CounterReport;
