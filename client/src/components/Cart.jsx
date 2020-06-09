import React, { fragment } from "react";
import { connect } from "react-redux";
import shoes from "../images/shoes.jpg";
import shirt from "../images/shirt.jpg";

function Cart({ cartProps }) {
  console.log(cartProps);

  let productsInCart = [];

  //looping throught the keys to loop through objects inside
  Object.keys(cartProps.products).forEach(function (item) {
    console.log(item);
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
    console.log(productsInCart);
  });

  productImages = [shoes, shirt];

  productsInCart = productsInCart.map((product, index) => {
    return (
      <fragment>
        <div className="product">
          {" "}
          <i className="fas fa-window-close"></i>{" "}
          <img src={productImages[index]} />
          <span className="sm-hide"> {product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <i className="fas fa-chevron-up"></i>
          <span>{product.numbers}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </fragment>
    );
  });
  return (
    <div>
      <h1>This is the cart Page</h1>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);
