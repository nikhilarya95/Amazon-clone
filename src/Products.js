import React from 'react'
import './Products.css';
import { useStateValue } from './StateProvider';

function Products({id, title, image, price, rating}) {
   const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
   };

    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>&#11088;</p>
                    ))
                    
                }
            </div>
        </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products
