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

    public getAlbum = (data: {}) =>
        this.instance.patch<any>('/album/edit', { headers:{
                'Authorization-token': `Bearer ${TokensLocalStorage.getInstance().getAccessToken()}`,
            }, data
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

}
