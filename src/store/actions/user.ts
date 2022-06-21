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
    | typeof userActions.clearAlbum
    | typeof userActions.setUrl
    | typeof userActions.setError>

export const setAuthData =
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

export const setAuth =
    (auth: boolean): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setAuth(auth));

            } catch (e: any) {
                dispatch(e)
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
export const clearAlbum =
    (): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.clearAlbum())
            } catch (e) {
                console.log(e);
            }
        };

export const addAlbum =
    (name: string, location: string, userId: string, date: string): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.createAlbum({
                    "name": name,
                    "location": location,
                    "cloudinary_folder_album": date
                });
                console.log(response)
                    dispatch(getAlbums(userId))


            } catch (e) {
                console.log(e);
            }
        };

export const addPhoto =
    (albumId: string): AsyncAction =>
        async (dispatch,
               _,
               {mainProtectedApi, mainApi}) => {
            try {
                const data = {
                    albumId: albumId,
                };
                const response = await mainProtectedApi.getAddPhotoUrlS3(data);
                const url = response.data.upload_url;
                dispatch(userActions.setUrl(url))
                // const response2 = await mainApi.setPhoto(fields, file, response.data.upload_url);
                // const newPhotoUrl = response.data.getUrl;
                // const newPhotos = [...photos]
                // newPhotos.push({url: newPhotoUrl})
                // dispatch(userActions.getPhotos(newPhotos));
            } catch (e) {
                console.log(e);
            }
        };

