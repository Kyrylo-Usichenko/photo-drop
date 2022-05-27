import styled from "styled-components";
import {FaPhotoVideo} from "react-icons/all";
import {Button} from "../../components/Button/Button";

export const Albums: any = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
`;
export const Album: any = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
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

export const CreateMenu: any = styled.div<{isOpen: boolean}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  flex-direction: column;
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
`;
export const CreateMenuInner: any = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 375px;
`;

export const Name: any = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.3px;
  color: rgb(33, 39, 46);
  word-break: break-word;
  text-transform: capitalize;
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
  & a{
    text-decoration: none;
    text-underline: none;
  }
`;
export const ButtonAdd: any = styled(Button)`
  height: 50px;
  margin: 0 0 10px 0;
`;

export const ButtonCreate: any = styled(Button)`
  height: 50px;
  
`;

export const Value: any = styled.div`
  ont-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
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

export const Input: any = styled.input`
  border: 5px solid white;
  -webkit-box-shadow:
          inset 0 0 8px  rgba(0,0,0,0.1),
          0 0 16px rgba(0,0,0,0.1);
  -moz-box-shadow:
          inset 0 0 8px  rgba(0,0,0,0.1),
          0 0 16px rgba(0,0,0,0.1);
  box-shadow:
          inset 0 0 8px  rgba(0,0,0,0.1),
          0 0 16px rgba(0,0,0,0.1);
  padding: 15px;
  background: rgba(255,255,255,0.5);
  margin: 0 0 10px 0; 
  width: 100%;
`;
