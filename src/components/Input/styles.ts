import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

// eslint-disable-next-line
const isFocusedIndication = css `
  color: #ff9000;
  border-color: #ff9000;
`;

// eslint-disable-next-line
const isFilledIndication = css `
  color: #ff9000;
`;

// eslint-disable-next-line
const isErroredIndication = css `
  border-color: #c53030;
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && isErroredIndication}
  ${props => props.isFocused && isFocusedIndication}
  ${props => props.isFilled && isFilledIndication}

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
