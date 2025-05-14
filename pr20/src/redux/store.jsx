import React from "react";

import { counterReducer } from "./counterReducer";
import { createStore } from "redux";

export const store = createStore(counterReducer);
