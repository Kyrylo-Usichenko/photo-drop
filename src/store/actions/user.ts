import { User } from "../reducers/user";
import { createActionCreators } from "immer-reducer";
import { AsyncAction } from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.setUser
    | typeof userActions.setAlbums
    | typeof userActions.setAlbumToStore>;

export const setAuth =
  (login: string, password: string): AsyncAction =>
  async (dispatch, _, { mainApi }) => {
    try {
      const AuthData = `${login};${password}`;
      const auth_data: string = btoa(AuthData);
      const response = await mainApi.login(auth_data);
      // if(response.data == undefined){
      //     console.log('((')
      // }
      const accessToken: string = response.data.access_token;
      const user = response.data.user_data;
      const storage = TokensLocalStorage.getInstance();
      storage.setAccessToken(accessToken);
      storage.setUser(user);
      dispatch(userActions.setAuth(true));
      dispatch(userActions.setUser(user));
    } catch (e) {
      console.log(e);
    }
  };

export const setAlbums =
    (userId: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.getAlbums(userId);
                dispatch(userActions.setAlbums(response.data))
            } catch (e) {
                console.log(e);
            }
        };

export const setAlbum =
    (albumId?: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.getAlbum(albumId);
                dispatch(userActions.setAlbumToStore(response.data.name))
            } catch (e) {
                console.log(e);
            }
        };

export const addAlbum =
    (name: string, location: string, userId: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.createAlbum({
                    "owner_id": userId,
                    "name": name,
                    "location": location
                });
                dispatch(setAlbums(userId))
            } catch (e) {
                console.log(e);
            }
        };

