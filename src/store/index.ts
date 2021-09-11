import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./reducer";

const makeStore = () => {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });