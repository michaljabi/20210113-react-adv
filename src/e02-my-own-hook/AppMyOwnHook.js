import MemorableQuotes from './components/MemorableQuotes'
import OnlyYodaQuotes from './components/OnlyYodaQuotes'
import { useQuotes } from './useQuotes'

function AppMyOwnHook() {

	const { isLoading, quotes} = useQuotes();

	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #E02. My Own Hook </h1>
			</header>
			<main className="container">
				<div className="row">
					<MemorableQuotes isLoading={isLoading} quotes={quotes} />
					<OnlyYodaQuotes isLoading={isLoading} quotes={quotes.filter(q => q.author === 'Yoda' )} />
				</div>
			</main>
		</div>
	)
}

export default AppMyOwnHook
