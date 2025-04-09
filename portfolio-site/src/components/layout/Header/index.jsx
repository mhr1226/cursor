import React, { useState } from 'react';
import { HeaderWrapper, Logo, Nav, NavLink, MobileMenuButton, NavList } from './styles';
import { Container, Flex } from '../../../styles/elements';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Flex $justify="space-between" $align="center">
          <Logo to="/">Portfolio</Logo>
          
          <MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
          
          <Nav $isOpen={isMenuOpen}>
            <NavList>
              <li><NavLink to="/" exact="true">ホーム</NavLink></li>
              <li><NavLink to="/about">自己紹介</NavLink></li>
              <li><NavLink to="/works">作品集</NavLink></li>
              <li><NavLink to="/skills">スキル</NavLink></li>
              <li><NavLink to="/blog">ブログ</NavLink></li>
              <li><NavLink to="/contact">お問い合わせ</NavLink></li>
            </NavList>
          </Nav>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header; 