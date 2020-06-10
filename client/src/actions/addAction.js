import { ADD_PRODUCT_CART } from "./types";

export const addToCart = (productName) => {
  return (dispatch) => {
    console.log("adding to cart");
    //Whenever I click on a product I want to know what product it is
    console.log("product: ", productName);
    dispatch({
      type: ADD_PRODUCT_CART,
      payLoad: productName,
    });
  };
};
