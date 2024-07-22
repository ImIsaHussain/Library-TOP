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
    if (read == true) {
        read = "read";
    } else {
        read = "not read yet";
    }
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Assuming each book object has properties like title, author, and pages
function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear the container

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add(`book`);
        bookElement.id = `book-${index}`;
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: <span id="status-${index}">${book.read ? 'Read' : 'Not Read'}</span></p>
            <button id="toggle-read-${index}">Toggle Read Status</button>
            <button id="remove-book-${index}">Delete</button>
        `;

        booksContainer.appendChild(bookElement);

        document.getElementById(`toggle-read-${index}`).addEventListener('click', () => {
            book.read = !book.read; // Toggle the read status
            document.getElementById(`status-${index}`).textContent = book.read ? 'Read' : 'Not Read'; // Update the display
        });

        document.getElementById(`remove-book-${index}`).addEventListener("click", () => {
            document.getElementById(`book-${index}`).remove();
            myLibrary.splice(index, 1);

            displayBooks();
        });
    });
}

// Add placeholder books to the library
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);

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