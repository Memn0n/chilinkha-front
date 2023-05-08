import {css} from "styled-components"

export const bigtab = (props) => {
    return css`
        @media only screen and (max-width: 1000px) {
            ${props}
      }
    `;
};

export const tab = (props) => {
    return css`
        @media only screen and (max-width: 820px) {
            ${props}
      }
    `;
};

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 620px) {
            ${props}
      }
    `;
};

export const mobile2 = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props}
      }
    `;
};
