import styled from 'styled-components';

export const P = styled.p`
  display: block;
  margin-bottom: 0;
  padding: 0;
`;

export const Input = styled.input`
  width: 150px;
  border-radius: 4px;
  border: none;
  outline: 2px solid grey;
  font-weight: 600;
  color: #5187ec;
  &:focus {
    outline: 2px solid #5187ec;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
