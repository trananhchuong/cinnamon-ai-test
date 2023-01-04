import styled from "styled-components";
import { SELECTED_BG_COLOR } from "../../constants/VariablesStyles";

export const CircleLoadingWrapper = styled.div`
  .circle-loading {
    width: 2rem;
    height: 2rem;
    border-radius: 5.5rem;
    position: relative;
    margin: 0 auto;
  }

  .circle-loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 0.5rem solid white;
    border-right-color: ${(props) => props.color || SELECTED_BG_COLOR};
    border-bottom-color: ${(props) => props.color || SELECTED_BG_COLOR};
    animation: circleLoading 1s forwards infinite linear;
  }

  @keyframes circleLoading {
    to {
      transform: rotate(360deg);
    }
  }
`;
