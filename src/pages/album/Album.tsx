import {
    Back,
    Inner,
    Name,
    Nav,
    AlbumHeader,
    PhotosWrapper,
    Img,
    Photos,
    PhotoWrapper,
    LoaderWrapper, MainWrapper
} from "./AlbumStyles";
import {Wrapper} from "../../components/Container/Container";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPhoto, clearPhotos, getAlbum, getPhotos, setLoading} from "../../store/actions/user";
import {Button} from "../../components/Button/Button";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {AppDispatch} from "../../App";
import Loader from "../../components/Loader/Loader";

const Album = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams();
    const album = useSelector((state: any) => state.userReducer.album)
    const photos = useSelector((state: any) => state.userReducer.photos)
    const hiddenFileInput = useRef(null);
    const userId = TokensLocalStorage.getInstance().getUser()
    const [photo, setPhoto] = useState<null | any>(null)
    const isLoading = useSelector((state: any) => state.userReducer.isLoading)
    const nav = useNavigate();

    useEffect(() => {
        dispatch(setLoading(true))
        if (TokensLocalStorage.getInstance().getUser() === null || TokensLocalStorage.getInstance().getUser() === undefined) {
            nav('/')
        }
        dispatch(getAlbum(params.id))
        dispatch(getPhotos(params.id))
        return () => {
            return (
                dispatch(setLoading(true)),
                    dispatch(clearPhotos())
            )
        }
    }, [])

    const onAddClick = () => {
        // @ts-ignore
        hiddenFileInput.current.click();
    }
    const onUploadChange = (e: any) => {
        const file = e.target.files[0];
        const newFile = {...file};
        newFile.lastModified = file.lastModified
        newFile.lastModifiedDate = file.lastModifiedDate
        newFile.name = file.name.split('.').slice(0, -1).join('.')
        newFile.size = file.size
        newFile.type = file.type.split('/').slice(1, 2).join('/')
        newFile.webkitRelativePath = file.webkitRelativePath
        setPhoto(file);
    }
    const sendImage = (e: any) => {
        dispatch(addPhoto(photo.name, userId, album.id, photo.type, photo, photos))
        setPhoto(null)

    }
    return (
        <Wrapper>
            <Inner>
                <Nav>
                    <Back>
                        <Link to={"/albums"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <path d="M0 0L24 0 24 24 0 24z"
                                                              transform="translate(-24 -120) translate(0 96) translate(24 24)"/>
                                                        <path fill="#21272E"
                                                              d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
                                                              transform="translate(-24 -120) translate(0 96) translate(24 24)"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </Back>
                    <AlbumHeader>
                        <Name>{album.name}</Name>
                        <Name>{album.location}</Name>
                    </AlbumHeader>
                </Nav>
                {isLoading ? <LoaderWrapper><Loader/></LoaderWrapper> : (
                    <MainWrapper style={{width: '100%'}}>
                        <PhotosWrapper>{photos && photos.map((photo: any) => <PhotoWrapper key={photo.url}>
                                <Img
                                    src={photo.url}
                                    alt=""/>
                            </PhotoWrapper>
                        )}
                        </PhotosWrapper>
                        <div>
                            <input type="file"
                                   ref={hiddenFileInput}
                                   onChange={onUploadChange}
                                   style={{display: "none"}}
                            />
                            <Button onClick={onAddClick}>Add photo</Button>
                            <Button onClick={sendImage}>Accept</Button>
                        </div>
                    </MainWrapper>
                )
                }
            </Inner>
        </Wrapper>
    );
};

export default Album;
