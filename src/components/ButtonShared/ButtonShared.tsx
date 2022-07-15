
import React from 'react';
import styled from "styled-components";

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary"; // two styling options
    disabled?: boolean; // make the button disabled or not
    margin?: string,
    isLoading?: boolean,
    type?: string
};

const Button = ({onClick, children, disabled, margin, isLoading = false}: ButtonProps) => {
    return (
        <Wrapper type='button' margin={margin} onClick={onClick} disabled={disabled}>
            {
                isLoading ? <Loader/> : children
            }
        </Wrapper>
    );
};
const Loader = () => {
    return (
        <div>
            <Load/>
        </div>
    );
};

const Load = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 27px;
  height: 27px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
export const Wrapper = styled.button<ButtonProps>`
  width: 100%;
  max-width: 420px;
  height: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  background: #3300CC;
  border-radius: 50px;
  outline: none;
  border: none;
  margin: ${(props) => props.margin && `${props.margin}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    opacity: 0.33;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
export default Button;

