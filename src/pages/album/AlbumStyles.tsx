import styled from "styled-components";

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
  flex: 0 0 33.333333%;

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
  padding: 20px 0;
  border-top: 1px solid #F1F0EC;
  border-bottom: 1px solid #F1F0EC;
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

export const AlbumInfo: any = styled.div`
  display: flex;
`;

export const Date: any = styled.div`
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const NumberOfPhotos: any = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-left: 20px;
`;

