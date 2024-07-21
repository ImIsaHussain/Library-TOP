const myLibrary = [

];

function book(title, author, pages, read) {
    this.title = title; // string
    this.author = author; // string
    this.pages = pages; // number
    this.read = read; // "read" or "not read yet"
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Assuming each book object has properties like title, author, and pages
function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear the container

    myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read}<p>
        `;
        booksContainer.appendChild(bookElement);
    });
}

// Add placeholder books to the library
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
addBookToLibrary('1984', 'George Orwell', 328, 'not read yet');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'read');

// Make sure to call displayBooks() after adding the books to update the UI
displayBooks();

document.getElementById("add-book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked ? "read" : "not read";

    addBookToLibrary(title, author, pages, read);

    this.reset();

    displayBooks();
});