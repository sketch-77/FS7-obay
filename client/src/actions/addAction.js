import { ADD_PRODUCT_CART } from "./types";

export const addToCart = () => {
  return (dispatch) => {
    console.log("adding to cart");
    dispatch({
      type: ADD_PRODUCT_CART,
    });
  };
};
