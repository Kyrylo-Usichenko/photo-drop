import {Link, useNavigate} from "react-router-dom";
import {Container, Wrapper} from "../../components/Container/Container";
import {
    Album,
    Albums,
    CreateMenu,
    IconWrapper,
    Name,
    Location,
    ButtonAdd,
    CreateMenuInner,
    ButtonCreate,
    Input,
    ButtonBack,
    CreateAlbum,
    CreateWrapper,
    LoaderWrapper,
    AddButton,
} from "./AlbumsStyles";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addAlbum, getAlbums, setAuth, setLoading} from "../../store/actions/user";
import Logo from "../../components/Logo/Logo";
import {LogoWrapper} from "../home/HomeStyles";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {AiOutlineFolder} from 'react-icons/ai';
import {AppDispatch} from "../../App";
import Loader from "../../components/Loader/Loader";


const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const albums = useSelector((state: any) => state.userReducer.albums)
    const user = useSelector((state: any) => state.userReducer.user)
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [message, setMessage]: any = useState(null)
    const isLoading = useSelector((state: any) => state.userReducer.isLoading)
    const id = TokensLocalStorage.getInstance().getUser()
    const nav = useNavigate();
    const messageError = useSelector((state: any) => state.userReducer.errorMessage)
    console.log(isOpen)
    useEffect(() => {
        // if (messageError === 'Forbidden') {
        //     TokensLocalStorage.getInstance().clear()
        //     dispatch(setAuth(false))
        //     return nav('/')
        // }
        // if (TokensLocalStorage.getInstance().getUser() === null || TokensLocalStorage.getInstance().getUser() === undefined) {
        //     console.log(TokensLocalStorage.getInstance().getUser())
        //     console.log('to main')
        //     debugger
        //     nav('/')
        // }

        if (albums.length === 0) {
            dispatch(getAlbums(id));
        } else {
            dispatch(setLoading(false))
        }
        // const updatePosition = () => {
        //     setIsOpen(false);
        // }
        window.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        });
        // updatePosition();
        return () => window.removeEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        });
    })

    const onAddClick = () => {
        if (name === '' || location === '') {
            return alert('Type all data')
        } else {
            dispatch(addAlbum(name, location, id))
            setIsOpen(false)
            setName('')
            setLocation('')
            setMessage(null)
        }
    }
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo/>
                <AddButton onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </AddButton>
            </LogoWrapper>
            <Container>
                {isLoading ?
                    <LoaderWrapper>
                        <Loader/>
                    </LoaderWrapper> : <div>
                        <Albums>
                            {albums.map((album: any) => <Link key={album.id} to={`/album/${album.id}`}>
                                <Album>
                                    <div style={{display: "flex"}}>
                                        <IconWrapper>
                                            <AiOutlineFolder size={24} color={'black'}/>
                                        </IconWrapper>
                                        <div>
                                            <Name>{album.name}</Name>
                                            <Location>{album.location}</Location>
                                        </div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16">
                                            <g fill="none" fillRule="evenodd">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path d="M0 0L16 0 16 16 0 16z"
                                                                      transform="translate(-324 -208) translate(0 184) translate(324 24)"/>
                                                                <path fill="#B4BABF"
                                                                      d="M5.267 3.263c-.356.35-.356.914 0 1.263L8.802 8l-3.535 3.474c-.356.35-.356.914 0 1.263.355.35.929.35 1.284 0l4.182-4.11c.356-.35.356-.914 0-1.263l-4.182-4.11c-.346-.341-.93-.341-1.284.008z"
                                                                      transform="translate(-324 -208) translate(0 184) translate(324 24)"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Album>
                            </Link>)}
                        </Albums>
                        <CreateMenu isOpen={isOpen}>
                            <Wrapper>
                                <CreateWrapper>
                                    <ButtonBack onClick={() => {
                                        setName('')
                                        setLocation('')
                                        setIsOpen(false)
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24">
                                            <g fill="none" fillRule="evenodd">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <path d="M0 0L24 0 24 24 0 24z"
                                                                          transform="translate(-24 -120) translate(0 96) translate(24 24)"></path>
                                                                    <path fill="#21272E"
                                                                          d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
                                                                          transform="translate(-24 -120) translate(0 96) translate(24 24)"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </ButtonBack>
                                    <CreateAlbum>Create album</CreateAlbum>
                                </CreateWrapper>

                                <Container>
                                    <CreateMenuInner>
                                        <Input value={name}
                                               onChange={(e: any) => setName(e.currentTarget.value)}
                                               type="text"
                                               placeholder={'Album name'}
                                               onKeyPress={(e: any) => e.key === "Enter" ? dispatch(addAlbum(name, location, user.id)) : null}
                                        />
                                        <Input value={location}
                                               onChange={(e: any) => setLocation(e.currentTarget.value)}
                                               type="text"
                                               placeholder={'Location'}

                                               onKeyPress={(e: any) => e.key === "Enter" ? dispatch(addAlbum(name, location, user.id)) : null}
                                        />
                                        <ButtonCreate onClick={onAddClick}>add</ButtonCreate>
                                    </CreateMenuInner>
                                </Container>
                            </Wrapper>

                        </CreateMenu>
                    </div>}

            </Container>
        </Wrapper>
    );
};

export default Home;
