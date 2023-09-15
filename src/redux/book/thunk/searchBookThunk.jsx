import { search_book } from "../actions";

export const searchbookThunk = (value) => (dispatch) => {
  fetch(`http://localhost:9000/books?q=${value}`)
    .then((res) => res.json())
    .then((data) => dispatch(search_book(data)));
};
