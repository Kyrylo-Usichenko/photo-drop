import {Button} from "../../components/Button/Button";
import {Back, Inner, Name, Nav, Photo, Photos, Date, NumberOfPhotos, AlbumHeader, AlbumInfo} from "./AlbumStyles";
import {Wrapper} from "../../components/Container/Container";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAlbum} from "../../store/actions/user";

const Album = () => {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(setAlbum(params.id) as any)
    }, [])
    const album = useSelector((state: any) => state.userReducer.album)
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
                        <Name>Name: {album.name}</Name>
                        <Name>Location: {album.location}</Name>
                    </AlbumHeader>
                </Nav>
                <Button>Add photos</Button>
            </Inner>
        </Wrapper>
    );
};

export default Album;
