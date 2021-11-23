import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
