import { Header } from './components/Header/Header'
import { Wrapper } from './components/Wrapper/Wrapper'
import { GlobalStyled } from './global/global'
export function App() {
	return (
		<>
			<GlobalStyled />
			<Header />
			<Wrapper />
		</>
	)
}
