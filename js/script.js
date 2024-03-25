// Komentar 1 Baris
alert('Hello world'); console.log('statement baris kedua');

/*
Komentar Multi
Baris
*/
console.log('Statement 1 baris');

/*
DEKLARASI VARIABLE: Var vs Let vs Const
*/

// deklarasi variable dengan var
var fullName = 'Aan';

fullName = 'Lionel Messi';

fullName = 'Cristiano Ronaldo';

document.write(fullName);

document.writeln('<br>');

// deklarasi variable dengan let
let fullName2 = 'Lionel Messi';

fullName2 = 'Joko';

document.write(fullName2); // Output joko

document.writeln('<br>');

// deklarasi variable dengan const
const fullName3 = 'Lionel Messi';

// fullName3 = 'Joko';

// document.write(fullName3); // Error: ASsigment to constant variable


/*
Tipe Data
*/

// Tipe Data Number
let bulat = 25;
let desimal = 25.2;

document.writeln(bulat);
document.writeln('<br>');
document.writeln(desimal);
document.writeln('<br>');
document.writeln('Hasil Penjumlahan = ');
document.writeln(desimal + bulat);

document.writeln('<br>');
let string = 'a';

document.writeln(bulat/0);
document.writeln('<br>');
document.writeln(string/5);

document.writeln('<br>');

// Tipe Data Bigint
let num = 1126122736743647376436463647367643n;

document.writeln(num);

document.writeln('<br>');

// Tipe Data String
let text = 'arkatama';

document.writeln(text);

document.writeln('<br>');

// Tipe data boolean
let admin = true;
let perbandingan = 15 > 9;

document.writeln(perbandingan);

document.writeln('<br>');

// Tipe Data Undefined
let admin2
document.writeln(admin2);

document.writeln('<br>');

// Tipe Data Null
let admin3 = null;

document.writeln(admin3);

document.writeln('<br>');

// Tipe Data Simbol
// let employee = Symbol('Joko');
// 
// console.log(employee);
// console.log(employee.description);

// Tipe Data Object
let employee = {
  name: 'John',
  age: 10,
  job: 'Web Developer',
  isMarried: false,
}

document.writeln(`My Name is ${employee.name} and he is ${employee.age} years old`);

document.writeln('<br>');

// Type Conversion: String
let value = false;
let string2 = String(value);
alert(typeof value);
alert(typeof string2);

// Type Conversion: NUmeric
let str = "123";
let nbr = Number("123");

alert(typeof nbr);

// Type Conversion: Boolean
alert(Boolean(0));
alert(Boolean(1));


/*
JAVASCRIPT OPERATOR
*/

// Operator Aritmatika
let a = 3;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);

// Operator Comparison (Perbandingan)
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a != b);

// Operator Logika
console.log(a && b);
console.log(a || b);
console.log(!b);

// Operator Bitwise
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);

// Operator Ternary
console.log(a == b ? 'sama' : 'tidak sama');

/*
POP UP
*/

// Popup: Alert
alert('Hallo Selamat datang di Arkatama');

// Popup: Prompt
let str2 = prompt('Apakah kamu mau makan malam denganku?');
alert('Jawaban Anda ' + str2);

// Popup: Confirm
let str3 = confirm('Apakah kamu mau makan malam denganku?')
str3 ? alert('Jawaban Anda mau') : alert('Jawaban Anda tidak mau');


/*
PERCABANGAN
*/

let jawaban = prompt('1 + 1 ? ');

if(jawaban == 2){
  alert('Jawaban anda Betul');
}else if(jawaban > 2){
  alert('Jawaban anda kelebihan');
}else if(jawaban < 2){
  alert('Jawaban anda kurang');
}else{
  alert('Jawaban anda salah');
}

let str4 = 'blue';

switch(str4){
  case 'red':
    alert('I Love Red!');
    break;
  
  case 'blue':
    alert('I Love Blue!');
    break;

  default:
    alert('I dont know what color is!');
    break;
}


/*
PERULANGAN / LOOP
*/

// Perulangan: For
for(let i = 1; i < 5; i++){
  document.writeln(i);
  document.writeln('<br>');
}

// Perulangan: While
let c = 1;

while(c < 5){
  document.writeln(b);
  document.writeln('<br>');
  c++;
}

// Perulangan: Do..While
let i = 1;
document.writeln('Perulangan do while');
document.writeln('<br>');
do{
  document.writeln(i);
  document.writeln('<br>');
  i++;
} while(i < 5);

// Loop control: break
document.writeln('Perulangan for');
document.writeln('<br>');
for(let a = 1; a < 5; a++){
  if(a == 3){
    break;
  }
  document.writeln(a);
  document.writeln('<br>');
}

document.writeln('<br>');

// Loop Control: continue
document.writeln('Perulangan for');
document.writeln('<br>');
for(let a = 1; a < 5; a++){
  if(a == 3){
    continue;
  }
  document.writeln(a);
  document.writeln('<br>');
}