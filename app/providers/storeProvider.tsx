"use client";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../store";
import { Props } from "./types";

export default function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
