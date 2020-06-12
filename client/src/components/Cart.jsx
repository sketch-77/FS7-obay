import React, { fragment } from "react";
import { connect } from "react-redux";
// import { productQuantity } from "..actions/productQuantity";
import "../Product.css";

import shoes from "../images/shoes.jpg";
import shirt from "../images/shirt.jpg";

function Cart({ cartProps }) {
  console.log(cartProps);

  let productsInCart = cartProps.products;

  //looping throught the keys to loop through objects inside
  // Object.keys(cartProps.products).forEach(function (item) {
  //   console.log(item);
  //   if (cartProps.products[item].inCart) {
  //     productsInCart.push(cartProps.products[item]);
  //   }
  //   console.log(productsInCart);
  // });

  const productImages = [shoes, shirt];

  productsInCart = productsInCart.map((product, index) => {
    return (
      <fragment key={index}>
        <div className="product">
          <ion-icon name="close-circle-outline"></ion-icon>
          <img src={`/img/${product.img}`} />
          <span className="sm-hide"> {product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <ion-icon
            // onClick={() => productQuantity("decrease")}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            // onClick={() => productQuantity("increase")}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="cartTotalContainer">
        <h4 className="cartTotalTitle">Cart Total</h4>
        <h4 className="cartTotal">{cartProps.cartCost},00</h4>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);

//{ productQuantity } rember to add this to export prop
