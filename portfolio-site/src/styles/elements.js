import styled from 'styled-components';
import theme from './theme';

// コンテナ
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.space[4]};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.space[6]};
  }
`;

// フレックスボックス
export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  gap: ${({ $gap }) => ($gap ? theme.space[$gap] : 0)};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: ${({ $responsiveDirection }) => $responsiveDirection || 'column'};
  }
`;

// グリッド
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || 'repeat(1, 1fr)'};
  gap: ${({ $gap }) => ($gap ? theme.space[$gap] : 0)};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: ${({ $columnsmd }) => $columnsmd || 'repeat(2, 1fr)'};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: ${({ $columnslg }) => $columnslg || 'repeat(3, 1fr)'};
  }
`;

// セクション
export const Section = styled.section`
  padding: ${({ $padding }) => $padding || `${theme.space[8]} 0`};
  background-color: ${({ $bg }) => ($bg ? theme.colors[$bg] : 'transparent')};
`;

// ボタン
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[2]} ${theme.space[4]};
  border-radius: ${theme.radii.md};
  font-weight: ${theme.fontWeights.medium};
  transition: ${theme.transitions.standard};
  text-align: center;
  font-size: ${theme.fontSizes.md};
  
  ${({ $variant }) => {
    if ($variant === 'outlined') {
      return `
        border: 1px solid ${theme.colors.lightPurple};
        color: ${theme.colors.lightPurple};
        background: transparent;
        
        &:hover {
          background: ${theme.colors.lightPurple};
          color: ${theme.colors.white};
        }
      `;
    }
    
    if ($variant === 'text') {
      return `
        color: ${theme.colors.lightPurple};
        background: transparent;
        
        &:hover {
          background: ${theme.colors.gray100};
        }
      `;
    }
    
    return `
      background: ${theme.colors.lightPurple};
      color: ${theme.colors.white};
      
      &:hover {
        background: ${theme.colors.primary};
        opacity: 0.9;
      }
    `;
  }}
  
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
  ${({ $size }) => {
    if ($size === 'sm') {
      return `
        padding: ${theme.space[1]} ${theme.space[3]};
        font-size: ${theme.fontSizes.sm};
      `;
    }
    
    if ($size === 'lg') {
      return `
        padding: ${theme.space[3]} ${theme.space[6]};
        font-size: ${theme.fontSizes.lg};
      `;
    }
    
    return '';
  }}
`;

// カード
export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  transition: ${theme.transitions.standard};
  border: 1px solid ${theme.colors.gray200};
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-4px);
    border-color: ${theme.colors.lightPurple};
  }
`;

export const CardHeader = styled.div`
  padding: ${theme.space[4]};
  border-bottom: 1px solid ${theme.colors.gray200};
`;

export const CardBody = styled.div`
  padding: ${theme.space[4]};
`;

export const CardFooter = styled.div`
  padding: ${theme.space[4]};
  border-top: 1px solid ${theme.colors.gray200};
`;

// テキスト
export const Text = styled.p`
  color: ${({ $color }) => ($color ? theme.colors[$color] : theme.colors.text)};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.md)};
  font-weight: ${({ $weight }) => ($weight ? theme.fontWeights[$weight] : theme.fontWeights.regular)};
  line-height: ${({ $lineHeight }) => ($lineHeight ? theme.lineHeights[$lineHeight] : theme.lineHeights.normal)};
  margin-bottom: ${({ $mb }) => ($mb ? theme.space[$mb] : '0')};
  text-align: ${({ $align }) => $align || 'left'};
`;

export const Heading = styled.h2`
  color: ${({ $color }) => ($color ? theme.colors[$color] : theme.colors.text)};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes['3xl'])};
  font-weight: ${({ $weight }) => ($weight ? theme.fontWeights[$weight] : theme.fontWeights.bold)};
  line-height: ${({ $lineHeight }) => ($lineHeight ? theme.lineHeights[$lineHeight] : theme.lineHeights.tight)};
  margin-bottom: ${({ $mb }) => ($mb ? theme.space[$mb] : theme.space[4])};
  text-align: ${({ $align }) => $align || 'left'};
`; 