export const GET_IMAGES_START = 'GET_IMAGES_START';
export const GET_IMAGES_FINISH = 'GET_IMAGES_FINISH';
export const GET_IMAGES_ERROR = 'SELECT_REDDIT';

export const INC_RATE = 'INC_RATE';
export const DEC_RATE = 'DEC_RATE';

export const incRate = () => ({
  type: INC_RATE
});

export const decRate = () => ({
  type: DEC_RATE
});

export const fetchImages = () => async (dispatch, getState) => {
  dispatch({ type: GET_IMAGES_START });
  const result = await fetch('images.json');
  const json = await result.json();
  console.log('json = ', json);
  dispatch({ type: GET_IMAGES_FINISH, images: json.images});
    return Promise.resolve();
};
