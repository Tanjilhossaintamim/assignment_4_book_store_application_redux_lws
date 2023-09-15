import { Provider } from "react-redux";
import Header from "./components/Header";
import BookStore from "./components/bookstore/BookStore";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BookStore />
      </Provider>
    </>
  );
}

export default App;
