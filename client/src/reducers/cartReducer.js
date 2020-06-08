import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/types";

const initialState = {
  cartNumbers: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return {
        cartNumbers: state.cartNumbers + 1,
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
