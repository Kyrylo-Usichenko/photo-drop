import styled from "styled-components";

export const Button: any = styled.button`
  background: #3300cc;
  border-radius: 50px;
  height: 50px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 20px 0 10px;

  &:focus {
    outline: none;
  }
`;
