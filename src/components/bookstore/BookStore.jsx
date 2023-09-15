import React, { useEffect } from "react";
import BookNav from "./BookNav";
import BookAddForm from "./BookAddForm";
import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import { load_book_thunk } from "../../redux/book/thunk/loadBookThunk";

const BookStore = () => {
  const books = useSelector((state) => state.books);
  const status = useSelector((state) => state.status);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(load_book_thunk());
  }, []);
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <BookNav />
          <div className="lws-bookContainer">
            {/* <!-- Card 1 --> */}
            {books
              .filter((book) => {
                switch (status) {
                  case "All":
                    return true;

                  case "Featured":
                    return book.featured;
                }
              })
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
        {/* form  */}
        <div>
          <BookAddForm  />
        </div>
      </div>
    </main>
  );
};

export default BookStore;
