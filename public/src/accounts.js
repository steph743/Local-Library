function findAccountById(accounts, id) {
  let matchingAccount = accounts.find((account) => account.id === id)
  return matchingAccount
}
//done 

function sortAccountsByLastName(accounts) {
  const byLastName = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1 )
  return byLastName
}
//done

function getTotalNumberOfBorrows(account, books) {
  // create variable 
  let borrowed = books.reduce((acc, book) => {
    return acc + book.borrows.filter((borrow) => borrow.id === account.id).length
  }, 0)
  // loop through each book 
//   books.forEach(book => {
//     for (let i = 0; i < book.borrows.length; i++) { 
//       // add up the books that given account id has borrowed
//       if (book.borrows[i].id === account.id) {
//         borrowed += 1;
//       }
//     }
//   })
  // return ammount of borrows
  return borrowed;
}
//done


function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = books.reduce((acc, book) => {
    if (book.borrows[0].returned === false && book.borrows[0].id === account.id) {
      const {authorId} = book
      let author = authors.find(auth => auth.id === authorId)
      book.author = author
      acc.push(book)
    }
    return acc
  }
  , [])
  return borrowedBooks
}
//done

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
