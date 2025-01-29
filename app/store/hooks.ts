import {
  type TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

import { AppState } from ".";

export const useDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;
