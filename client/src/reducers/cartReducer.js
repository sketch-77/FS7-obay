import {
  ADD_PRODUCT_CART,
  GET_NUMBERS_CART,
  REMOVE_FROM_CART,
  // INCREASE_QUANTITY,
  // DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  numbers: 0,
  products: [],
};
export default (state = initialState, action) => {
  let productSelected = action.payLoad;
  switch (action.type) {
    case ADD_PRODUCT_CART:
      const productInCart = state.products.find(
        (e) => e.id === productSelected.id
      );

      if (!productInCart) {
        // I want to add it with an amount of 1
        productSelected.qty = 1;
        return {
          ...state,
          cartNumbers: [state.cartNumbers + 1],
          products: [...state.products, productSelected],
        };
      } else {
        const newProducts = [...state.products].map((e) => {
          if (e.id == productSelected.id) return { ...e, qty: e.qty + 1 };
          else return e;
        });

        return {
          ...state,
          cartNumbers: [state.cartNumbers + 1],
          products: newProducts,
        };
      }

    case GET_NUMBERS_CART:
      return {
        ...state,
      };
    // case REMOVE_FROM_CART:
    //   return state.filter((products) => product.index !== action.payload.index);
    // case INCREASE_QUANTITY:
    //   // state.products['shoes']
    //   productSelected = [ ...state.products[action.payLoad] ];
    //   productSelected += 1;
    //   return {
    //     ...state,
    //     cartCost: state.cartCost + state.products[action.payLoad].price,
    //     products: [
    //       ...state.products,
    //       [action.payLoad]: productSelected,
    //     ]
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
