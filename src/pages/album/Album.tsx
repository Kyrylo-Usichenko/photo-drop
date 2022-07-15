import {
    Back,
    Inner,
    Name,
    Nav,
    AlbumHeader,
    LoaderWrapper, Location, NavLeft, CloudinaryWrapper
} from "./AlbumStyles";
import {Wrapper} from "../../components/Container/Container";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    clearAlbum,
    clearPhotos,
    getAlbum,
    getPhotos,
    getSignature,
    setLoading, setSignatureData
} from "../../store/actions/user";
import {Button} from "../../components/Button/Button";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {AppDispatch} from "../../App";
import Loader from "../../components/Loader/Loader";

const Album = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams();
    const album = useSelector((state: any) => state.userReducer.album)
    const isLoading = useSelector((state: any) => state.userReducer.isLoading)
    const signatureData = useSelector((state: any) => state.userReducer.signatureData)
    const url = useSelector((state: any) => state.userReducer.url)
    const nav = useNavigate();

    const options = {
        // @ts-ignore
        cloudName: 'photodropme',
        apiKey: '249134247665357',
        folder: signatureData?.folder,
        uploadPreset: signatureData?.uploadPreset,
        sources: ['local'],
        uploadSignatureTimestamp: signatureData?.timestamp,
        uploadSignature: signatureData?.signature,
        cropping: false,
    }
    // @ts-ignore
    const widget = window.cloudinary.createUploadWidget(
        options,
        (error: any, result: any) => {
            checkUploadResult(result)
        })
    const onWidgetOpenClick = () => {

        dispatch(getSignature(album.cloudinaryFolderAlbum as string))
    }
    useEffect(() => {
        if (signatureData) widget.open()
    }, [signatureData])

    useEffect(() => {
        dispatch(setLoading(true))
        if (TokensLocalStorage.getInstance().getUser() === null || TokensLocalStorage.getInstance().getUser() === undefined) {
            nav('/')
        }
        dispatch(getAlbum(params.id))
        dispatch(getPhotos(params.id))
        return () => {
            dispatch(setLoading(true))
            dispatch(clearAlbum())
            dispatch(clearPhotos())
        }
    }, [])

    useEffect(() => {
        if (url) {
            window.open(url);
        }
    }, [url])

    let checkUploadResult = (resultEvent: any) => {
        if (resultEvent.event === 'success') {
            dispatch(setSignatureData(null))
        }
    }


    return (
        <Wrapper>
            <Inner>
                <Nav>
                    <NavLeft>
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
                            <Location>{album.location}</Location>
                        </AlbumHeader>
                    </NavLeft>
                </Nav>
                {isLoading ? <LoaderWrapper><Loader/></LoaderWrapper> : (
                    <CloudinaryWrapper>
                        <Button onClick={onWidgetOpenClick}>Upload photos</Button>
                    </CloudinaryWrapper>
                )
                }
            </Inner>
        </Wrapper>
    );
};

export default Album;
