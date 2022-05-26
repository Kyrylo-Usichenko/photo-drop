import styled from "styled-components";

const Logo = () => {
  return <Img src="./logo.svg" alt="logo" />;
};

const Img = styled.img`
  cursor: pointer;
  max-width: 125px;
`;

export default Logo;
