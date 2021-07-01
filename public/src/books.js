function findAuthorById(authors, id) {
  let matchingAuthor = authors.find((author) => author.id === id)
  return matchingAuthor
}
//done

function findBookById(books, id) {
  let matchingBook = books.find((book) => book.id === id)
  return matchingBook
}
//done

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = []
  let returnedBooks = []
  books.forEach(book => {
     if (book.borrows[0].returned === false){
       borrowedBooks.push(book)
     } else {
       returnedBooks.push(book)
   }
  })
  const allBooks = [borrowedBooks, returnedBooks]
  return allBooks
}
//done

function getBorrowersForBook(book, accounts) {
  result = []
  let borrowed = book.borrows
  borrowed.forEach ((borrow) => {
    let account = accounts.find(acc => acc.id === borrow.id)
    let obj = account
    obj['returned'] = borrow.returned
    result.push(obj)
  })
  return result.slice(0, 10)
}
//done

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
