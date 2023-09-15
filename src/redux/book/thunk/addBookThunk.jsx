import { add_book } from "../actions";

export const addBookThunk = (bookinfo) => (dispatch) => {
  const { name, author, thumbnail, price, rating, featured } = bookinfo;
  fetch("http://localhost:9000/books/", {
    method: "POST",
    body: JSON.stringify({ name, author, thumbnail, price, rating, featured }),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => dispatch(add_book(data)));
};
