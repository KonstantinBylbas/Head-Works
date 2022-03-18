import './Random.scss';
import Button from '../button/Button';
import { useEffect, useState } from 'react';
import ImagePlaceholder from '../assets/placeholder.png';

export default function Random() {

    const [product, setProduct] = useState({});

    function newProduct() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((data) => {
                if (data.ok)
                    return data.json();
            })
            .then(data => setProduct({ id: data.meals[0].idMeal, image: data.meals[0].strMealThumb, title: data.meals[0].strMeal, description: data.meals[0].strInstructions }))
    }

    useEffect(() => {
        newProduct();
    }, [])

    let tmp = [];
    function addFavourite() {
        if (localStorage.getItem('Favourites'))
            tmp = localStorage.getItem('Favourites')

        tmp.push(product);
        localStorage.setItem('Favourites', [tmp])
    }

    return (
        <div className="random container">
            <div className="block">
                <svg viewBox="0 0 91 91">
                    <g>
                        <path d="M45.254,23.905c1.254-2.551,2.703-4.711,4.561-6.586c7.412-7.486,19.775-8.174,27.914-1.449    c6.406,5.292,9.643,12.189,9.838,20.472c0.078,3.364-1.174,6.432-2.729,9.359c-3.101,5.835-7.378,10.767-11.972,15.451    c-8.201,8.353-17.287,15.664-26.803,22.452c-0.42,0.306-0.741,0.648-1.404,0.179c-10.374-7.422-20.262-15.41-29.021-24.726    c-3.734-3.972-7.111-8.227-9.813-12.998C1.143,37.789,2.5,29.864,7.17,22.197c3.484-5.717,8.517-9.439,15.196-10.657    c9.1-1.646,17.872,2.771,22.235,11.123C44.781,23.019,44.96,23.355,45.254,23.905z" fill="#fff" />
                        <path d="M45.255,86.526c-0.71,0.001-1.399-0.233-2.05-0.693c-12.177-8.712-21.516-16.671-29.398-25.055    c-4.289-4.561-7.615-8.971-10.168-13.481c-4.766-8.415-4.312-17.054,1.385-26.406c3.979-6.526,9.662-10.504,16.893-11.822    c1.4-0.254,2.818-0.382,4.219-0.382c7.645,0,14.736,3.849,19.128,10.215c0.849-1.229,1.767-2.341,2.767-3.351    c4.297-4.339,10.349-6.828,16.604-6.828c5.409,0,10.628,1.851,14.694,5.211c6.918,5.714,10.535,13.233,10.75,22.349    c0.097,4.17-1.564,7.854-3.022,10.598c-3.464,6.52-8.21,11.763-12.396,16.031c-7.453,7.591-16.33,15.028-27.139,22.738    L47.455,85.7C47.098,85.969,46.355,86.526,45.255,86.526z M26.135,13.712c-1.102,0-2.219,0.101-3.321,0.301    c-5.757,1.049-10.299,4.243-13.498,9.492c-4.729,7.763-5.144,14.536-1.304,21.316c2.353,4.157,5.445,8.25,9.455,12.516    c7.463,7.936,16.307,15.507,27.771,23.769c10.289-7.384,18.74-14.487,25.834-21.714c3.934-4.011,8.382-8.915,11.546-14.869    c1.243-2.341,2.506-5.137,2.437-8.123c-0.18-7.592-3.184-13.848-8.927-18.592c-3.168-2.618-7.25-4.06-11.494-4.06    c-4.924,0-9.675,1.946-13.034,5.339c-1.596,1.61-2.896,3.493-4.092,5.927c-0.416,0.846-1.27,1.388-2.213,1.403    c-0.014,0.001-0.027,0.001-0.041,0.001c-0.928,0-1.779-0.511-2.217-1.33c-0.307-0.572-0.492-0.924-0.68-1.294    C39.066,17.493,32.994,13.712,26.135,13.712z" fill="#000" />
                    </g>
                </svg>
                <img src={product.image ? product.image : ImagePlaceholder} alt="" />
                <div className="block_text">
                    <h5>
                        {product.title}
                    </h5>
                    <p>
                        {product.description}
                    </p>
                </div>

                <div className="row">
                    <Button txt='Skip' handlerClick={newProduct} />
                    <Button txt='Like' handlerClick={addFavourite} />
                </div>
            </div>
        </div >
    )
}