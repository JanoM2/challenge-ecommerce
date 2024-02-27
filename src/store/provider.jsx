"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export function DataProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
