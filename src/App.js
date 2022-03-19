import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Random from './components/random/Random';
import Favourite from './components/favourite/Favourite';

export default function App() {

	return (
		<div className="App">

			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path='*' />

					<Route path='/' element={<Random />} />

					<Route path='/favourites' element={<Favourite />} />
				</Routes>

			</BrowserRouter>

		</div>
	);
}