'use strict'

/* 
    Object
    원시타입 변수에는 값을 하나만 담을 수 있다

const name = 'alice';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}
    전달해야하는 인자가 많아지면 매개변수도 길어지기 때문에 힘들어진다
    그럴때사용하는게 object로 관리!

    다시한번 Object를 만드는법 두가지
    - 1. const alice = {}
    - 2. const alice = new Object();

    중요 포인트!
    Object는 key와 value의 집합체
*/

const alice = { name: 'alice',  age: 4};
function print(person){
    console.log(person.name);
    console.log(person.age);
}
print(alice);

// 자바스크립트는 동적으로 타입이 런타임때 지정되기 때문에 미친짓(?)이 가능하다 >> 나중에 속성을 추가 할 수 있다
alice.height = 163;
console.log(`나중에 값추가 한거까지 보여진다 - ${alice.height}`);

// 삭제도 가능
delete alice.height;
console.log(`값 삭제 - ${alice.height}`);

/*
    2. 계산된 properties
    접근하는 두가지 방법
*/
console.log(alice.name);
console.log(alice['name']); // key는 무조건 string값으로 받아야한다

// add도 한가지 방법이 더있다
alice['height'] = 163;
console.log(alice['height']);

// dot은 코딩하는 그순간 key값을 받아오고싶을때
// computed는([]) 우리가 정확히 어떠한 키를 쓸지 모를때 즉, 런타임때 결정될때 사용한다

/*
    3. Object를 일일히 만들지 않고 하나로 가져오기
    property value shorthands
*/
const person1 = new makePerson('hayoon', 12);
console.log(person1);

// 4. constructor function
function makePerson(name, age){
    // return {
    //     name,
    //     age
    //     // 만약 key값과 받아오는 value값이 같다면 한개만 지정해줘도 된다
    // }
    this.name = name;
    this.age = age;
    // 이것두 가능
}

// 5. in operator >> 해당객체안에 key값이 있는지 없는지 확인
console.log('name' in person1);

// 6. for..in vs for..of
for(let a in alice){
    console.log(a);
}
const array = [1, 2, 3, 4];
for(let b of array){
    // 배열값을 가져올때
    console.log(b);
}

// 7. fun cloning
const user = {name : 'ellie', age: 20};
const user2 = user;
user2.name ='coder';
console.log(user); // coder로 바뀜 >> 같은 주소를 가지고 같은 값을 참조하고있기 때문에 원본객체의 값도 바뀐다

// 예전방법
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// 다른방법
const user4 = Object.assign({}, user);
console.log(user4);

// auother example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 맨마지막값으로 출력되기때문에 fruit1의 값이 fruit2의 값으로 덮어진다
console.log(mixed.color); // blue
console.log(mixed.size); // big