import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import * as palette from "../../constants/VariablesStyles";

export const SearchWrap = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled(Container)`
  display: flex;
  justify-content: start;

  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;

  padding: 30px 0;

  ${Container}
`;

export const Title = styled.div`
  color: ${palette.TEXT_SECONDARY_COLOR};
  font-size: ${palette.titleSize.L};
  font-weight: ${palette.titleLineHeight.L};
`;

export const SearchContent = styled.div`
  border: thin solid;
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  padding: 1rem;

  img {
    width: 1.6rem;
    height: 1.7rem;
    margin-right: 1.2rem;
  }

  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
