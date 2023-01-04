import React, { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../../Context/AppProvider";
import Checked from "../checked/Checked";
import NavbarSelected from "../navBarSelected/NavbarSelected";
import RowComponent from "./RowComponent";
import { NoneDataStyled, TableStyled } from "./TableStyled";
import classNames from "classnames";

TableComponent.propTypes = {};

function TableComponent(props) {
  const {
    listUser,
    isLoadingGlobal,
    updateIsCheckedUser,
    setIsCheckedAll,
    isCheckedAll,
    getListUsers,
  } = useContext(AppContext);

  const getSelectedCount = (listUser) => {
    let count = 0;
    listUser.forEach((user) => {
      if (user.isChecked) {
        count++;
      }
    });
    return count;
  };

  const countSelected = useMemo(() => {
    return getSelectedCount(listUser);
  }, [listUser]);

  const handleIsCheckedAll = () => {
    setIsCheckedAll(!isCheckedAll);
  };

  const renderNavBarSelected = () => {
    if (countSelected == 0) return <div />;

    return <NavbarSelected count={countSelected} />;
  };

  const renderNoneData = () => {
    return (
      <NoneDataStyled>
        <div className="data-none__box">
          None Data
          <div className="fetch-data" onClick={getListUsers}>
            Reload data default
          </div>
        </div>
      </NoneDataStyled>
    );
  };

  return (
    <TableStyled
      className={classNames({
        container: true,
        "padding-bottom": countSelected > 0,
      })}
    >
      <table className="responsive-table">
        <thead className="responsive-table__head">
          <tr className="responsive-table__row">
            <th className="responsive-table__head__title responsive-table__head__title--name">
              <Checked
                isChecked={isCheckedAll}
                handleOnclickImg={handleIsCheckedAll}
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
          {listUser.length === 0
            ? renderNoneData()
            : listUser.map((item, index) => {
                const { avatar_url, html_url, login, isChecked, id } = item;

                return (
                  <React.Fragment key={id}>
                    <RowComponent
                      updateIsCheckedUser={updateIsCheckedUser}
                      no={index + 1}
                      name={login}
                      avatarUrl={avatar_url}
                      blogUrl={html_url}
                      isChecked={isChecked}
                      id={id}
                    />
                  </React.Fragment>
                );
              })}
        </tbody>
      </table>
      {renderNavBarSelected()}
    </TableStyled>
  );
}

export default TableComponent;
