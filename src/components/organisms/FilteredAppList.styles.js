import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 800px;
  margin: 100px auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 30px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
`;
