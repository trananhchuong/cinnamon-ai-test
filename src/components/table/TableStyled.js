import styled from "styled-components";
import * as palette from "../../constants/VariablesStyles";

export const TableStyled = styled.div`
  /* Page Wrapper/Container Style */
  &.container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
  }

  /* Responsive Table Style */
  .responsive-table {
    background-color: ${palette.TABLE_BG_COLOR};
    border-collapse: collapse;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.02);
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
        padding: 1rem;
      }
    }
    &__head {
      background-color: ${palette.TABLE_HEAD_BG_COLOR};

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
      }
      &__text {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
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
          @media ${palette.device.tabletToDesktop} {
            grid-column: 2/ 3;
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

    .seperate {
      height: 2rem;
      width: 2px;
      background: silver;
      margin: 0 12px;
    }
  }


  .checkbox-input{
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
  }
`;
