import { combineReducers } from "redux";

import list from "./list/reducer";
import modal from "./modal/reducer";

const rootReducer = combineReducers({ list, modal });

export default rootReducer;