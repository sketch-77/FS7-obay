import {
  ADD_PRODUCT_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./types";

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
export const removeFromCart = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: product });
};
export const increaseQuantity = (product) => (dispatch) => {
  dispatch({ type: INCREASE_QUANTITY, payload: product });
};
export const decreaseQuantity = (product) => (dispatch) => {
  dispatch({ type: DECREASE_QUANTITY, payload: product });
};
