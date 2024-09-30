/**
 * Fungsi untuk menghitung faktorial menggunakan rekursi.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Basis rekursi: 0! = 1 dan 1! = 1
    } else {
      return n * factorial(n - 1); // Rekursi: n * (n-1)!
    }
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  