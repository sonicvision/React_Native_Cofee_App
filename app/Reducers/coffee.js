import types from "../Types/coffee";

const initialState = {
  isLoading: true,
  isMapModeSelected: true,
  outlets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OUTLET_FETCH_PENDING:
      return { ...state, isLoading: true };

    case types.OUTLET_FETCH_SUCCEEDED:
      return { ...state, outlets: action.outlets, isLoading: false };
    case types.DISPLAY_MODE_CHANGED:
      return { ...state, isMapModeSelected: !state.isMapModeSelected };

    default:
      return state;
  }
};
