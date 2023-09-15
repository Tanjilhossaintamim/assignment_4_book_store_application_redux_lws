import { load_book } from "../actions";

export const load_book_thunk = () => (dispatch) => {
  fetch("http://localhost:9000/books")
    .then((res) => res.json())
    .then((data) => dispatch(load_book(data)));
};
