import styled from "styled-components";
import { handleValues } from "styles/functions";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  .search-bar {
    background-color: ${(props) => props.theme.colors.section.title};
    padding: ${(props) => props.theme.spacings.medium};
    padding-left: ${(props) => props.theme.spacings.huge};
    margin-bottom: ${(props) => props.theme.spacings.medium};
    .input-bar {
      display: flex;
      align-items: center;
      width: fit-content;
      height: 100%;
      border: ${(props) => props.theme.sizes.xxmicro} solid #fff;
      border-radius: ${(props) => props.theme.sizes.medium};
      padding: ${(props) =>
        handleValues(props.theme.sizes.small, props.theme.sizes.medium)};

      input::placeholder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        font-style: italic;
      }

      input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: #fff;
        font-weight: 500;

        &:focus {
          color: #fff;
          font-weight: 500;
        }
      }

      .submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: fit-content;
        height: 100%;
        button {
          background-color: transparent;
          display: flex;
          width: fit-content;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${(props) => props.theme.spacings.large};

  h1 {
    position: absolute;
    width: 20vw;
    left: calc(50% - 10vw);
    text-align: center;
    color: ${(props) => props.theme.colors.section.paragraph};
  }
`;
