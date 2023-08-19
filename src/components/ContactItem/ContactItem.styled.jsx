import styled from 'styled-components';

export const Li = styled.li`
  margin-left: 0;
  margin-right: 15px;
  padding: 0;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(odd) {
    background-color: lightblue;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 70px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  margin-top: 3px;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    background-color: #5187ec;
  }
`;

export const Span = styled.span`
  padding-left: 15px;
`;
