import React from "react";

const Cart = ({ cart, handleItemRemove }) => {
  return (
    <div>
      <h2>Order Summery</h2>
      <h5>{cart.length}</h5>
      {cart.map((ts) => (
        <p key={ts._id}>
          {ts.name}
          <button onClick={() => handleItemRemove(ts._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/* 
conditional operator
turnery operator 
and operator &&
or operator
*/
