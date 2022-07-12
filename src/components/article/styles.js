import styled from "styled-components";

export const Article = styled.article`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.large};
  .image-bg {
    width: 7vw;
    height: 7vw;
    background-color: ${(props) =>
      props.theme.colors.article.icon.primaryColor};
    border-width: 4px;
    border-radius: 100%;
    border-style: dashed;
    border-color: ${(props) => props.theme.colors.article.icon.secondaryColor};

    .pc-icon {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50%;
        height: auto;
      }
    }
  }

  .article-content {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacings.medium};
    width: 80%;

    h3 {
      font-size: ${(props) => props.theme.fonts.article.title};
      color: ${(props) => props.theme.colors.article.title};
      text-transform: uppercase;
    }

    h4 {
      font-size: ${(props) => props.theme.fonts.article.paragraph};
      font-weight: 500;
      color: ${(props) => props.theme.colors.article.paragraph};
    }
  }
`;
