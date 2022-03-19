import './Random.scss';
import { useEffect, useState } from 'react';
import Block from '../block/Block';

export default function Random() {

    useEffect(() => {
        newProduct();
    }, [])

    const [product, setProduct] = useState({});

	function newProduct() {
		fetch('https://www.themealdb.com/api/json/v1/1/random.php')
			.then((data) => {
				if (data.ok)
					return data.json();
			})
			.then(data => setProduct({ id: data.meals[0].idMeal, image: data.meals[0].strMealThumb, title: data.meals[0].strMeal, description: data.meals[0].strInstructions }))
	}

	let tmp = [];
	function addFavourite(id, image, title, description) {
		let likedProduct = {
			id: id,
			image: image,
			title: title,
			description: description
		}

		if (localStorage.getItem('Favourites'))
			tmp = JSON.parse(localStorage.getItem('Favourites'));
		tmp.push(likedProduct);
		localStorage.setItem('Favourites', JSON.stringify(tmp))

		newProduct();
	}

    return (
        <div className="random container">
            <Block key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} skip={newProduct} like={addFavourite} />
        </div >
    )
}