import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RowComponent from "./RowComponent";
import { TableStyled } from "./TableStyled";

TableComponent.propTypes = {};

function TableComponent(props) {
  useEffect(() => {
    // // Select thead titles from Dom
    // const headTitleName = document.querySelector(
    //   ".responsive-table__head__title--name"
    // );
    // const headTitleStatus = document.querySelector(
    //   ".responsive-table__head__title--status"
    // );
    // const headTitleTypes = document.querySelector(
    //   ".responsive-table__head__title--types"
    // );
    // const headTitleUpdate = document.querySelector(
    //   ".responsive-table__head__title--update"
    // );
    // const headTitleActions = document.querySelector(
    //   ".responsive-table__head__title--actions"
    // );
    // // Select tbody text from Dom
    // const bodyTextName = document.querySelectorAll(
    //   ".responsive-table__body__text--name"
    // );
    // const bodyTextStatus = document.querySelectorAll(
    //   ".responsive-table__body__text--status"
    // );
    // const bodyTextTypes = document.querySelectorAll(
    //   ".responsive-table__body__text--types"
    // );
    // const bodyTextUpdate = document.querySelectorAll(
    //   ".responsive-table__body__text--update"
    // );
    // const bodyTextActions = document.querySelectorAll(
    //   ".responsive-table__body__text--actions"
    // );
    // // Select all tbody table row from Dom
    // const totalTableBodyRow = document.querySelectorAll(
    //   ".responsive-table__body .responsive-table__row"
    // );
    // // Get thead titles and append those into tbody table data items as a "data-title" attribute
    // for (let i = 0; i < totalTableBodyRow.length; i++) {
    //   bodyTextName[i].setAttribute("data-title", headTitleName.innerText);
    //   bodyTextStatus[i].setAttribute("data-title", headTitleStatus.innerText);
    //   bodyTextTypes[i].setAttribute("data-title", headTitleTypes.innerText);
    //   bodyTextUpdate[i].setAttribute("data-title", headTitleUpdate.innerText);
    //   bodyTextActions[i].setAttribute("data-title", headTitleActions.innerText);
    // }
  }, []);

  return (
    <TableStyled className="container">
      <table className="responsive-table">
        <thead className="responsive-table__head">
          <tr className="responsive-table__row">
            <th className="responsive-table__head__title responsive-table__head__title--name">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="checkbox-input checkbox__all"
              />
            </th>
            <th className="responsive-table__head__title responsive-table__head__title--status">
              No.
            </th>
            <th className="responsive-table__head__title responsive-table__head__title--types">
              Name
            </th>
            <th className="responsive-table__head__title responsive-table__head__title--update">
              Blog
            </th>
            <th className="responsive-table__head__title responsive-table__head__title--actions">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="responsive-table__body">
          <tr className="responsive-table__row">
            <td className="responsive-table__body__text responsive-table__body__text--name">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="checkbox-input"
              />
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--status">
              1
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--types">
              Attendee, F1
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--update">
              Jul 17, 2021, 01:14 PM
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--actions">
              <div className="actions__box">
                <img src="/assets/download_icon.svg" alt={`images download`} />
                <div className="seperate" />
                <img src="/assets/remove_icon.svg" alt={`images remove`} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </TableStyled>
  );
}

export default TableComponent;
