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
    name: string | null,
    location: string | null,
    id: string | null
  }
  isLoading: boolean,
  error: string | null,
  photos: any,
  errorMessage: string
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
    name: null,
    location: null,
    id: null
  },
  isLoading: true,
  error: null,
  photos: [],
  errorMessage: ''
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
  getAlbums(albums: any) {
    this.draftState.albums = albums;
  }
  setAlbumToStore(album: {name: string, location: string, id: string}) {
    this.draftState.album.name = album.name;
    this.draftState.album.location = album.location;
    this.draftState.album.id = album.id;
  }
  setLoading(value: boolean) {
    this.draftState.isLoading = value;
  }
  setError(error: string | null) {
    this.draftState.error = error;
  }
  getPhotos(photos: any) {
    this.draftState.photos = photos;
  }
  setMessageError(message: string) {
    this.draftState.errorMessage = message;
  }
}

export default createReducerFunction(User, initialState);
