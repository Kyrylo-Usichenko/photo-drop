import { Button } from "../../components/Button/Button";
import {Back, Inner, Name, Nav, Photo, Photos, Date, NumberOfPhotos, AlbumHeader, AlbumInfo} from "./AlbumStyles";
import { Wrapper } from "../../components/Container/Container";
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
            <Link to={"/albums"}>back</Link>
          </Back>
          <AlbumHeader>
          <Name>{album.name}</Name>
          <AlbumInfo>
          {/*<Date>Jan, 1 2022</Date>*/}
          {/*<NumberOfPhotos>6 photos</NumberOfPhotos>*/}
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
