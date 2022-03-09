
var bookPreview = document.getElementById(`book_preview`)

function getValue(id) {
    return document.getElementById(id).value
};

function renderBooks(books, callback) {
    bookPreview.innerHTML = ``;
    var list = document.createElement(`ul`);
    list.classList.add("list-group");
    for (var book of books) {
        var listItem = document.createElement(`li`);
        listItem.classList.add("list-group-item", "list-group-item-action");
        listItem.style = "width:10%;"
        listItem.style = `display:flex;gap:20px`
        listItem.innerHTML = `${book.title} - ${book.author}`;
        list.appendChild(listItem);
        list.appendChild(deleteButton(book, callback));
    }
    bookPreview.appendChild(list);
};

function deleteButton(book, callback) {
    var deleteBtn = document.createElement(`button`);
    deleteBtn.classList.add("btn", "btn-outline-danger");
    deleteBtn.style.width = "10%"
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.onclick = function () {
        callback(book);
    };

    return deleteBtn;
}