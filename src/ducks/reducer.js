// import { Reducer } from "../../node_modules/redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_STEP1 = "UPDATE_STEP1",
  UPDATE_STEP2 = "UPDATE_STEP2",
  UPDATE_STEP3 = "UPDATE_STEP3";

const CANCEL = "CANCEL";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP1:
      return Object.assign({}, state, {
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip
      });

    case UPDATE_STEP2:
      return Object.assign({}, state, { img: action.payload });

    case UPDATE_STEP3:
      return Object.assign({}, state, {
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      });

    case CANCEL:
      return initialState;

    default:
      return state;
  }
}

export function step1(name, address, city, state, zip) {
  return {
    type: UPDATE_STEP1,
    payload: { name, address, city, state, zip }
  };
}

export function step2(img) {
  return {
    type: UPDATE_STEP2,
    payload: img
  };
}

export function step3(mortgage, rent) {
  return {
    type: UPDATE_STEP3,
    payload: { mortgage, rent }
  };
}

export function cancel() {
  return {
    type: CANCEL,
    payload: initialState
  };
}

export default reducer;
