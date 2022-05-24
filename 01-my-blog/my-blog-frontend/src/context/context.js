import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/reducer';

const url = '/api/articles/';
const AppContext = React.createContext();

const articleInitialState = {
  loading: false,
  /*likesNum: 0,
  dislikesNum: 0,
  comments: [],
  url: url,*/
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, articleInitialState);

  const remove = (commentId) => {
    dispatch({ type: 'REMOVE', payload: commentId });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const articles = await response.json();

    dispatch({ type: 'DISPLAY_ARTICLES', payload: articles });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
