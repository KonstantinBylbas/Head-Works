import './App.scss';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav/Nav';

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Nav />

        <Routes>
          <Route to='*' />

          <Route to='/' />

          <Route to='/favourites' />
        </Routes>

      </BrowserRouter>

    </div>
  );
}