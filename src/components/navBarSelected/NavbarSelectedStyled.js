import styled from "styled-components";
import { SELECTED_BG_COLOR, TEXT_THIRD_COLOR } from "../../constants/VariablesStyles";

export const NavbarSelectedStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: -1px;

  background-color: ${SELECTED_BG_COLOR};

  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 24px;
  height: 48px;
  border-radius: 10px 10px 0 0;

  color: ${TEXT_THIRD_COLOR};

  .action__box {
    display: flex;
    align-items: center;
    justify-content: center;

    .seperate {
      height: 2rem;
      width: 2px;
      background: silver;
      margin: 0 12px;
    }
  }
`;
