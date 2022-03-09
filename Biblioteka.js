function Biblioteka() {
    this.books = [];

    this.addBook = function (book) {
        this.books.push(book);
        localStorage.setItem(`books`, JSON.stringify(this.books));
    }

    this.getAll = function () {
        var storageBooks = JSON.parse(localStorage.getItem(`books`));
        this.books = storageBooks || [];
        return this.books;
    }
    this.searchBooks = function (title) {
        var filtered = [];
        for (var book of this.books) {
            if (book.title.indexOf(title) > -1) {
                filtered.push(book);
            }
        }
        return filtered;
    }
    this.removeBook = function (title) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1);
                localStorage.setItem(`books`, JSON.stringify(this.books));
            }
        }
    }
}
