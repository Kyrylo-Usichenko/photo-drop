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
    id: string | null,
    cloudinaryFolderAlbum: string | null,
  }
  isLoading: boolean,
  error: string | null,
  photos: any,
  errorMessage: string,
  url: string | null
  signatureData: {
    signature: string,
    timestamp: number,
    uploadPreset: string,
    folder: string,
  } | null
}

const initialState: UserState = {
  isAuth: false,
  user: {
    email: null,
    name: null,
    id: null,
    login: null
  },
  albums: null,
  album: {
    name: null,
    location: null,
    id: null,
    cloudinaryFolderAlbum: null,
  },
  isLoading: true,
  error: null,
  photos: [],
  errorMessage: '',
  url: null,
  signatureData: null
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
  setAlbumToStore(album: {name: string, location: string, id: string, cloudinary_folder_album: string }) {
    this.draftState.album.name = album.name;
    this.draftState.album.location = album.location;
    this.draftState.album.id = album.id;
    this.draftState.album.cloudinaryFolderAlbum = album.cloudinary_folder_album;
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
  clearAlbum() {
    this.draftState.album.id = null;
    this.draftState.album.name = null;
    this.draftState.album.location = null;
  }
  setUrl(url: string) {
    this.draftState.url = url;
  }
  setSignature(signatureData: {signature: string, timestamp: number, uploadPreset: string ,folder: string} | null) {
    this.draftState.signatureData = signatureData;
  }
}

export default createReducerFunction(User, initialState);
