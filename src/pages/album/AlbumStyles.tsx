import styled, { keyframes } from "styled-components";

export const Inner: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Photos: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Photo: any = styled.div`
  width: 125px;
  height: 125px;
  border: 1px solid black;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex: 0 0 33%;

  &:focus {
    outline: none;
  }
`;
export const Nav: any = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 63px;
  border-top: 1px solid #F1F0EC;
  border-bottom: 1px solid #F1F0EC;
  padding: 12px 16px;
`;
export const PhotosWrapper: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const MainWrapper: any = styled.div`
  width: 100%;
`;

export const Img: any = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Back: any = styled.div`
`;

export const AlbumHeader: any = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const Name: any = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  margin-right: 20px;
`;

export const PhotoWrapper: any = styled.div`
  flex: 0 0 33.333333%;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  @media (min-width: 425px) {
    height: 142px;
  }
  @media (min-width: 768px) {
    height: 186px;
  }
`;

export const LoaderWrapper: any = styled.div`
  margin-top: 100px;
`;




