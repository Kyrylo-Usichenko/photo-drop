import HttpClientProtected from './http-client-protected';
import TokensLocalStorage from "../utils/local-storage/TokensLocalStorage";


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
        this.instance.get<any>(`/album/${albumId}`);

    public getPhotos = (albumId?: string) =>
        this.instance.get<any>(`/photos/${albumId}`);

    public createAlbum = (data: {}) =>
        this.instance.post<any>('/album/create', data);

    public editAlbum = (data: {}) =>
        this.instance.patch<any>('/album/edit', {
            headers: {
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }, data
        });
    public getAddPhotoUrlS3 = (data: { name: string, ownerId: string, albumId: string, fileType: string }) =>
        this.instance.get<any>(`/presigned-post-url?name=${data.name}&album_id=${data.albumId}&file_type=${data.fileType}`)



}
