function getTotalBooksCount(books) {
  return books.length
}
//done

function getTotalAccountsCount(accounts) {
  return accounts.length
}
//done

function getBooksBorrowedCount(books) {
   let count = 0;
  books.forEach(book => {
      if(book.borrows[0].returned === false)
        count++;})
  return count;
}
//done

function getMostCommonGenres(books) { 
    let countByGenre = [];
     for (let i = 0; i < books.length; i++) { 
         if (!countByGenre[books[i].genre]) { 
             countByGenre[books[i].genre] = 1; 
            } 
            else { 
            countByGenre[books[i].genre] += 1;
            } 
        }
    let mappedGenre = Object.keys(countByGenre).map((key) => {
         return { name: key, count: countByGenre[key] } 
        });
    let sortedByGenre = mappedGenre.sort((genreA, genreB) => (genreB.count - genreA.count)) 
    return sortedByGenre.slice(0, 5); 
}
//done

function firstFive(books) {
    let result = books
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);
  return result;
}

function getMostPopularBooks(books) {
  let mostPopular = []
  for (let i = 0; i < books.length; i++){
      mostPopular.push({ name: books[i].title, count: books[i].borrows.length });
  }
  return firstFive(mostPopular)
}
//done

function getMostPopularAuthors (books, authors) {
  let result = [];
  let bookWithNMatchAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  bookWithNMatchAuthor.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId)
    result.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  });
  return result.sort((authorA,authorB)=>(authorB.count - authorA.count)).slice(0, 5);
}
//done

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
