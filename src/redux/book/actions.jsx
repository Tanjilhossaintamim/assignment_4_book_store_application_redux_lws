import {
  ADDBOOK,
  DELETEBOOK,
  EDITBOOK,
  LOADBOOK,
  RESTETSEARCE,
  SEARCH,
  STATUSCHANGE,
} from "./actionsTypes";

export const add_book = (bookinfo) => {
  return {
    type: ADDBOOK,
    payload: bookinfo,
  };
};
export const search_book = (bookinfo) => {
  return {
    type: SEARCH,
    payload: bookinfo,
  };
};

export const delete_book = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};

export const load_book = (books) => {
  return {
    type: LOADBOOK,
    payload: books,
  };
};
export const status_change = (changeType) => {
  return {
    type: STATUSCHANGE,
    payload: changeType,
  };
};

export const edit_book = (bookinfo) => {
  return {
    type: EDITBOOK,
    payload: bookinfo,
  };
};
export const reset_book = () => {
  return {
    type: RESTETSEARCE,
  };
};
