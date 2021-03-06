import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'info' | 'error';
  hasDescription: 1 | 0;
}

// eslint-disable-next-line
const noDescriptionStyle = css `
  align-items: center;

  svg {
    margin-top: 0;
  }
`;

const toastTypeVariations = {
  // eslint-disable-next-line
  info: css `
    background: #ebf8ff;
    color: #3172b7;
  `,
  // eslint-disable-next-line
  success: css `
    background: #e6fffa;
    color: #2e656a;
  `,
  // eslint-disable-next-line
  error: css `
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  display: flex;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  background: #ebf8ff;
  color: #3172b7;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props => !props.hasDescription && noDescriptionStyle}
`;
