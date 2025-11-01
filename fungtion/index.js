// fungtion
// function sapa(){
// console.log("hello");
// }

// sapa();

// a = ;
// b = ;
// hasil = a + b;
// console.log(hasil);


// DENGAN PARAMETER
// function penjumlahan (a,b) {
//     hasil = a + b;
//     console.log(hasil);
    
// }
// penjumlahan (1,10)

//DENGAN RETURN
// function penjumlahan(a,b) {
//     return a + b;
// }

// hasil = penjumlahan(3,7);
// console.log(hasil);

//masukin ke function
// let umur = 5;
// if (umur >= 18) {
//     console.log("dewasa");
    
// }else {
//     console.log("anak-anak");
    
// }


// dimasukin ke parameter 
// function cekumur(umur) {
// if (umur >= 18) {
//      console.log("dewasa");
    
//  }else {
//      console.log("anak-anak");
// }

// }
// cekumur(20)

//dimunculin di luar
// function cekumur(umur) {
// if (umur >= 18) {
//      return("dewasa");
    
//  }else {
//      return("anak-anak");
// }
// }
// cekumur(20)

// console.log(cekumur(4));

//luas persegi panjang (panjang * lebar)
// function hitungluaspersegipanjang(panjang,lebar) {
//     let hasil = panjang * lebar;
//     return hasil;
// }
// console.log(hitungluaspersegipanjang(9,10));

// let cekumur = function (umur) {
//     if (umur >= 18){
//         console.log("dewasa");
//     }else;{
//         console.log("anak kicik");
        
//     }
// }

// cekumur (3)

// diskon
function hitungDiskon(hargaBarang, diskon) {
let hargaBarang = 10000;
let diskon = 20;
let potongan = (diskon/100)* hargaBarang;
let hargasetelahdiskon = hargaBarang - potongan;

console.log("harga asli: Rp" + hargaBarang);
console.log("diskon:" + diskon + "%");
console.log("potongan harga: Rp" + potongan );
console.log("harga setelah diskon: Rp" + hargasetelahdiskon);
}


