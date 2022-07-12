import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: 110%;
  padding: ${(props) => props.theme.spacings.xxhuge};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.huge};
  transition: all 1s ease-in-out;
  .title {
    font-size: ${(props) => props.theme.fonts.section.title};
    color: ${(props) => props.theme.colors.card.title};
  }

  .content {
    display: flex;
    gap: ${(props) => props.theme.spacings.huge};

    .follow-text {
      font-size: ${(props) => props.theme.fonts.article.paragraph};
      color: ${(props) => props.theme.colors.card.title};
      font-weight: 600;
      width: 20%;
    }

    .social-network {
      display: flex;
      gap: ${(props) => props.theme.spacings.large};

      img {
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(110%);
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    animation: fadeIn 1s ease-in-out forwards;
  }

  &:not(:hover) {
    cursor: inherit;
    opacity: 0.9;
    animation: fadeOut 1s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      background-size: 110%;
    }

    to {
      background-size: 120%;
    }
  }

  @keyframes fadeOut {
    from {
      background-size: 120%;
    }

    to {
      background-size: 110%;
    }
  }
`;
