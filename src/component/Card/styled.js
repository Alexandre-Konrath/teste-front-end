import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 15px 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .cart {
    width: 17.2rem;
    height: 25.5rem;
    margin: 15.8px;
    border-radius: 8px;
    transition: transform 0.3s;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.box_shadow};
    background-color: ${({ theme }) => theme.colors.background};

    .img {
      width: 100%;
      height: 43.3%;
      position: relative;

      .close {
        top: -12px;
        right: -12px;
        padding: 4px;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.2s, outline 0.2s, color 0.2s;
        outline: 2px solid ${({ theme }) => theme.colors.border_input};
        box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.colors.box_shadow200};
        background-color: ${({ theme }) => theme.colors.background};

        svg {
          width: 25px;
          height: 25px;

          path {
            stroke: #676767;
          }
        }

        &:hover {
          cursor: pointer;
          transform: scale(1.1) rotate(-90deg);
          outline: 2px solid ${({ theme }) => theme.colors.gray_hover};
          svg path {
            stroke: #d41519;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0px 0px;
        object-fit: cover;
        object-position: center;
      }

      .tipo {
        bottom: 5px;
        right: 5px;
        font-size: 14px;
        padding: 2px 5px;
        border-radius: 4px;
        position: absolute;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.background};
      }
    }

    .description {
      padding: 4px 20px 20px 10px;
      display: flex;
      flex-direction: column;

      .text {
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 8;

        p {
          padding: 8px 5px 0px 5px;
          font-size: 17.3px;
          text-align: start;
        }
      }
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .tipo.paisagem {
    background-color: ${({ theme }) => theme.colors.paisagem};;
  }

  .tipo.flor {
    background-color: ${({ theme }) => theme.colors.flor};;
  }

  .tipo.pizza {
    background-color: ${({ theme }) => theme.colors.pizza};;
  }
`
