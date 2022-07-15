import HttpClientProtected from './http-client-protected';
import TokensLocalStorage from "../utils/local-storage/TokensLocalStorage";
import {getSignature} from "../store/actions/user";


export default class MainProtected extends HttpClientProtected {
    private static instanceCached: MainProtected;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!MainProtected.instanceCached) {
            MainProtected.instanceCached = new MainProtected();
        }

        return MainProtected.instanceCached;
    };

    public getAlbums = (userId: {}) =>
        this.instance.get<any>(`/albums`);

    public getAlbum = (albumId?: string) =>
        this.instance.get<any>(`/albums/${albumId}`);

    public getPhotos = (albumId?: string) =>
        this.instance.get<any>(`/photos/${albumId}`);

    public createAlbum = (data: {}) =>
        this.instance.post<any>('/albums/create', data);

    public editAlbum = (data: {}) =>
        this.instance.patch<any>('/albums/edit', {
            headers: {
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }, data
        });
    public getAddPhotoUrlS3 = (data: { albumId: string }) =>
        this.instance.get<any>(`/upload-url/${data.albumId}`)
    public getSignature = (
        cloudinaryFolderAlbum: string
    ) =>
        this.instance.get<any>(`https://7vylpks0dg.execute-api.us-east-1.amazonaws.com/dev/photos/upload-signature/${cloudinaryFolderAlbum}`)

}
