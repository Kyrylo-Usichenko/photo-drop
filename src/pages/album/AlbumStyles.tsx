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
  border-bottom: 1px solid #F1F0EC;
  padding: 12px 15px;
  justify-content: space-between;
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
  flex-direction: column;
  margin-left: 20px;
`;

export const Name: any = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  line-height: 1.4;
  -webkit-letter-spacing: 0.3px;
  -moz-letter-spacing: 0.3px;
  -ms-letter-spacing: 0.3px;
  letter-spacing: 0.3px;
  color: rgb(33,39,46);
  word-break: break-word;
  text-transform: capitalize;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-underline: none;
`;
export const Location: any = styled.div`
  font-size: 11px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  -webkit-letter-spacing: 0.3px;
  -moz-letter-spacing: 0.3px;
  -ms-letter-spacing: 0.3px;
  letter-spacing: 0.3px;
  color: rgb(120,124,128);
  word-break: break-word;
  height: 16px;
  margin-top: 5px;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-underline: none;
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
export const AddButton: any = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgb(218, 225, 232);
  background-color: rgb(240, 241, 242);
  margin-left: 8px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  color: rgb(33, 39, 46);
  flex-shrink: 0;
`;
export const NavLeft: any = styled.div`
  display: flex;
  align-items: center;
`;




