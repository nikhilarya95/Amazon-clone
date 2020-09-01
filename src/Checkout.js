import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket Is Empty</h2>
                </div>
            )  :  (
                <div>
                     <h2 className="checkout_title" >Your Basket Is </h2>

                     {basket?.map((item) => {
                         
                        return(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                     );
                    })}
                     
                </div>
            )}
             </div>
             {basket.length > 0 &&(
                 <div className="chekout_right">
                   
                 <Subtotal/>
                 </div>
             )}
        </div>
    );
}

export default Checkout
