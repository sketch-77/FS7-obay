import {
  ADD_PRODUCT_CART,
  GET_NUMBERS_CART,
  // INCREASE_QUANTITY,
  // DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: [],
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_CART:
      // productSelected = { ...state.products[action.payLoad] };
      // productSelected.numbers += 1;
      // productSelected.inCart = true;
      // console.log(productSelected);
      return {
        ...state,
        // cartNumbers: state.cartNumbers + 1,
        // cartCost: state.cartCost + state.products[action.payLoad].price,
        products: [...state.products, action.payLoad],
      };
    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    // case INCREASE_QUANTITY:
    //   // state.products['shoes']
    //   productSelected = { ...state.products[action.payLoad] };
    //   productSelected += 1;
    //   return {
    //     ...state,
    //     cartCost: state.cartCost + state.products[action.payLoad].price,
    //     products: {
    //       ...state.products,
    //       [action.payLoad]: productSelected,
    //     },
    //   };
    // case DECREASE_QUANTITY:
    //   productSelected = { ...state.products[action.payLoad] };
    //   productSelected -= 1;
    //   return {
    //     ...state,
    //     cartCost: state.cartCost - state.products[action.payLoad].price,
    //     products: {
    //       ...state.products,
    //       [action.payLoad]: productSelected,
    //     },
    //   };
    default:
      return state;
  }
};
