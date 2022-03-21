import './Favourite.scss';
import Block from '../block/Block';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Favourite() {

    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('Favourites')));
    const [customs] = useState(JSON.parse(localStorage.getItem('Customs')));

    let tmp = [];
    function removeFavourite(id) {
        tmp = JSON.parse(localStorage.getItem('Favourites'));
        tmp.splice(tmp.indexOf(tmp.find(elem => elem.id === id)), 1);
        localStorage.setItem('Favourites', JSON.stringify(tmp))
        setFavourites(JSON.parse(localStorage.getItem('Favourites')));
    }

    let { id } = useParams();

    return (
        <div className="favourite container row">
            {
                id === 'favourites' ?
                    favourites && favourites.length ? favourites.map(product =>
                        <Block id={product.id} image={product.image} title={product.title} description={product.description} unLike={removeFavourite} />
                    ) : <h3>Empty</h3>
                    : id === 'custom' ?
                        customs && customs.length ? customs.map(product =>
                            <Block id={product.id} image={product.image ? product.image : ''} title={product.title} description={product.description} />
                        ) : <h3>Empty</h3>
                        : <h3>404</h3>
            }
        </div>
    )
}