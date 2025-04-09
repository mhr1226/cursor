import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Main = styled.main`
  min-height: 100vh;
  padding-top: 60px; /* ヘッダーの高さ分 */
`;

export const MainContent = styled.div`
  padding-bottom: ${theme.space[12]};
`; 