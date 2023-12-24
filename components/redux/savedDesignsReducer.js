// savedDesignsReducer.js
import { ADD_TO_SAVED_DESIGNS,DELETE_FROM_SAVED_DESIGNS } from './constants';

const initialSavedDesignsState = [];

export const savedDesignsReducer = (state = initialSavedDesignsState, action) => {
  switch (action.type) {
    case ADD_TO_SAVED_DESIGNS:
      // Use action.payload instead of action.data
      return [...state, action.payload];

      case DELETE_FROM_SAVED_DESIGNS:
        return state.filter((design) => design !== action.payload);


    default:
      return state;

     
     
  }
};

