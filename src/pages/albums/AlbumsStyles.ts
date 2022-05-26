import styled from "styled-components";
import {FaPhotoVideo} from "react-icons/all";

export const Albums: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 15px;
`;
export const Album: any = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 20px;
  
  &:hover {
    background-color: rgba(239, 239, 239, 0.62);
  }
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

