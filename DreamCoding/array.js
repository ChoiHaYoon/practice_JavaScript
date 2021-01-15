'use strict';

/*
    Array >> 자료구조 형태
    한 배열안에 같은 데이터 타입을 넣어주는게좋다(여러가지 데이터타입을 넣을 수는 있지만!)

    1. 배열선언
    - 두가지방법
    1) new Array()
    2) 대괄호 이용
*/
const array1 = new Array();
const array2 = [1, 2];

// 인덱스를 활용해서 검색, 삭제, 삽입을 알아야한다

/* 
    2. Index position
*/
const fruits = ['🍎', '🍏'];
console.log(fruits);
// 길이
console.log(fruits.length);
// 위치
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length -1]); //이렇게 해도 됨

/* 
    3. looping

    1) for of
*/
for(let i of fruits){
    console.log(i);
}

// 2) for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 3) foreach >> 정해진 액션을 수행하는 함수 각각 array에 들어있는 elements를 (배열값마다 callback함수를 수행)
// arrow사용
fruits.forEach((fruit) => console.log(fruit));



/* 
    4. 배열의 입력, 삭제, 복사
*/

// 1) push : 배열의 마지막에 입력을 원함
fruits.push('🍑');
console.log(fruits);

// 2) pop : 배열의 마지막에서부터 삭제
fruits.pop();
console.log(fruits);

// 3) unshift : 배열의 앞에서부터 입력
fruits.unshift('🍉');
console.log(fruits);

// 4) shift : 배열의 앞에서부터 삭제
fruits.shift();
console.log(fruits);

// shift와 unshift는 pop과 push보다 너무너무 느리다
// why? 배열안에있는 데이터를 옮긴 후에 앞자리가 생기면 넣는 방식 or 앞에꺼를 삭제후에 데이터들을 다시 당겨야하기때문에
// 처리속도가 그만큼 많아져서 느림


// 5) splice : 인덱스를 이용하여 아이템 삭제
// 배열명.splice(몇번째index번호, 몇개를 지울껀지, 추가를 원하는 값들)
fruits.push('🐰', '🦊', '🤦‍♀️');
fruits.splice(2, 2, '💚'); // 삭제되는 위치에 추가를 하게 된다
console.log(fruits);

// 두가지 배열을 묶어서 만들기 >> concat
const fruits2 = ['😘', '🥰'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


/*
    5. 배열의 검색 
    1) indexOf >> 검색하는 개채가 앞에서 몇번째에 있는지(number) / 없으면 -1을 출력 / 여러개면 앞쪽에서 검색뒤 처음index를 가져옴
    2) includes >> 검색하는 개체가 배열안에 있는지(boolean) / 없으면 false를 출력
    3) lastIndexOf >> 검색하는 개체가 배열안에 여러개가 있다면 마지막index번호 출력
*/
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0번째 Index
console.log(fruits.includes('🍎'));
console.log(fruits.lastIndexOf('🍎'));

