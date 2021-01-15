'use strict';

// 1. 문자열을 합하여 새로운 문자
console.log('my' + 'cat');
console.log('7' + 5);
console.log(`string literals: 1 + 2 =  ${1 + 2}`);

// 2. 숫자들의 연산
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder(나머지)
console.log(2 ** 3); // exponsentiation(2의 3승)

// 3-1. 전위연산자(Increment operators)
let counter = 2;
const preIncrement = ++counter; // == counter + 1
// 전위 연산자는 counter의 값을 먼저 +1 한 후에 preIncrement변수에 그 값을 집어넣는 방식

// 3-2. 후위연산자(decrement operators)
let opstIncrement =  counter++;
// 후위 연산자는 opstIncrement변수에 counter값을 먼저 넣은 후에 나중에 counter의 값을 + 1하는방식
// 후위는 당장 console.log를 하면 +1된값이 안나타나고 다음에 불러올 때 값이 가져온다 >> for문 생각하면 됨

// 4. Assignment operators
let x = 1;
let y = 2;
x += y; // x = x+y
x -= y; // x = x-y
x *= y; // x = x*y
x /= y; // x = x/y

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. Logical operators;
// || or / && and / ! not
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truty value 
// >> 처음으로 true가 나오면 멈춘다(value1이나 value2가 ture일 경우 check함수가 실행이 안된다)
// 심플한 것을 앞에 두는게 좋다(함수는 뒤에)
console.log(`or : ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
// >> 처음에가 false로 나오게 되면 종료가 된다
// 이것또한 심플한 값을 앞에 두는게 좋음
console.log(`or : ${value1 && value2 && check()}`);

// !(not) >> 원래의 값이 아닐경우(반대의 경우)

function check(){
    for (let i = 0; i < 10; i++){
        console.log('🤦‍♀️');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == << 루즈한 / 타입을 변경해서 보여줌
console.log(stringFive == numberFive);

// === << 강력한 / 완벽한 값을 원하기때문에 타입이 변경안됨
console.log(stringFive === numberFive);

// 객체는 주소값을 비교하는 것이다(객체안에 있는 변수비교x)
const test1 = { name : 'alice' };
const test2 = { name : 'alice' };
const test3 = test1;

console.log(test1 == test2); // 주소값 자체가 틀리기때문에 변환자체가 x  / false
console.log(test1 === test2); // false 
console.log(test1 === test3); // test1의 주소값을 test3이 가져가기때문에 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // ture
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. if / else if / else 
const name = 'alice';
if(name === 'coder'){
    console.log('💕');
} else if(name === 'Yoon'){
    console.log('🐰');
} else {
    console.log('🦊');
}

// 9. 삼항연산자
console.log(name === 'alice' ? '💚' : '🍏');

// 10. switch
// 여러가지를 체크할때
const web = 'naverWhile2';
switch(web){
    case 'naverWhile' : 
    console.log('🐰');
    break;
    case 'chrome' :
    console.log('😅');
    break;
    default:
    console.log("h2");
    break;
}

// 11. loop
// while loop
let i = 10;
while (i >= 3){
    console.log('🍏');
    i--;
}

// do-while loop
let k = 10;
do{
    console.log("🐰");
    k--;
}while(k > 7);

// for loop
for(let j = 9; j > 0; j--){
    console.log("뿌잉");
}

// test1
// 0~10사이의 숫자중 짝수만 출력(continue사용)
for(let l = 0; l <= 10; l++){
    if(l % 2 === 0){
        console.log(`for문 사용 : ${l}`);
    } else {
        continue;
    }
}

// 0~10까지 넘버링하는데 8을 만나면 break
for(let m = 0; m <= 10; m++){
    console.log(m);
    if(m == 8){
        break;
    }
}

