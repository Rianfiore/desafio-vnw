import styled from "styled-components";
import { handleValues } from "../../styles/functions";

export const GoogleForm = styled.div`
  width: fit-content;
  transition: all 0.2s ease-in-out;
  .sign-up {
    padding: ${(props) =>
      handleValues(props.theme.spacings.small, props.theme.spacings.medium)};
    background-color: ${(props) => props.theme.colors.form.primaryColor};
    border-radius: ${(props) => props.theme.spacings.small};
    h3 {
    }

    .sign-up-box {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacings.small};
      .circles-decoration {
        display: flex;
        gap: ${(props) => props.theme.spacings.xxxsmall};
        .circle {
          width: ${(props) => props.theme.spacings.xsmall};
          height: ${(props) => props.theme.spacings.xsmall};
          background-color: ${(props) =>
            props.theme.colors.form.secondaryColor};
          border-radius: 100%;
        }
      }
    }

    .line-decoration {
      width: 100%;
      border-radius: 100vw;
      height: ${(props) => props.theme.sizes.xsmall};
      background-color: ${(props) => props.theme.colors.form.secondaryColor};
    }

    .text-box {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.sizes.xlarge};
      color: ${(props) => props.theme.colors.form.secondaryColor};
      h2 {
        font-size: ${(props) => props.theme.fonts.form.title};
        font-weight: bold;
      }

      h3 {
        font-size: ${(props) => props.theme.fonts.form.subtitle};
        font-weight: 400;
        padding-bottom: ${(props) => props.theme.spacings.small};
      }
    }
  }
  .link {
    display: flex;
    gap: ${(props) => props.theme.spacings.xxsmall};
    font-size: ${(props) => props.theme.fonts.form.link};
    font-weight: 600;
    padding-top: ${(props) => props.theme.spacings.xxsmall};
    color: ${(props) => props.theme.colors.form.linkColor};
  }

  &:hover {
    cursor: pointer;
    transform: scale(110%);
  }
`;
