import types from "../Types/gallery";

const initialState = {
  images: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.IMAGES_FETCH_PENDING:
      //   console.log("IMAGES_FETCH_PENDING");
      return { ...state, isLoading: true };

    case types.IMAGES_FETCH_SUCCEEDED:
      //   console.log("IMAGES_FETCH_SUCCEEDED" + JSON.stringify(action.images));
      return { ...state, images: action.images, isLoading: false };
    case types.IMAGES_FETCH_FAILED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
