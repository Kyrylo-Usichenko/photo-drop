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
        this.instance.get<any>(`/presigned-post-url?name=${data.name}&album_id=${data.albumId}&file_type=${data.fileType}`, {
            headers: {
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }
        })

    public setPhoto = (fields: any, photo: any, url: string) =>
    {
        const formData = new FormData();
        formData.append('acl', "public-read");
        formData.append('key', fields.key);
        formData.append('bucket', fields.bucket);
        formData.append('X-Amz-Algorithm', fields["X-Amz-Algorithm"]);
        formData.append('X-Amz-Credential', fields["X-Amz-Credential"]);
        formData.append('X-Amz-Date', fields["X-Amz-Date"]);
        formData.append('X-Amz-Security-Token', fields["X-Amz-Security-Token"]);
        formData.append('Policy', fields.Policy);
        formData.append("X-Amz-Signature", fields["X-Amz-Signature"]);
        formData.append('file', photo);

        return  this.instance.post<any>(`${url}`,
            formData)

    }

}
