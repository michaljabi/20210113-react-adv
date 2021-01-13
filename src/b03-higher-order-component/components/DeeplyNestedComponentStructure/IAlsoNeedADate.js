import React from 'react'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

function formatFancyDate(inputDate) {
	if(inputDate instanceof Date) {
		return format(inputDate, 'qqqq | d LLLL | GGGG yyyy, Do');
	}
	return '[no-date]';
}

IAlsoNeedADate.propTypes = {
	date: PropTypes.object.isRequired
}

function IAlsoNeedADate ({date}) {
	return (
		<div className="bg-dark text-light rounded p-2 my-3">
			Co można zapisać: <strong className="bg-white text-dark p-1">
				{ formatFancyDate(date) }
			</strong>
		</div>
	)
}

export default IAlsoNeedADate
