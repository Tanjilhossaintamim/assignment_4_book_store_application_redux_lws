import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { status_change } from "../../redux/book/actions";

const BookNav = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const handelStatusChange = (changeType) => {
    dispatch(status_change(changeType));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${status == "All" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => handelStatusChange("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${status == "Featured" && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={() => handelStatusChange("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookNav;
