import { load_book } from "../actions";
import { load_book_thunk } from "./loadBookThunk";

export const updateBookThunk = (bookinfo) => (dispatch) => {
  fetch(`http://localhost:9000/books/${bookinfo.id}/`, {
    method: "PUT",
    body: JSON.stringify({ ...bookinfo }),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) =>dispatch(load_book_thunk()));
};
