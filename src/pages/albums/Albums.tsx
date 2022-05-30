import { Link } from "react-router-dom";
import { Container, Wrapper } from "../../components/Container/Container";
import { Album, Albums, CreateMenu, IconWrapper, Name, Location, ButtonAdd, CreateMenuInner, ButtonCreate, Value, Input } from "./AlbumsStyles";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addAlbum, setAlbums, setAuth} from "../../store/actions/user";
import Logo from "../../components/Logo/Logo";
import {LogoWrapper} from "../home/HomeStyles";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import { AiOutlineFolder } from 'react-icons/ai';


const Home = () => {
  const dispatch = useDispatch();
  const id = TokensLocalStorage.getInstance().getUser()
  useEffect(()=>{
    dispatch(setAlbums(id) as any);
    const updatePosition = () => {
      setIsOpen(false);
    }
    window.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
        setIsOpen(false)
      }
    });
    updatePosition();
    return () => window.removeEventListener("keydown", function(event){
      if(event.key === "Escape"){
        setIsOpen(false)
      }
    });
  }, [])
  const user = useSelector((state: any) => state.userReducer.user)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage]: any = useState(null)
  const albums = useSelector((state: any) => state.userReducer.albums)
  const isLoading = useSelector((state: any) => state.userReducer.isLoading)
  const onAddClick = () => {
    if (name === '' || location === ''){
      return alert('Type all data')
    } else {
      dispatch(addAlbum(name, location, user.id) as any)
      setIsOpen(false)
      setMessage(null)
    }
  }
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
                    <AiOutlineFolder size={24} color={'black'}/>
                  </IconWrapper>
                  <div>
                    <Name>{album.name}</Name>
                    <Location>{album.location}</Location>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><g><g><g><g><path d="M0 0L16 0 16 16 0 16z" transform="translate(-324 -208) translate(0 184) translate(324 24)"></path><path fill="#B4BABF" d="M5.267 3.263c-.356.35-.356.914 0 1.263L8.802 8l-3.535 3.474c-.356.35-.356.914 0 1.263.355.35.929.35 1.284 0l4.182-4.11c.356-.35.356-.914 0-1.263l-4.182-4.11c-.346-.341-.93-.341-1.284.008z" transform="translate(-324 -208) translate(0 184) translate(324 24)"></path></g></g></g></g></g></svg>
              </Album>
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
                    Name: <Input value={name}
                                 onChange={(e: any) => setName(e.currentTarget.value)}
                                 type="text"
                                 onKeyPress={(e: any) => e.key === "Enter" ? dispatch(addAlbum(name, location, user.id) as any) : null}
                  />
                  </Value>
                  <Value>
                    Location: <Input value={location}
                                     onChange={(e: any) => setLocation(e.currentTarget.value)}
                                     type="text"
                                     onKeyPress={(e: any) => e.key === "Enter" ? dispatch(addAlbum(name, location, user.id) as any) : null}
                  />
                  </Value>
                  <ButtonCreate onClick={onAddClick}>add</ButtonCreate>
                </CreateMenuInner>
              </Container>
            </Wrapper>

          </CreateMenu>
          { isLoading ? null : (<ButtonAdd type="button" onClick={() => setIsOpen(true)} value={'Create new album'}>+ Create new album</ButtonAdd>)}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
