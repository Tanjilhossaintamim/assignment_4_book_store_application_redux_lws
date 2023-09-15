import { delete_book } from "../actions";

export const deleteBookThunk = (id) => (dispatch) => {
  fetch(`http://localhost:9000/books/${id}`, { method: "DELETE" }).then((res) =>
    dispatch(delete_book(id))
  );
};
