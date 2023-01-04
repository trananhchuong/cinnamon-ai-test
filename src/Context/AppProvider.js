import { Octokit } from "@octokit/core";
import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [listUser, setListUser] = useState([]);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getListUsers();
  }, []);

  useEffect(() => {
    updateIsCheckedForAllUser(isCheckedAll);
  }, [isCheckedAll]);

  const getListUsers = async () => {
    try {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN,
      });

      const response = await octokit.request("GET /users", {
        org: "octokit",
        type: "private",
      });

      if (response.status === 200) {
        const customListUser = (response?.data || []).map((item) => {
          return {
            ...item,
            isChecked: false,
          };
        });
        setListUser(customListUser);
        setIsLoadingGlobal(false);
      } else {
        setListUser([]);
        setIsLoadingGlobal(false);
      }
    } catch (e) {
      console.log("🚀 ~ file: AppProvider.js:41 ~ getHasAuthentication ~ e", e);
      setIsLoadingGlobal(false);
    }
  };

  const updateIsCheckedUser = (idUser) => {
    try {
      const newListUser = structuredClone(listUser);
      let foundIndex = newListUser.findIndex((x) => x.id == idUser);
      newListUser[foundIndex].isChecked = !newListUser[foundIndex]?.isChecked;
      setListUser(newListUser);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppProvider.js:48 ~ updateIsCheckedUser ~ error",
        error
      );
    }
  };

  const updateIsCheckedForAllUser = (isCheckedAll) => {
    try {
      let newListUser = structuredClone(listUser);

      newListUser = newListUser.map((x) => {
        return {
          ...x,
          isChecked: isCheckedAll,
        };
      });

      setListUser(newListUser);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppProvider.js:48 ~ updateIsCheckedUser ~ error",
        error
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        listUser,
        isLoadingGlobal,
        updateIsCheckedUser,
        setIsCheckedAll,
        isCheckedAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
