import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.gray['550']};
  background-color: ${({ theme }) => theme.colors.gray['600']};
  padding: 1.6rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button:last-child {
    margin-left: 1rem;
  }
`;
