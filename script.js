function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      this.title + " " + this.author + "," + this.pages + "," + this.read,
    );
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "by J.R.R Tolkien",
  "295 pages",
  "not read yet",
);
theHobbit.info();

function show() {
  "use strict";
  console.log(this === undefined);
}
show();
