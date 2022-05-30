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
        this.instance.get<any>(`/albums/${userId}`, { headers:{
            'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }});

    public getAlbum = (albumId?: string) =>
        this.instance.get<any>(`/album/${albumId}`, { headers:{
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }
        });

    public getPhotos = (albumId?: string) =>
        this.instance.get<any>(`/photos/${albumId}`, { headers:{
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }
        });

    public createAlbum = (data: {}) =>
        this.instance.post<any>('/album/create', data,{ headers:{
            'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }});

    public editAlbum = (data: {}) =>
        this.instance.patch<any>('/album/edit', { headers:{
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }, data
        });
    public getAddPhotoUrlS3 = (data: {name: string, ownerId: string, albumId: string, fileType: string}) =>
        this.instance.get<any>(`/presigned-post-url?name=${data.name}&owner_id=d3acd1a9-a945-4ebe-be4e-ea747dac3bfe&album_id=${data.albumId}&file_type=${data.fileType}`, { headers:{
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }
        })

    public setPhoto = (fields: any, file: any) =>
    this.instance.post<any>(`/presigned-post-url?key=${fields.key}&bucket=${fields.bucket}&X-Amz-Algorithm=${fields["X-Amz-Algorithm"]}&X-Amz-Credential=${fields["X-Amz-Credential"]}&X-Amz-Date=${fields["X-Amz-Date"]}&X-Amz-Security-Token=${fields["X-Amz-Security-Token"]}&Policy=${fields.Policy}&X-Amz-Signature=${fields["X-Amz-Signature"]}&X-Amz-SignedHeaders=${"host"}&X-Amz-Expires=${"3600"}`,
        {acl: "public-read", key: fields.key, bucket: fields.bucket, "X-Amz-Algorithm": fields["X-Amz-Algorithm"],
        "X-Amz-Credential": fields["X-Amz-Credential"], "X-Amz-Date": fields["X-Amz-Date"], "X-Amz-Security-Token": fields["X-Amz-Security-Token"], Policy: fields.Policy, "X-Amz-Signature": fields["X-Amz-Signature"], file: file},
        { headers:{
            'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
        }
    })

}
