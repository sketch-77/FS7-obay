<<<<<<< HEAD
import { GET_NUMBERS_CART } from "./types";
=======
import { GET_NUMBERS_CART } from "./types;";
>>>>>>> 744a5c3... front end redux
export const getNumbers = () => {
  return (dispatch) => {
    console.log("getting all cart numbers");
    dispatch({
      type: GET_NUMBERS_CART,
    });
  };
};
