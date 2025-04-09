import React from 'react';
import { FooterWrapper, FooterContent, FooterLinks, FooterLink, Copyright } from './styles';
import { Container } from '../../../styles/elements';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterLinks>
            <FooterLink to="/">ホーム</FooterLink>
            <FooterLink to="/about">自己紹介</FooterLink>
            <FooterLink to="/works">作品集</FooterLink>
            <FooterLink to="/skills">スキル</FooterLink>
            <FooterLink to="/blog">ブログ</FooterLink>
            <FooterLink to="/contact">お問い合わせ</FooterLink>
          </FooterLinks>
          <Copyright>
            &copy; {currentYear} My Portfolio. All Rights Reserved.
          </Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 