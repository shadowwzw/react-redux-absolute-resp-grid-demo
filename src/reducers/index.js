import { combineReducers } from 'redux'
import {
  GET_IMAGES_START, GET_IMAGES_FINISH, GET_IMAGES_ERROR
} from '../actions'

const images = (state = {}, action) => {
  switch (action){
    case GET_IMAGES_START: break;
    default: return state;
  }
};

const rootReducer = combineReducers({
  images,
});

export default rootReducer
