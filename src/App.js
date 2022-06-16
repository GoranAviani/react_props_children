import './App.css';
import Book from "./components/Book";
import Description from "./components/Description"
import {useState} from "react";

function App() {
    const firstBook = {
        name: "book name",
        author: "book author"
    }

    const {someState, setSomeState} = useState('')

  return (
    <div className="App">
      <Book name = {firstBook.name} author = {firstBook.author}><Description/></Book>
      <Book name = {firstBook.name} author = {firstBook.author}></Book>
    </div>
  );
}

export default App;
