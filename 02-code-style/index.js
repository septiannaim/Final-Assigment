// Objek yang digunakan untuk menyimpan data buku
const books = {};

// Fungsi untuk mengambil semua buku
function getBooks() {
  return books;
}

// Fungsi untuk mengambil buku berdasarkan ID
function getBookById(id) {
  const book = books[id]; // Menggunakan const karena tidak diubah

  if (!book) {
    return null;
  }

  return book.id;
}

// Fungsi untuk menyimpan buku ke dalam objek 'books'
function saveBook(book) {
  books[book.id] = book;
}

// Menyimpan buku dengan ID 'book-1' dan nama 'Book 1'
saveBook({ id: 'book-1', name: 'Book 1' });

// Mengambil semua buku yang ada
const myBooks = getBooks(); // Menggunakan const karena variabel tidak berubah

// Mengambil buku dengan ID 'book-1'
const myBook = getBookById('book-1');

// Menampilkan semua buku
console.log(myBooks); // Output: { book-1: { id: 'book-1', name: 'Book 1' } }

// Menampilkan ID dari buku yang diambil
console.log(myBook); // Output: 'book-1'
