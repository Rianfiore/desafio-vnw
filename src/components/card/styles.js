import styled from "styled-components";

export const Card = styled.div`
  background: url(${(prop) => prop.bg}) no-repeat center;
  background-size: cover;
  width: ${(props) => props.theme.sizes.xxxhuge};
  height: ${(props) => props.theme.sizes.xxxhuge};
  transition: all 0.2s ease-in-out;
  opacity: 0.9;

  .squad {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .effect {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      width: 100%;
      height: 50%;
      padding-bottom: ${(props) => props.theme.spacings.small};
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.colors.gradient} 0%,
        rgba(0, 18, 255, 0) 100%
      );
      h2 {
        color: ${(props) => props.theme.colors.card.title};
        padding-bottom: ${(props) => props.theme.spacings.xsmall};
        font-size: ${(props) => props.theme.fonts.card.title};
      }

      h3 {
        color: ${(props) => props.theme.colors.card.subtitle};
        font-weight: 400;
        font-size: ${(props) => props.theme.fonts.card.subtitle};
      }
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(105%);
    opacity: 1;
    animation: fadeIn 0.5s ease-in-out forwards;
  }
  &:not(:hover) {
    cursor: inherit;
    transform: scale(100%);
    opacity: 0.9;
    animation: fadeOut 0.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      background-size: 100%;
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
      background-size: 100%;
    }
  }
`;
