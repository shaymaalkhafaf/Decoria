import React from "react";
import { useCart } from "react-use-cart";
import Checkout from './Checkout';
import LoginDilog from "./LoginDilog";



const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center"> Your Cart is Empty </h1>


  return (
      <section className="py-1 container">
    <div className="row justify-content-center">
        <div className="col-12">
            <h5> Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
            <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) =>{
                        return (
                        <tr key={index}>
                            <td>
                                <img src={item.img} style={{height: '8rem'}} />
                                </td>

                                <td>{item.title}</td> 
                                <td>{item.price}</td> 

                                <button className="btn btn-outline-dark ms-3" onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                <button className="btn btn-outline-dark ms-3" 
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >+</button>
                                <button className="btn btn-outline-dark btn-sm  ms-2"
                                onClick={() => removeItem (item.id)}
                                >Remove Item</button>


                        </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
        <div className="col-auto mt-3 ms-auto">
             <h2> Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto"> 
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
            <button className="btn btn-primary  ms-2"><LoginDilog /></button>

            {/* <button className="btn btn m-2"><Checkout /></button> */}
        </div>
    </div>
    </section>
  );
};

export default Cart;
