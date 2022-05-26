import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
  isAuth: boolean;
  user: {
    email: string | null,
    name: string | null,
    id: string | null,
    login: string | null,
  }
  albums: any
}

const initialState: UserState = {
  isAuth: false,
  user: {
    email: null,
    name: null,
    id: null,
    login: null
  },
  albums: []
};


export class User extends ImmerReducer<UserState> {
  setAuth(isAuth: boolean) {
    this.draftState.isAuth = isAuth;
  }
  setUser(user: { email: null, fullname: null, id: null, login: null }) {
    this.draftState.user.id = user.id;
    this.draftState.user.name = user.fullname;
    this.draftState.user.login = user.login;
    this.draftState.user.email = user.email;
  }
  setAlbums(asd: any) {
    this.draftState.albums = asd;
  }
}

export default createReducerFunction(User, initialState);
