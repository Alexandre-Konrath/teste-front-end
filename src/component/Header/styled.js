import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3px 8px;
  display: flex;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.box_shadow};;
  background-color: ${({ theme }) => theme.colors.background};;

  .img-logo {
    margin: 2px 9px 0px 0px;

    .logo {
      width: 62px;
      height: 62px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 21.9px;
      margin-bottom: 3px;
    }

    .nome {
      display: flex;
      align-items: center;

      p {
        font-size: 18.2px;
        font-style: italic;
        color: ${({ theme }) => theme.colors.gray};;
      }

      span {
        margin: 0px 7px 0px 5px;
        letter-spacing: -0.2em;
        white-space: nowrap;
        font-family: monospace;
        color: ${({ theme }) => theme.colors.gray};;
      }
    }
  }

  @media screen and (max-width: 530px) {
      .title {
        h1 {
          font-size: 16px;
        }
        .nome {
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
      .title {
        h1 {
          font-size: 14px;
        }
        .nome {
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
