import React from "react";
import BookEdit from "./BookEdit";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import BooksContext from "./books";
import BookShow from "./BookShow";

const BookApp = () => {
  return <>
  <BookCreate/>
    <BookEdit/>
    <BooksContext/>
    <BookList/>
    <BookShow/>
  </>;
};

export default BookApp;
