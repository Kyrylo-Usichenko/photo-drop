import { Button } from "../../components/Button/Button";
import {Back, Inner, Name, Nav, Photo, Photos, Date, NumberOfPhotos, AlbumHeader, AlbumInfo} from "./AlbumStyles";
import { Wrapper } from "../../components/Container/Container";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setAlbum} from "../../store/actions/user";

const Album = ({albumId}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAlbum(albumId) as any)
  })
  return (
    <Wrapper>
      <Inner>
        <Nav>
          <Back>
            <Link to={"/albums"}><img src={'./back-arrow.svg'} alt={'back'}/></Link>
          </Back>
          <AlbumHeader>
          <Name>album name</Name>
          <AlbumInfo>
          <Date>Jan, 1 2022</Date>
          <NumberOfPhotos>6 photos</NumberOfPhotos>
          </AlbumInfo>
          </AlbumHeader>
        </Nav>
        <Photos>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
          <Photo></Photo>
        </Photos>
        <Button>Add photos</Button>
      </Inner>
    </Wrapper>
  );
};

export default Album;
