const form = document.forms.books;
const bookName = form.bookName;
const bookAuthor = form.bookAuthor;
const bookYear = form.bookYear;
const submit = form.submit;
const output = document.querySelector("#output");

const books = [];

const addBooks = (name, author, year) => {
  books.push({ name: name, author: author, year: year });
  return { name, author, year };
};

const generateBooks = ({ name, author, year }) => {
  output.innerHTML += `
  
     <div class="bookList">
     <h3>${name}</h3>
     <p>${author}</p>
     <p>${year}</p>
     </div>
  `;
};
books.forEach(generateBooks); //loop through each book object and push it onto the innerHTML

function generateData(e) {
  e.preventDefault();
  const newBook = addBooks(bookName.value, bookAuthor.value, bookYear.value);
  generateBooks(newBook);
  bookYear.value = "";
  bookName.value = "";
  bookAuthor.value = "";
}
form.addEventListener("submit", generateData);
