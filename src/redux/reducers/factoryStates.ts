import {FactoryState} from "../../types";
import {Action, RESET, UPDATE_FACTORY_BOOST, UPDATE_FACTORY_COUNT, UPDATE_FACTORY_STATES} from "../actions/actionTypes";

const initialState: { [guid: number]: FactoryState } = {};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case UPDATE_FACTORY_COUNT: {
      let newState = {...state};
      newState[action.payload.guid] = {
        boost: (newState[action.payload.guid] && newState[action.payload.guid].boost) || 100,
        count: action.payload.count,
        neededTpmin: (newState[action.payload.guid] && newState[action.payload.guid].neededTpmin) || 0,
      };
      return newState;
    }
    case UPDATE_FACTORY_BOOST: {
      let newState = {...state};
      newState[action.payload.guid] = {
        boost: action.payload.boost,
        count: (newState[action.payload.guid] && newState[action.payload.guid].count) || 0,
        neededTpmin: (newState[action.payload.guid] && newState[action.payload.guid].neededTpmin) || 0,
      };
      return newState;
    }
    case UPDATE_FACTORY_STATES: {
      return action.payload.newFactoryStates;
    }
    case RESET: {
      return {...initialState};
    }
    default: {
      return {...state};
    }
  }
}