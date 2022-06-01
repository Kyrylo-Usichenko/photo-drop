import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.setUser
    | typeof userActions.getAlbums
    | typeof userActions.setAlbumToStore
    | typeof userActions.setLoading
    | typeof userActions.getPhotos
    | typeof userActions.setMessageError
    | typeof userActions.setError>

export const setAuth =
    (login: string, password: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const AuthData = `${login};${password}`;
                const auth_data: string = btoa(AuthData);
                const response = await mainApi.login(auth_data);
                // @ts-ignore
                if (response.status === 'ERROR') {
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
               {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getAlbums(userId);
                dispatch(userActions.getAlbums(response.data))
                dispatch(userActions.setLoading(false))
            } catch (e: any) {
                dispatch(setMessageError(e.response.data.message))
            }
        };


export const setLoading = (loading: boolean) =>
        (dispatch: any) => {
                dispatch(userActions.setLoading(loading))
        };

export const getAlbum =
    (albumId?: string): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getAlbum(albumId);
                dispatch(userActions.setAlbumToStore(response.data))
            } catch (e: any) {
                console.log(e)

            }
        };

export const setMessageError =
    (message: string): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setMessageError(message))
            } catch (e) {
                console.log(e);

            }
        };

export const getPhotos =
    (albumId?: string): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getPhotos(albumId);
                dispatch(userActions.getPhotos(response.data))
                dispatch(userActions.setLoading(false))
            } catch (e) {
                console.log(e);
            }
        };

export const clearPhotos =
    (): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.getPhotos([]))
            } catch (e) {
                console.log(e);
            }
        };

export const addAlbum =
    (name: string, location: string, userId: string): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.createAlbum({
                    "name": name,
                    "location": location
                });
                    dispatch(getAlbums(userId))


            } catch (e) {
                console.log(e);
            }
        };

export const addPhoto =
    (name: string, ownerId: string, albumId: string, fileType: string, file: any, photos: any): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi, mainApi}) => {
            try {
                const data = {
                    name: name,
                    ownerId: ownerId,
                    albumId: albumId,
                    fileType: fileType
                };
                const response = await mainProtectedApi.getAddPhotoUrlS3(data);
                const fields = response.data.fields;
                const response2 = await mainApi.setPhoto(fields, file, response.data.url);
                const newPhotoUrl = response.data.getUrl;
                const newPhotos = {...photos}
                console.log(newPhotos)
                dispatch(userActions.getPhotos(newPhotos));
            } catch (e) {
                console.log(e);
            }
        };

