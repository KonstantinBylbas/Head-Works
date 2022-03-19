import './Favourite.scss';
import Block from '../block/Block';
import { useState } from 'react';

export default function Favourite({unLike}) {

    const[favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('Favourites')));

    let tmp = [];
    function removeFavourite(id) {
		tmp = JSON.parse(localStorage.getItem('Favourites'));
		tmp.splice(tmp.indexOf(tmp.find(elem => elem.id === id)), 1);		
        localStorage.setItem('Favourites', JSON.stringify(tmp))
        setFavourites(JSON.parse(localStorage.getItem('Favourites')));
	}

    return (
        <div className="favourite container row">
            {
                favourites && favourites.length ? favourites.map(product =>
                    <Block key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} unLike={removeFavourite} />
                ) : <h3>Empty</h3>
            }
        </div>
    )
}