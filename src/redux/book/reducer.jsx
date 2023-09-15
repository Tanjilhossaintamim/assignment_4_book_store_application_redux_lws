import {
  ADDBOOK,
  DELETEBOOK,
  EDITBOOK,
  LOADBOOK,
  RESTETSEARCE,
  SEARCH,
  STATUSCHANGE,
} from "./actionsTypes";

const initialState = {
  books: [],
  status: "All",
  selectedBook: {},
  update: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return {
        ...state,
        books: [...action.payload],
      };
    case ADDBOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case DELETEBOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id != action.payload),
      };
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        books: [...action.payload],
      };
    case EDITBOOK:
      return {
        ...state,
        selectedBook: action.payload,
        update: true,
      };
    case RESTETSEARCE:
      return {
        ...state,
        selectedBook: {},
        update: false,
      };
    default:
      return state;
  }
};
export default reducer;
