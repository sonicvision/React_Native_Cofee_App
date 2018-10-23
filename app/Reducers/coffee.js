import types from "../Types/coffee";

const initialState = {
  isLoading: true,
  isMapModeSelected: false,
  outlets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OUTLET_FETCH_PENDING:
      console.log(action.outlets);
      return { ...state, isLoading: true };

    case types.OUTLET_FETCH_SUCCEEDED:
      console.log(action.outlets);
      return { ...state, outlets: action.outlets, isLoading: false };
    case types.DISPLAY_MODE_CHANGED:
      console.log(action.outlets);
      return { ...state, isMapModeSelected: !state.isMapModeSelected };

    default:
      return state;
  }
};
