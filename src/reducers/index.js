import { combineReducers } from 'redux'
import {
  GET_IMAGES_START, GET_IMAGES_FINISH, GET_IMAGES_ERROR
} from '../actions'

const images = (state = {}, action) => {
  switch (action.type){
    case GET_IMAGES_START: return { ...state, loading: true };
    case GET_IMAGES_FINISH: return { ...state, loading: true, listOfImages: action.images.map(item => ({...item, rate: 0 })) };
    default: return state;
  }
};

const rootReducer = combineReducers({
  images,
});

export default rootReducer
