/* W05: Programming Tasks */

/* Declare and initialize global variables */
const booksElement = document.getElementById('books');
let bookList = [];

/* async displayTemples Function */
const displayBook = (books) => {   
    books.forEach(book => {
        let newBook = document.createElement('article');

        let bookTitle = document.createElement('h3');
        bookTitle.textContent = book.name;
        
        let bookAuthor = document.createElement('h4');
        bookAuthor.textContent = "Author: " + book.author;
        let bookChapters = document.createElement('h4');
        bookChapters.textContent = "Number of chapters: " + book.chapters;
        let bookGroup = document.createElement('h4');
        bookGroup.textContent = "Group: " + book.group;
        let bookTestament = document.createElement('h4');
        bookTestament.textContent = "Testament: " + book.testament;

        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookChapters);
        newBook.appendChild(bookGroup);
        newBook.appendChild(bookTestament);

        booksElement.appendChild(newBook);
    }
    );
}

/* async getBooks Function using fetch()*/
const getBooks = async () => {
    const response = await fetch("https://www.abibliadigital.com.br/api/books");
    
    if(response.ok){
        const bookData = await response.json();
        bookList = bookData;
    }
    
    displayBook(bookList);
}

/* reset Function */
const reset = () => {
    booksElement.replaceChildren();
}

/* filterTemples Function */
const filterBooks = (books) => {
    reset();
    
    let filter = document.getElementById('filtered').value;

    switch(filter){
        case 'old-testament':
            displayBook(books.filter(book => book.testament.includes("VT")));
            break;
        case 'new-testament':
            displayBook(books.filter(book => book.testament.includes("NT")));
            break;
        case 'pentateuch':
            displayBook(books.filter(book => book.group.includes("Pentateuco")));
            break;
        case 'historical':
            displayBook(books.filter(book => book.group.includes("Históricos")));
            break;
        case 'poetic':
            displayBook(books.filter(book => book.group.includes("Poéticos")));
            break;
        case 'prophets':
            displayBook(books.filter(book => book.group.includes("Profetas")));
            break;
        case 'gospel':
            displayBook(books.filter(book => book.group.includes("Evangelhos")));
            break;
        case 'letters':
            displayBook(books.filter(book => book.group.includes("Cartas")));
            break;
        case 'revelation':
            displayBook(books.filter(book => book.group.includes("Revelações")));
            break;
        case 'all':
            displayBook(books);
        default:
            console.error("Invalid filter value:", filter);
    }
}

getBooks();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterBooks(bookList) });