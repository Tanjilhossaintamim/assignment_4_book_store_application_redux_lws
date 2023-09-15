import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addBookThunk } from "../../redux/book/thunk/addBookThunk";
import { useEffect, useState } from "react";
import { updateBookThunk } from "../../redux/book/thunk/updateBook";
import { reset_book } from "../../redux/book/actions";

const BookAddForm = () => {
  const selectedBook = useSelector((state) => state.selectedBook);
  const update = useSelector((state) => state.update);
  const dispatch = useDispatch();

  const [bookInfo, setBookInfo] = useState({});
  useEffect(() => {
    setBookInfo(selectedBook);
  }, [update, selectedBook]);

  const handelinputchange = (e) => {
    const updateBookInfo = { ...bookInfo };
    updateBookInfo[e.target.name] =
      e.target.name == "featured" ? e.target.checked : e.target.value;
    setBookInfo(updateBookInfo);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookThunk(bookInfo));
    dispatch(reset_book());

    console.log(bookInfo);
  };

  const initialValues = {
    name: "",
    author: "",
    thumbnail: "",
    featured: "",
    price: "",
    rating: "",
  };

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      dispatch(addBookThunk(values));
      handleReset();
    },
  });
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form
        className="book-form"
        onSubmit={update ? handelFormSubmit : handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={update ? bookInfo.name : values.name}
            onChange={update ? handelinputchange : handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={update ? bookInfo.author : values.author}
            onChange={update ? handelinputchange : handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={update ? bookInfo.thumbnail : values.thumbnail}
            onChange={update ? handelinputchange : handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={update ? bookInfo.price : values.price}
              onChange={update ? handelinputchange : handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={update ? bookInfo.rating : values.rating}
              onChange={update ? handelinputchange : handleChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={bookInfo?.featured ? true : false}
            value={update ? bookInfo.featured : values.featured}
            onChange={update ? handelinputchange : handleChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button
          type="submit"
          className={`submit ${update && "updatesubmit"}`}
          id="submit"
        >
          {update ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookAddForm;
