import styled from "styled-components";
import {FaPhotoVideo} from "react-icons/all";
import {Button} from "../../components/Button/Button";

export const Albums: any = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 20px;

`;
export const LoaderWrapper: any = styled.div`
    margin: 100px auto 0;
  text-align: center;
`;
export const Album: any = styled.div`
  width: 100%;
  height: 61px;
  margin: 4px 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background-color: rgba(240, 241, 242, 0.27);
  border: 1px solid rgba(33, 39, 46, 0.12);
`;
export const IconWrapper: any = styled.div`
  width: 43px;
  height: 43px;
  border: 1.7px solid rgba(33, 39, 46, 0.08);
  border-radius: 5px;
  background-color: rgb(240, 241, 242);
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateMenu: any = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  background-color: rgb(240, 241, 242);

`;
export const CreateMenuInner: any = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 0 0;
  width: 100%;
  height: 100vh;
  max-width: 420px;
  margin: 0 auto;
`;

export const Name: any = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  -webkit-letter-spacing: 0.3px;
  -moz-letter-spacing: 0.3px;
  -ms-letter-spacing: 0.3px;
  letter-spacing: 0.3px;
  color: rgb(33, 39, 46);
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
  letter-spacing: 0.3px;
  color: rgb(120, 124, 128);
  word-break: break-word;
  height: 16px;
  margin-top: 5px;
  text-decoration: none;
  text-underline: none;

  & a {
    text-decoration: none;
    text-underline: none;
  }
`;
export const ButtonAdd: any = styled(Button)`
  height: 50px;
  position: fixed;
  bottom: 5px;
  max-width: 540px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
`;

export const ButtonCreate: any = styled(Button)`
  height: 50px;
  
`;
export const ButtonBack: any = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 24px;
`;
export const CreateAlbum: any = styled.div`
  padding-bottom: 2px;
  font-size: 29px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgb(33, 39, 46);
`;
export const CreateWrapper: any = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  height: 63px;
  border-bottom: 1px solid #F1F0EC;

`;



export const Input: any = styled.input`
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin: 20px 0 0;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  width: 100%;
  padding: 15px 13px;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #6d6d6d;
  }
`;

export const AddButton: any = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgb(218, 225, 232);
  background-color: rgb(240, 241, 242);
  margin-left: 8px;
  display: inline-flex;
  float: right;
  //margin-top: -15px;
  //margin-right: 10px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  color: rgb(33, 39, 46);
  flex-shrink: 0;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
