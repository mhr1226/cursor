import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../styles/theme';

export const FooterWrapper = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.space[8]} 0 ${theme.space[6]};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space[6]};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.space[4]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: ${theme.transitions.standard};
  font-size: ${theme.fontSizes.sm};
  
  &:hover {
    color: ${theme.colors.lightPurple};
  }
`;

export const Copyright = styled.p`
  color: ${theme.colors.gray300};
  font-size: ${theme.fontSizes.xs};
  text-align: center;
  margin: 0;
`; 