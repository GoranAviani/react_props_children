import './App.css';
import Book from "./components/Book";
import Description from "./components/Description"

function App() {
    const firstBook = {
        name: "book name",
        author: "book author"
    }

  return (
    <div className="App">
      <Book name = {firstBook.name} author = {firstBook.author}>This is a child</Book>
      <Book name = {firstBook.name} author = {firstBook.author}></Book>
    </div>
  );
}

export default App;
