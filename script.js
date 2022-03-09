var biblioteka = new Biblioteka();

var allBooks = biblioteka.getAll();
renderBooks(allBooks, onDeleteBook);

function onAddBook() {
    var naziv = getValue(`title`);
    var author = getValue(`author`);
    var newBook = new Book(naziv, author)
    biblioteka.addBook(newBook);
    var allBooks = biblioteka.getAll();
    renderBooks(allBooks);
};

function onSearchBooks(e) {
    var bookTitle = e.target.value;
    var filteredBooks = biblioteka.searchBooks(bookTitle);
    renderBooks(filteredBooks);
}

function onDeleteBook(book) {
    biblioteka.removeBook(book.title);
    var allBooks = biblioteka.getAll();
    renderBooks(allBooks)
}
