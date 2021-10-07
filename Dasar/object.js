// berikut adalah contoh pengunaan object pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

//NOTE: perlu diingat OBJECT terdiri dari 2 bulah nilai yaitu key dan value dan sedangkan diarray itu index dan value

//REGULER OBJECT ONE
const person = {

	name: 'Riventus AHA',
	age: 23,
	fak: 'Teknik Informatika'
}

//OBJECT CONSTRUCTOR
const person = new Object;
person.name = 'Riventus AHA'; || person['name']: 'Riventus AHA'; 
person.age = 23; || person['age'] = 23;
person.fak = 'Teknik Informatika' || person['fak'] = 'Teknik Informatika'


//cara mencetak sebuah object bisa mengunakan 2 cara yaitu:
person.name || person['name'];


//ARRAY OBJECT
const person = [{

	name: 'Riventus AHA',
	age: 23,
	fak: 'Teknik Informatika'
},

{
	name: 'Orang 1',
	age: 33,
	fak: 'Teknik Informatika'
},

{
	name: 'Orang 2',
	age: 35,
	fak: 'Teknik Informatika'
}];

//cara mencetak sebuah array object bisa mengunakan 2 cara yaitu:
person[0].name || bisa mengunakan loop dengan forin untuk mengambil semua data