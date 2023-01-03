import React from "react";
import PropTypes from "prop-types";

RowComponent.propTypes = {};

function RowComponent(props = {}) {
  return (
    <tr>
      <td className="d-md-none d-table-cell">
        <div className="card">
          <div className="card-body">
            <strong class="card-title">{props.description}</strong>
            <p className="card-text">
              UPC {props.upc}
              <br />
              {props.isn && `ISN ${props.isn}`}
            </p>
            <button className="btn btn-secondary btn-block">Action</button>
          </div>
        </div>
      </td>
      <td className="d-none d-md-table-cell">{props.upc}</td>
      <td className="d-none d-md-table-cell">{props.isn}</td>
      <td className="d-none d-md-table-cell">{props.description}</td>
      <td className="d-none d-md-table-cell">
        <button className="btn btn-secondary">Action</button>
      </td>
    </tr>
  );
}

export default RowComponent;
