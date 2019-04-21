import {Action, UPDATE_POPULATION} from "../actions/actionTypes";

const initialState: {[guid: number]: number} = {};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case UPDATE_POPULATION: {
      let newState = {...state};
      newState[action.payload.guid] = action.payload.population;
      return newState;
    }
    default: {
      return state;
    }
  }
}