import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.gray['700']};
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
