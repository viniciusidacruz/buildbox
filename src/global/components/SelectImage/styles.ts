import styled from 'styled-components';
import { RiGalleryFill } from 'react-icons/ri';

export const SelectImage = styled.label`
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 40%;
  border: 1px solid ${({ theme }) => theme.colors.gray['500']};
  cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;

export const Input = styled.input``;

export const Icon = styled(RiGalleryFill)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gray['200']};
`;
