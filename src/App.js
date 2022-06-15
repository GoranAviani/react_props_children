import logo from './logo.svg';
import './App.css';
import Book from "./components/Book";


function App() {
    const firstBook = {
        name: "book name",
        title: "book title"
    }

  return (
    <div className="App">
      <Book name = {firstBook.name} title = {firstBook.title}/>
    </div>
  );
}

export default App;
