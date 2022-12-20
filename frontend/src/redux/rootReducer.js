import { combineReducers } from "redux";

import list from "./list/reducer";
import modal from "./modal/reducer";

export const rootReducer = combineReducers({ list, modal });
