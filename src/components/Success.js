import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

// --- STYLES ---
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0d0d0d;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  opacity: 0.8;
  transition: 0.3s;
  &:hover { opacity: 1; color: #bf2d06; }
`;

const NavDisabled = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #666;
  cursor: default;
`;

const Logo = styled.img`
  height: 35px;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const Card = styled.div`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(100, 255, 100, 0.2); /* Зеленая обводка */
  border-radius: 24px;
  padding: 60px 40px;
  max-width: 500px;
  width: 100%;
  backdrop-filter: blur(15px);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 20px 0;
  color: #4dff88; /* Зеленый текст */
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #ccc;
  margin-bottom: 40px;
`;

const HomeButton = styled(Link)`
  background: white;
  color: black;
  text-decoration: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    background: #ccc;
  }
`;

const Success = () => {
  return (
    <Wrapper>
      <NavContainer>
        <div style={{ display: 'flex', gap: 20 }}>
          <NavLink to="/">MAIN</NavLink>
        </div>
        <Logo src={logo} alt="Himeros" />
        <div style={{ display: 'flex', gap: 20 }}>
          <NavDisabled>ACCOUNT</NavDisabled>
        </div>
      </NavContainer>

      <Content>
        <Card>
          <Title>Success</Title>
          <Subtitle>Thank you for your purchase!</Subtitle>
          <HomeButton to="/">Return Home</HomeButton>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default Success;