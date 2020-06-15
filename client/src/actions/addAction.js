import { ADD_PRODUCT_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch) => {
    console.log("adding to cart");
    //Whenever I click on a product I want to know what product it is
    console.log("product: ", product);
    dispatch({
      type: ADD_PRODUCT_CART,
      payLoad: product,
    });
  };
};
export const removeFromCart = (index) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: index });
};
