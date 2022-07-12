import styled from "styled-components";
import { handleValues } from "styles/functions";

export const Section = styled.section`
  .main {
    height: 90vh;
    background: url(${(props) => props.bg}) center no-repeat;
    background-size: 100vw;
    padding-top: ${(props) => props.theme.spacings.xhuge};

    width: 100%;

    .content {
      padding: ${(props) =>
        handleValues(
          props.theme.spacings.xxlarge,
          props.theme.spacings.xxxhuge
        )};

      .title {
        padding-bottom: ${(props) => props.theme.spacings.xlarge};
        h1 {
          font-size: ${(props) => props.theme.fonts.main.title};
          color: ${(props) => props.theme.colors.main.title};

          span {
            color: ${(props) => props.theme.colors.main.decoration};
            font-weight: 300;
          }
        }
      }
    }
  }

  .topic {
    background-color: ${(props) => props.theme.colors.section.bg};
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.spacings.xxhuge};
    padding: ${(props) =>
      handleValues(props.theme.spacings.xxlarge, props.theme.spacings.xhuge)};
    padding-top: ${(props) => props.theme.spacings.xhuge};
    padding-right: ${(props) =>
      props.imageType === "events" ? props.theme.spacings.xxhuge : "0px"};
    height: 90vh;

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      figure {
        width: 80%;
      }
      h2 {
        font-size: ${(props) => props.theme.fonts.section.title};
        padding-left: ${(props) => props.theme.spacings.huge};
        font-weight: 800;
        color: ${(props) => props.theme.colors.section.title};
      }
    }

    #background {
      padding-right: 0px;
      gap: ${(props) => props.theme.spacings.xxhuge};
    }

    #events {
      width: 100%;
      gap: 0px;
    }

    .logo {
      width: 27.5%;
    }

    .background {
      width: 80%;
      img {
        width: 100vw;
      }
    }

    .component-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${(props) => props.theme.spacings.large};
      width: 70vw;

      h2 {
        font-size: ${(props) => props.theme.fonts.section.title};
        font-weight: 800;
        color: ${(props) => props.theme.colors.section.title};
      }

      .children {
        display: flex;
        flex-direction: column;
        width: 38vw;
        gap: ${(props) => props.theme.spacings.xlarge};
      }
    }

    .text-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${(props) => props.theme.spacings.large};
      width: 50%;

      h2 {
        font-size: ${(props) => props.theme.fonts.section.title};
        font-weight: 800;
        color: ${(props) => props.theme.colors.section.title};
      }

      .subtitle {
        font-size: ${(props) => props.theme.fonts.section.subtitle};
      }

      .paragraph {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.spacings.large};
        p {
          font-size: ${(props) => props.theme.fonts.section.paragraph};
          font-weight: 500;
          color: ${(props) => props.theme.colors.section.paragraph};
        }
      }
    }
  }

  .search {
    background-color: ${(props) => props.theme.colors.section.bg};
    padding: ${(props) =>
      handleValues(props.theme.sizes.xxlarge, props.theme.sizes.huge)};
    padding-top: ${(props) => props.theme.spacings.xxhuge};

    .nav-bar {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacings.large};

      .title {
        font-size: ${(props) => props.theme.fonts.section.title};
        font-weight: 800;
        color: ${(props) => props.theme.colors.section.title};
        padding-bottom: ${(props) => props.theme.spacings.small};
      }
    }
  }
`;
