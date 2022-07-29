import { css } from '@emotion/react';
import { colors } from '../sharedColors';

const baseSize = css`
  font-size: 1.5em;
`;

export const styles = {
  underlinedText: css`
    text-decoration: underline;
  `,
  colorText: css`
    color: ${colors.red};
  `,
  highlightOnHover: css`
    &:hover {
      background-color: green;
    }
  `,
  composed: css`
    ${baseSize}
    text-align: right;
  `,

  dynamic: (hasColor: boolean) => {
    return css`
      color: ${hasColor ? 'red' : 'inherit'};
    `;
  },

  randomColor: () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return css`
      color: #${randomColor};
    `;
  },

  nestedTarget: css`
    & p {
      color: red;
    }
  `,

  box: css`
    border: 1px solid black;
    padding: 0.2em;
  `,
};
