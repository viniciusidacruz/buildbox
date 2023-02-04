import styled from 'styled-components';

export const TextField = styled.input`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray['500']};
  width: 100%;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray['200']};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray['200']};
  }
`;