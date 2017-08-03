import { combineReducers } from 'redux'
import {
  GET_IMAGES_START,
  GET_IMAGES_FINISH,
  GET_IMAGES_ERROR,
  INC_RATE,
  DEC_RATE
} from '../actions'

const images = (state = {}, action) => {
  switch (action.type){
    case GET_IMAGES_START: return { ...state, loading: true };
    case GET_IMAGES_FINISH: return { ...state, loading: true, listOfImages: action.images };
    case INC_RATE: return { ...state, listOfImages: [ ...state.listOfImages.map(item => item.id === action.id ? { ...item, rate: item.rate+1 } : item) ] };
    case DEC_RATE: return { ...state, listOfImages: [ ...state.listOfImages.map(item => item.id === action.id ? { ...item, rate: item.rate-1 } : item) ] };
    default: return state;
  }
};

const rootReducer = combineReducers({
  images,
});

export default rootReducer
