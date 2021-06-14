const form = document.forms.books;
const bookName = form.bookName;
const bookAuthor = form.bookAuthor;
const bookYear = form.bookYear;
const submit = form.submit;
const output = document.querySelector("#output");

function getBook(e) {
  e.preventDefault();
  output.innerHTML += `

    <ul>
        <li>Book Name: ${bookName.value}</li>
        <li>Book Writer: ${bookAuthor.value}</li>
        <li>Release Year: ${bookYear.value}</li>
    
    </ul>
`;
}
submit.addEventListener("click", getBook);
