import {
  ADD_PRODUCT_CART,
  GET_NUMBERS_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  numbers: 0,
  products: [],
};
export default (state = initialState, action) => {
  const productSelected = action.payLoad;
  switch (action.type) {
    case ADD_PRODUCT_CART:
      let productInCart = state.products.find(
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
    case REMOVE_FROM_CART:
      const removeItemFromBasket = state.products.filter(
        (product) => product.id !== product.id
      );
      return { ...state, products: removeItemFromBasket };

    case INCREASE_QUANTITY:
      const itemInCart = state.products.find(
        (product) => product.id === productSelected.id
      );

      if (!itemInCart) {
        // I want to add it with an amount of 1
        productSelected.qty = 1;
        return {
          ...state,
          cartNumbers: [state.cartNumbers + 1],
          products: [...state.products, productSelected],
        };
      } else {
        const newProducts = [...state.products].map((product) => {
          if (product.id == productSelected.id)
            return { ...product, qty: product.qty + 1 };
          else return product;
        });

        return {
          ...state,
          cartNumbers: [state.cartNumbers + 1],
          products: newProducts,
        };
      }

    case DECREASE_QUANTITY:
      let productToDecrease = state.products.find(
        (product) => product.id === productSelected.id
      );

      if (!productToDecrease) {
        // I want to add it with an amount of 1
        productSelected.qty = 1;
        return {
          ...state,
          cartNumbers: [(state.cartNumbers -= 1)],
          products: [...state.products, productSelected],
        };
      } else {
        let newProducts = [...state.products].map((product) => {
          if (product.id == productSelected.id)
            return { ...product, qty: (product.qty -= 1) };
          else return product;
        });

        return {
          ...state,
          cartNumbers: [state.cartNumbers + 1],
          products: newProducts,
        };
      }
    default:
      return state;
  }
};
