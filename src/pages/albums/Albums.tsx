import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container, Wrapper } from "../../components/Container/Container";
import { Album, Albums, CreateMenu } from "./AlbumsStyles";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addAlbum, setAlbums} from "../../store/actions/user";
import Logo from "../../components/Logo/Logo";
import {LogoWrapper} from "../home/HomeStyles";

const Home = () => {
  const user = useSelector((state: any) => state.userReducer.user)
  const albums = useSelector((state: any) => state.userReducer.albums)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setAlbums(user.id) as any);
  }, [])
  return (
    <Wrapper>
      <LogoWrapper>
          <Logo />
      </LogoWrapper>
      <Container>
        <div>
          <Albums>
            {albums.map((album: any) =>  <Link key={album.id} to={"/album"}>
              <Album />
              {/*<IoPhotoVideo/>*/}
            </Link>)}
          </Albums>
          <CreateMenu isOpen={isOpen}>
            <button onClick={() => {
              setName('')
              setLocation('')
              setIsOpen(false)
            }}>close</button>
            <div>
              name: <input value={name} onChange={(e) => setName(e.currentTarget.value)} type="text"/>
            </div>
            <div>
              location: <input value={location} onChange={(e) => setLocation(e.currentTarget.value)} type="text"/>
            </div>
            <button onClick={() => {
              dispatch(addAlbum(name, location, user.id) as any)
              setIsOpen(false)
            }}>add</button>
          </CreateMenu>
        <Button type="button" onClick={() => setIsOpen(true)} value={'Create new album'}>+ Create new album</Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
