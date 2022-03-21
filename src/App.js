import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Random from './components/random/Random';
import Favourite from './components/favourite/Favourite';
import Error from './components/error/Error';

export default function App() {

	return (
		<div className="App">

			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path='*' element={<Error />} />

					<Route path='/Head-Works/' element={<Random />} />

					<Route path='/Head-Works/tabs/:id' element={<Favourite />} />
				</Routes>

			</BrowserRouter>

		</div>
	);
}