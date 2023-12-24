import {ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_SAVED_DESIGNS,DELETE_FROM_SAVED_DESIGNS } from './constants'


export function addToCart(item) {
    return{
        type:  ADD_TO_CART,
        data: item
    }
}

export function removeFromCart(item) {
    return{
        type:  REMOVE_FROM_CART,
        data: item
    }
}


export const addToSavedDesigns = (item) => {
    return {
      type: ADD_TO_SAVED_DESIGNS,
      payload: item,
    };
  };


  
  export const deleteFromSavedDesigns = (item) => {
    return {
      type: DELETE_FROM_SAVED_DESIGNS,
      payload: item,
    };
  };
  