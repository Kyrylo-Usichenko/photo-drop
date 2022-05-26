import { ThunkAction } from "redux-thunk";
import { CallHistoryMethodAction } from "connected-react-router";

import { State, Actions, api } from "./../index";

type HistoryActions =
  | CallHistoryMethodAction<[string, unknown?]>
  | CallHistoryMethodAction<[]>;

export type AsyncAction<R = void> = ThunkAction<
  R,
  State,
  typeof api,
  Actions | HistoryActions
>;
