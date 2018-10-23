import types from "../Types/coffee";

const actions = {
  fetchOutlets: () => ({ type: types.OUTLET_FETCH_REQUESTED }),
  displayModeChanged: () => ({ type: types.DISPLAY_MODE_CHANGED })
};

export default actions;
