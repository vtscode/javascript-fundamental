//spread operator adalah dimana sebuah metode untuk memecah sebuah bilangan array atau object menjadi bagian - bagian terkecil


const days = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
console.log(...days);

const mahasiswa = [{
  
   name: 'Riventus AHA',
   age: 23,
   fak: 'Teknik Informatika'
  
},{
  
   name: 'Nama Orang 1',
   age: 21,
   fak: 'Accounting'
}, {
  
   name: 'Nama Orang 2',
   age: 24,
   fak: 'Teknik Teknik'
  
}];

console.log(...mahasiswa)
