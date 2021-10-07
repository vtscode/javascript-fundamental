//High Order Func adalah sebuah metode yang digunakan untuk mengambil sebuah fungsi lain sebagai argumen dan 
//mengembalikan fungsi tersebut sebagai hasilnya.


const mahasiswa = [{
  
   name: 'Riventus AHA',
   age: 23,
   fak: 'Teknik Informatika'
  
},{
  
   name: 'Orang 1',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Orang 2',
   age: 24,
   fak: 'Teknik Apa Adanya'
  
}];


mahasiswa.map((value, index) => {
  
    console.log(value);
});


mahasiswa.filter((data) => {
  
     (data.age < 24) ? console.log(data) : '';
});


mahasiswa.forEach((value, index) => {
  
    console.log(value);
});

mahasiswa.reduce((x, y) => {
  
    console.log(x.age + y.age);
});
