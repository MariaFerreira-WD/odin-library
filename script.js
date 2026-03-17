const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
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

function displayBook() {
  let text = "";
  for (let index = 0; index < myLibrary.length; index++) {
    text += `${myLibrary[index].title} 
             ${myLibrary[index].author}, 
             ${myLibrary[index].pages} pages <br>`;
  }

  document.getElementById("library").innerHTML = text;
}

function addBookToLibrary() {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook();
}

/* addBookToLibrary("The Hobbit", "by J.R.R Tolkien", 295, false);
addBookToLibrary(
  "The Priory of the Orange Tree",
  "Samantha Shannon",
  848,
  true,
);
addBookToLibrary(
  "The Seven Husbands of Evelyn Hugo",
  "Taylor Jenkins Reid",
  389,
  true,
); */
