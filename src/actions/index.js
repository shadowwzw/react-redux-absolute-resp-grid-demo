export const GET_IMAGES_START = 'GET_IMAGES_START';
export const GET_IMAGES_FINISH = 'GET_IMAGES_FINISH';
export const GET_IMAGES_ERROR = 'SELECT_REDDIT';

export const INC_RATE = 'INC_RATE';
export const DEC_RATE = 'DEC_RATE';

export const SET_WIDTH_CONTAINER = 'SET_WIDTH_CONTAINER';

export const SET_OPACITY = 'SET_OPACITY';

export const setOpacity = (opacity) => ({
  type: SET_OPACITY,
  opacity,
});

export const setContainerWidth = containerWidth => ({
  type: SET_WIDTH_CONTAINER,
  containerWidth,
});

export const incRate = id => ({
  type: INC_RATE,
  id,
});

export const decRate = id => ({
  type: DEC_RATE,
  id,
});

export const fetchImages = () => async (dispatch, getState) => {
  dispatch({ type: GET_IMAGES_START });
  try {
    const result = await fetch('images.json');
    const json = await result.json();
    dispatch({ type: GET_IMAGES_FINISH, images: json.images});
    setTimeout(()=>dispatch(setOpacity(1)), 100);
  } catch (e) {
    dispatch({ type: GET_IMAGES_ERROR, error: e.message});
  }
};
