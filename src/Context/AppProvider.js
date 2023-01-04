import { Octokit } from "@octokit/core";
import React, { createContext, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [listUser, setListUser] = useState([]);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    getListUsers();
  }, []);

  useEffect(() => {
    updateIsCheckedForAllUser(isCheckedAll);
  }, [isCheckedAll]);

  useEffect(() => {
    if (searchText && searchText !== null) {
      debounceHandleSearchUsers(searchText);
    } else {
      setListUser([]);
    }
  }, [searchText]);

  const debounceHandleSearchUsers = useDebounce((value) => {
    handleSearchUsers(value);
  }, 300);

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

  const handleSearchUsers = async (searchText) => {
    try {
      setIsLoadingGlobal(true);

      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN,
      });
      const response = await octokit.request(
        "GET /search/users{?q,sort,order,per_page,page}",
        {
          q: searchText,
        }
      );

      if (response.status === 200) {
        const customListUser = (response?.data?.items || []).map((item) => {
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
        setSearchText,
        searchText,
        getListUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
