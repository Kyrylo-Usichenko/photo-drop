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
  album: {
    name: string | null
  }
  isLoading: boolean
}

const initialState: UserState = {
  isAuth: false,
  user: {
    email: null,
    name: null,
    id: null,
    login: null
  },
  albums: [],
  album: {
    name: null
  },
  isLoading: true
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
  setAlbums(albums: any) {
    this.draftState.albums = albums;
  }
  setAlbumToStore(name: string) {
    this.draftState.album.name = name;
  }
  setLoading(value: boolean) {
    this.draftState.isLoading = value;
  }
}

export default createReducerFunction(User, initialState);
