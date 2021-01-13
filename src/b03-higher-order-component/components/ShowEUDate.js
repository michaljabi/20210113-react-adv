import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

function formatUEDate(inputDate) {
	if(inputDate instanceof Date) {
		return format(inputDate, 'dd.MM.yyyy');
	}
	return '[no-date]';
}

ShowEUDate.propTypes = {
	date: PropTypes.object.isRequired
}

function ShowEUDate ( {date}) {
	return (
		<div className="bg-dark text-light rounded p-2 my-3">
			Dzisiaj jest: <strong className="bg-white text-dark p-1">{formatUEDate(date)}</strong>
		</div>
	)
}

export default ShowEUDate
