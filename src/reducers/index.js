import { combineReducers } from 'redux'
import {
  GET_IMAGES_START,
  GET_IMAGES_FINISH,
  GET_IMAGES_ERROR,
  INC_RATE,
  DEC_RATE,
  SET_WIDTH_CONTAINER,
} from '../actions'

const calcPosForLiftOfImages  = (listOfImages, containerWidth) => [...listOfImages].sort((a, b) => (b.rate - a.rate) || (b.id - a.id))
  .map((item, index) => ({...item, left: `${33 * (index % 3)}%`, top: (containerWidth / 3) * Math.floor(index / 3) || 0 }));

const images = (state = {}, action) => {
  switch (action.type){
    case GET_IMAGES_START: return { ...state, loading: true };
    case GET_IMAGES_FINISH: return { ...state, loading: false, listOfImages: action.images };
    case GET_IMAGES_ERROR: return { ...state, loading: false, error: action.error };
    case INC_RATE: {
      const listOfImages = [...state.listOfImages.map(item => item.id === action.id ? {
        ...item,
        rate: item.rate + 1
      } : item)];
      return {
        ...state,
        listOfImages,
        sortedListWithPosition: calcPosForLiftOfImages(listOfImages, state.containerWidth || 0),
      };
    }
    case DEC_RATE: {
      const listOfImages = [...state.listOfImages.map(item => item.id === action.id ? {
        ...item,
        rate: item.rate - 1
      } : item)];
      return {
        ...state,
        listOfImages,
        sortedListWithPosition: calcPosForLiftOfImages(listOfImages, state.containerWidth || 0),
      };
    }
    case SET_WIDTH_CONTAINER: return {
      ...state,
      containerWidth: action.containerWidth,
    };
    default: return state;
  }
};

const rootReducer = combineReducers({
  images,
});

export default rootReducer
