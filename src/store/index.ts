import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import userReducer from "./reducers/user";
import { createBrowserHistory } from "history";
import Main from "../api/main";
import { UserActions } from "./actions/user";
import MainProtected from "../api/main-protected";
export const history = createBrowserHistory();

export const api = {
  mainApi: Main.getInstance(),
  mainProtectedApi: MainProtected.getInstance(),
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  userReducer,
});

const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api))
);

export type State = ReturnType<typeof rootReducer>;
export type Actions = UserActions;

export default createStore(rootReducer, enhancer);
