import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../styles/theme';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.primary};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.space[3]} 0;
  z-index: ${theme.zIndices[40]};
`;

export const Logo = styled(Link)`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.heading};
`;

export const Nav = styled.nav`
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? 'calc(100vh - 60px)' : '0')};
    background-color: ${theme.colors.primary};
    overflow: hidden;
    transition: ${theme.transitions.standard};
    box-shadow: ${({ $isOpen }) => ($isOpen ? theme.shadows.md : 'none')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: ${theme.space[6]} 0;
    
    li {
      margin-bottom: ${theme.space[4]};
    }
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
  padding: ${theme.space[2]} ${theme.space[3]};
  border-radius: ${theme.radii.md};
  transition: ${theme.transitions.standard};

  &:hover, &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightPurple};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
    padding: ${theme.space[3]} ${theme.space[6]};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: ${theme.zIndices[50]};

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.full};
    transition: ${theme.transitions.standard};
  }

  span:first-child {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg) translate(5px, 8px)' : 'rotate(0)')};
  }

  span:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  span:last-child {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg) translate(5px, -8px)' : 'rotate(0)')};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`; 