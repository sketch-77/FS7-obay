import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/types";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: {
    shoes: {
      name: "shoes",
      price: 50.0,
      numbers: 0,
      inCart: false,
    },
    shirt: {
      name: "shirt",
      price: 10,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      let addQuantity = { ...state.products[action.payLoad] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);
      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartCost: state.cartCost + state.products[action.payLoad].price,
        products: {
          ...state.products,
          [action.payLoad]: addQuantity,
        },
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
