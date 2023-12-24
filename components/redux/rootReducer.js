// import {combineReducers} from 'redux';
// import {reducer} from  './reducer';
// import { savedDesignsReducer } from './savedDesignsReducer';
// rootReducer.js
import { combineReducers } from 'redux';
import { reducer  } from './reducer';
import { savedDesignsReducer } from './savedDesignsReducer';

export default combineReducers({
  reducer, // This will be accessed as state.cart
  savedDesigns: savedDesignsReducer, // This will be accessed as state.savedDesigns
});
