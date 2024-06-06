import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12.7vh;
  margin-bottom: -12px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 47.7%;
    height: 3.3rem;
    padding: 0px 20px;
    font-size: 1.1rem;
    border-radius: 8px 0px 0px 8px;
    border-right: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.border_input};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.color_input};

    &:hover {
      border-right: none;
      outline: 1px solid ${({ theme }) => theme.colors.border_input_blue};
      + .lupa svg {
        outline: 1px solid ${({ theme }) => theme.colors.border_input_blue};
      }
    }

    &:focus {
      border-right: none;
      outline: 2px solid ${({ theme }) => theme.colors.border_input_blue};
      + .lupa svg {
        outline: 2px solid ${({ theme }) => theme.colors.border_input_blue};
      }
    }

  }

  .lupa {
    width: 3.1rem;
    height: 3.3rem;

    svg {
      width: 100%;
      height: 100%;
      padding: 12px 0px;
      border-radius: 0px 8px 8px 0px;
      border: 1px solid ${({ theme }) => theme.colors.border_input};
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.box_shadow};
    }
  }
`
