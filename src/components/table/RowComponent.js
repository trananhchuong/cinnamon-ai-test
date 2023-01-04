import React from "react";
import PropTypes from "prop-types";
import Checked from "../checked/Checked";
import classNames from "classnames";

RowComponent.propTypes = {};

function RowComponent({
  id,
  no,
  name,
  blogUrl,
  avatarUrl,
  isChecked,
  updateIsCheckedUser,
}) {
  const handleClickChecked = () => {
    updateIsCheckedUser(id);
  };

  return (
    <tr
      className={classNames({
        "responsive-table__row": true,
        "is-active": isChecked,
      })}
      key={id}
    >
      <td className="responsive-table__body__text responsive-table__body__text--name">
        <Checked isChecked={isChecked} handleOnclickImg={handleClickChecked} />
      </td>
      <td className="responsive-table__body__text responsive-table__body__text--status">
        {no}
      </td>
      <td className="responsive-table__body__text responsive-table__body__text--types">
        <img src={avatarUrl} alt={name} className="avatar" /> {name}
      </td>
      <td className="responsive-table__body__text responsive-table__body__text--update">
        <a href={blogUrl} target="_blank">
          {blogUrl}
        </a>
      </td>
      <td className="responsive-table__body__text responsive-table__body__text--actions">
        <div className="actions__box">
          <img src="/assets/download_icon.svg" alt={`images download`} />
          <div className="seperate" />
          <img src="/assets/remove_icon.svg" alt={`images remove`} />
        </div>
      </td>
    </tr>
  );
}

export default RowComponent;
