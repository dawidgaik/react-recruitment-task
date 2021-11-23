import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledDetails = styled.details`
  margin: 30px 0;
  position: relative;

  summary {
    position: relative;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    list-style: none;
    cursor: pointer;

    h3 {
      margin: 0;
    }
  }

  summary::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    display: inline-block;
    content: '+';
    margin-right: 20px;
  }

  &[open] {
    summary::after {
      content: '-';
    }
  }

  &[open] div {
    display: block;
  }

  div {
    display: none;
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
    padding: 20px 40px 20px 20px;
  }
`;
