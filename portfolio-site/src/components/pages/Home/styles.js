import styled from 'styled-components';
import theme from '../../../styles/theme';

export const HomeWrapper = styled.div``;

export const Hero = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.white};
  padding: ${theme.space[20]} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.space[12]} 0;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.space[8]};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.radii.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    height: 300px;
  }
`;

// プロフィールセクションのスタイル
export const ProfileSection = styled.div`
  padding: ${theme.space[10]} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.space[8]} 0;
  }
`;

export const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  border: 4px solid ${theme.colors.lightPurple};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 200px;
    height: 200px;
    margin: 0 auto ${theme.space[6]};
  }
`;

export const ProfileContent = styled.div`
  flex: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const SectionWork = styled.div`
  margin-top: ${theme.space[8]};
`;

export const SectionBlog = styled.div`
  margin-top: ${theme.space[8]};
`; 