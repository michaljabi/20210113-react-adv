import MemorableQuotes from './components/MemorableQuotes'
import OnlyYodaQuotes from './components/OnlyYodaQuotes'

function AppMyOwnHook() {
	return (
		<div>
			<header className="jumbotron text-center bg-dark text-light">
				<h1> #E02. My Own Hook </h1>
			</header>
			<main className="container">
				<div className="row">
					<MemorableQuotes />
					<OnlyYodaQuotes isLoading={true} quotes={[]} />
				</div>
			</main>
		</div>
	)
}

export default AppMyOwnHook
