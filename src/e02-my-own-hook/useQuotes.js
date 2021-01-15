import { useState, useEffect } from 'react';
import swQuotesService from './services/swQuotesService'


export function useQuotes(name) {

	const [isLoading, setIsLoading] = useState(true);
	const [quotes, setQuotes] = useState([]);

	useEffect( () => {
		setIsLoading(true)
		swQuotesService
			.getAll()
			.then((quotes) => {
				const filteredQuotes = name ? quotes.filter(q => q.author === name) : quotes;
				setQuotes(filteredQuotes)
				setIsLoading(false)
			})
	}, [name])


	return {isLoading, quotes}
}
