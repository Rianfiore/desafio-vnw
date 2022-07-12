import styled from "styled-components";
import { handleValues } from "styles/functions";
export const Header = styled.header`
  z-index: 1;
  position: fixed;
  width: 100vw;
  background-color: ${(props) =>
    props.bgColor ? "transparent" : props.theme.colors.nav.bg};
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.5));

  nav {
    display: grid;
    grid-template-columns: 0.5fr 0.6fr 0.2fr;
    padding: ${(props) =>
      handleValues(props.theme.spacings.small, props.theme.spacings.xlarge)};

    .logo {
      cursor: pointer;
    }
    .navigation-items {
      display: flex;
      justify-content: space-between;
      gap: clamp(15px, 0.5vw, 25px);
      align-items: center;

      li {
        color: ${(props) =>
          props.bgColor ? "#fff" : props.theme.colors.nav.text};
        font-weight: 300;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        border-color: ${(props) =>
          props.bgColor ? "#fff" : props.theme.colors.nav.hover};
        border-radius: 2vw;
        padding: 0.8vw;

        &:hover {
          border: 2px solid
            ${(props) =>
              props.bgColor ? "#fff" : props.theme.colors.nav.hover};
          padding: 0.8vw;
        }
      }
    }
  }
`;
