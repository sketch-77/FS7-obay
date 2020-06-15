// import React, { fragment } from "react";
import { connect } from "react-redux";
import React, { useState, Fragment } from "react";
// import { productQuantity } from "..actions/productQuantity";
import "../Product.css";
import utils from "./utils";
function Cart({ cartProps }) {
  console.log(cartProps);
  const [count, setCount] = useState(0);
  let productsInCart = cartProps.products;
  // handleRemoveFromCart = (e, product) => {
  //   productsInCart = productsInCart.filter((a) => a.index !== product.index);
  //   return { productsInCart };
  // };
  // productsInCart = productsInCart.map
  return (
    <div className="shopping-cart">
      {" "}
      shopping cart
      <div className="alert alert-info">
        {productsInCart.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            You have {productsInCart.length} products in the Cart. <hr />
          </div>
        )}
        {productsInCart.length > 0 && <div className="item"></div>}
        <div className="container-products">
          <div className="product-header">
            <h5 className="product-title">PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
          </div>
          <div className="products">
            {productsInCart.map((product, index) => (
              <Fragment key={index}>
                <div className="product">
                  <ion-icon name="close-circle-outline"></ion-icon>
                  <img src={`/img/${product.img}`} />
                  <span className="sm-hide"> {product.title}</span>
                </div>
                <div className="price sm-hide">
                  {utils.formatCurrency(product.price)}
                </div>
                <div className="quantity">
                  <ion-icon
                    // onClick={() => productQuantity("decrease")}
                    className="decrease"
                    name="arrow-back-circle-outline"
                  ></ion-icon>
                  {/* <span>{product.numbers}</span> */}
                  <ion-icon
                    // onClick={() => productQuantity("increase")}
                    className="increase"
                    name="arrow-forward-circle-outline"
                  ></ion-icon>
                </div>
                <div className="total">
                  {" "}
                  Sum:
                  {utils.formatCurrency(
                    productsInCart.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
              </Fragment>
            ))}
          </div>
          <div className="cartTotalContainer">
            <h4 className="cartTotalTitle">Cart Total</h4>
            <h4 className="cartTotal">
              {utils.formatCurrency(
                productsInCart.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </h4>
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary"
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);
