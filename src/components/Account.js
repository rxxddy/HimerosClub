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

const NavActive = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #bf2d06; /* Активный цвет */
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
`;

const ComingTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin: 0;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  line-height: 1;
`;

const ComingSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-top: 20px;
`;

const Account = () => {
  return (
    <Wrapper>
      <NavContainer>
        <div style={{ display: 'flex', gap: 20 }}>
          <NavLink to="/">MAIN</NavLink>
          <span style={{ opacity: 0.5, fontSize: '0.85rem', fontWeight: 700, letterSpacing: 1.5 }}>INFO</span>
        </div>
        
        <Logo src={logo} alt="Himeros" />

        <div style={{ display: 'flex', gap: 20 }}>
          <NavActive>ACCOUNT</NavActive>
        </div>
      </NavContainer>

      <Content>
        <ComingTitle>Coming</ComingTitle>
        <ComingTitle>Soon</ComingTitle>
        <ComingSubtitle>Profile Section</ComingSubtitle>
      </Content>
    </Wrapper>
  );
};

export default Account;