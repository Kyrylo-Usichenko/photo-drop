import { User } from "../reducers/user";
import { createActionCreators } from "immer-reducer";
import { AsyncAction } from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.setUser
    | typeof userActions.getAlbums
    | typeof userActions.setAlbumToStore
    | typeof userActions.setLoading
    | typeof userActions.getPhotos
    | typeof userActions.setError>

export const setAuth =
  (login: string, password: string): AsyncAction =>
  async (dispatch, _, { mainApi }) => {
    try {
      const AuthData = `${login};${password}`;
      const auth_data: string = btoa(AuthData);
      const response = await mainApi.login(auth_data);
        // @ts-ignore
        if (response.status === 'ERROR'){
            dispatch(userActions.setError(response.status))
        } else {
            dispatch(userActions.setError(null))

        }
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

export const getAlbums =
    (userId: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.getAlbums(userId);
                dispatch(userActions.getAlbums(response.data))
                dispatch(userActions.setLoading(false))
            } catch (e) {
                console.log(e);
            }
        };

export const getAlbum =
    (albumId?: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.getAlbum(albumId);
                dispatch(userActions.setAlbumToStore(response.data))
            } catch (e) {
                console.log(e);
            }
        };

export const getPhotos =
    (albumId?: string): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const response = await mainProtectedApi.getPhotos(albumId);
                console.log('new data')
                console.log(response)
                    dispatch(userActions.getPhotos(response.data))
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
                    dispatch(getAlbums(userId))

            } catch (e) {
                console.log(e);
            }
        };

export const addPhoto =
    (name: string, ownerId: string, albumId: string, fileType: string, file: any): AsyncAction =>
        async (dispatch,
               _,
               { mainProtectedApi }) => {
            try {
                const data = {
                    name: name,
                    ownerId: ownerId,
                    albumId: albumId,
                    fileType: fileType
                };
                const response = await mainProtectedApi.getAddPhotoUrlS3(data);
                const fields = response.data.fields;
                const response2 = await mainProtectedApi.setPhoto(fields, file , response.data.url);
                console.log(response2)
                const photos = await dispatch(getPhotos(albumId));
                console.log(photos)





            } catch (e) {
                console.log(e);
            }
        };

