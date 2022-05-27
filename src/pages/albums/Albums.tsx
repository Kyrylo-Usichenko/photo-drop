import { Link } from "react-router-dom";
import { Container, Wrapper } from "../../components/Container/Container";
import { Album, Albums, CreateMenu, IconWrapper, Name, Location, ButtonAdd, CreateMenuInner, ButtonCreate, Value, Input } from "./AlbumsStyles";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addAlbum, setAlbums} from "../../store/actions/user";
import Logo from "../../components/Logo/Logo";
import {LogoWrapper} from "../home/HomeStyles";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

const Home = () => {
  const dispatch = useDispatch();
  const id = TokensLocalStorage.getInstance().getUser()
  useEffect(()=>{
    dispatch(setAlbums(id) as any);
  }, [])
  const user = useSelector((state: any) => state.userReducer.user)
  const albums = useSelector((state: any) => state.userReducer.albums)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  return (
    <Wrapper>
      <LogoWrapper>
          <Logo />
      </LogoWrapper>
      <Container>
        <div>
          <Albums>
            {albums.map((album: any) =>  <Link key={album.id} to={`/album/${album.id}`}>
              <Album>
                <div style={{display: "flex"}}>
                  <IconWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-briefcase">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </IconWrapper>
                  <div>
                    <Name>{album.name}</Name>
                    <Location>{album.location}</Location>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><g><g><g><g><path d="M0 0L16 0 16 16 0 16z" transform="translate(-324 -208) translate(0 184) translate(324 24)"></path><path fill="#B4BABF" d="M5.267 3.263c-.356.35-.356.914 0 1.263L8.802 8l-3.535 3.474c-.356.35-.356.914 0 1.263.355.35.929.35 1.284 0l4.182-4.11c.356-.35.356-.914 0-1.263l-4.182-4.11c-.346-.341-.93-.341-1.284.008z" transform="translate(-324 -208) translate(0 184) translate(324 24)"></path></g></g></g></g></g></svg>
              </Album>
              {/*<IoPhotoVideo/>*/}

            </Link>)}
          </Albums>
          <CreateMenu isOpen={isOpen}>
            <Wrapper>
              <Container>
                <CreateMenuInner>
                  <ButtonCreate onClick={() => {
                    setName('')
                    setLocation('')
                    setIsOpen(false)
                  }}>close</ButtonCreate>
                  <Value>
                    Name: <Input value={name} onChange={(e: any) => setName(e.currentTarget.value)} type="text"/>
                  </Value>
                  <Value>
                    Location: <Input value={location} onChange={(e: any) => setLocation(e.currentTarget.value)} type="text"/>
                  </Value>
                  <ButtonCreate onClick={() => {
                    dispatch(addAlbum(name, location, user.id) as any)
                    setIsOpen(false)
                  }}>add</ButtonCreate>
                </CreateMenuInner>
              </Container>
            </Wrapper>

          </CreateMenu>
        <ButtonAdd type="button" onClick={() => setIsOpen(true)} value={'Create new album'}>+ Create new album</ButtonAdd>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
