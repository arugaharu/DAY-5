let bukufavorit1 = "Lima Sekawan";
//let bukufavorit2 = "Lima Sekawan";
let bukufavorit2 = "100 Kota Yang Hilang";

//membandingkan nama buku sama atau tidak
let cekapasama = bukufavorit1 === bukufavorit2;
console.log(cekapasama);
console.log("\n");

//Variabel baru
let hargabukufav1 = 270000;
let hargabukufav2 = 36000;

//membandingkan harga
let perbandingan = hargabukufav1 > hargabukufav2 ? "Buku Favorit 1 Lebih Mahal" : "Buku Favorit 2 lebih mahal";
console.log(perbandingan);
console.log("\n");

//harga rata2
let hargarata2 = (hargabukufav1 + hargabukufav2) / 2;
console.log(hargarata2);
console.log("\n");

//mahal atau cheap
let mahalataucheap = hargarata2 > 500000 ? "Expensive" : "Cheap";
console.log(mahalataucheap);