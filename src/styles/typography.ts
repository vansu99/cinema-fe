import { css } from "styled-components";

export const typography = {
  family: {
    base: css`
      font-family: 'Montserrat', sans-serif;
    `,
  },
  size: {
    larger: css`
      font-size: 3.4rem;
      line-height: 1.4;
    `,
    large: css`
      font-size: 2.5rem;
      line-height: 1.4;
    `,
    medium: css`
      font-size: 1.6rem;
      line-height: 1.4;
    `,
    small: css`
      font-size: 1.4rem;
      line-height: 1.5rem;
    `,
    xsmall: css`
      font-size: 1.2rem;
      line-height: 1.125rem;
    `,
  },
  weight: {
    light: css`
      font-weight: 300;
    `,
    regular: css`
      font-weight: 400;
    `,
    normal: css`
      font-weight: 500;
    `,
    bold: css`
      font-weight: 700;
    `,
  },
};
