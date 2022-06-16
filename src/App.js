import React from 'react'

import './App.css';

import Book from "./components/Book";
import Description from "./components/Description"
import { createContext, useContext } from "react";

const ThemeContext = createContext({color: "red"});

function App() {
    const firstBook = {
        name: "book name",
        author: "book author"
    }
    const someVar = true

  return (
    <ThemeContext.Provider value={{color: "blue"}}  className="App">
      <Book name = {firstBook.name} author = {firstBook.author}>{someVar? <Description/>: "nothing to show"}</Book>
      <Book name = {firstBook.name} author = {firstBook.author}></Book>
    </div>
  );
}

export const useTheme = () => useContext(ThemeContext)
export default App;
