import styled from "styled-components";
import * as palette from "../../constants/VariablesStyles";

export const TableStyled = styled.div`
  /* Page Wrapper/Container Style */
  &.container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }

  &.padding-bottom {
    padding-bottom: 48px;
  }

  /* Responsive Table Style */
  .responsive-table {
    background-color: ${palette.TABLE_BG_COLOR};
    border-collapse: collapse;
    border-radius: 10px;
    width: 100%;
    margin: 2rem 0;
    overflow: hidden;
    &__row {
      display: grid;
      border-bottom: 1px solid ${palette.TABLE_BORDER_COLOR};
      padding: 0 1.5rem;

      @media ${palette.device.minTablet} {
        grid-template-columns: 0.5fr 0.5fr 2fr 2fr 1fr;
      }

      @media ${palette.device.tabletToDesktop} {
        grid-template-columns: 1fr 2fr 1fr;
      }

      th,
      td {
        padding: 1.8rem;
      }
    }
    &__head {
      background-color: ${palette.HOVER_BG_COLOR};

      @media ${palette.device.desktop} {
        display: none;
      }

      &__title {
        display: flex;
        align-items: center;
        font-weight: 500;
        text-transform: capitalize;
        color: ${palette.TEXT_SECONDARY_COLOR};
        font-size: ${palette.titleSize.M};

        &--actions {
          justify-content: center;
        }
      }
    }
    &__body {
      .responsive-table__row {
        transition: 0.1s linear;
        transition-property: color, background;
        
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          color: $hover-text-color;
          background-color: ${palette.HOVER_BG_COLOR};
        }
        &.is-active {
          background-color: ${palette.TABLE_BG_COLOR_ACTIVE};
        }
      }
      &__text {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: ${palette.titleSize.M};

        &::before {
          margin-right: 1rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        @media ${palette.device.desktop} {
          &::before {
            content: attr(data-title) " :";
          }
        }

        @media ${palette.device.mobileXXS} {
          &::before {
            width: 100%;
            margin-bottom: 1rem;
          }
        }

        &--name {
          font-weight: 600;

          @media ${palette.device.minTablet} {
            &::before {
              display: none;
            }
          }

          @media ${palette.device.tabletToDesktop} {
            grid-column: 1 / 2;
            flex-direction: column;
          }
        }
        &--status,
        &--types,
        &--update {
          a {
            text-decoration: none;
            color: ${palette.TEXT_COLOR};
          }

          @media ${palette.device.tabletToDesktop} {
            grid-column: 2/ 3;
          }

          img.avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 14px;
            object-fit: cover;
          }
        }
        &--country {
          @media ${palette.device.tabletToDesktop} {
            grid-column: 3/ -1;
          }
        }
        &--name,
        &--country {
          @media ${palette.device.tabletToDesktop} {
            grid-row: 2;
          }
        }
      }
    }
  }

  .actions__box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
      cursor: pointer;
    }

    .seperate {
      height: 2rem;
      width: 2px;
      background: silver;
      margin: 0 12px;
    }
  }

  .checkbox-input {
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const NoneDataStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30rem;

  .data-none__box {
    display: flex;
    flex-direction: column;
    align-items: center;

    .fetch-data {
      margin-top: 14px;
      border: thin solid ${palette.SELECTED_BG_COLOR};
      padding: 5px 10px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
export const LoadingBoxStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
