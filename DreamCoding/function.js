'use strict'

/* 
    1. function
    프로그램을 구성하는 building block
    subprogram이라고도 불리며 여러번 재사용이 가능
    한가지의 task나 어떠한 연산을 위해 쓰여짐

    1) 함수선언과 호출
    function 함수명(매개변수들){ 코드 + return값 }
    하나의 함수 === 한가지 일만 하도록만들어야한다
    함수명은 어떤일을 하는지(doSomething), comand, 동사(verb)
    함수는 세부적으로 나눌수 있는지 확인하기
    자바스크립트에서 function은 object(객체)
*/
function printHello(){
    console.log("hello");
}
// 함수 호출
printHello();

// 유용한 함수로 사용하려면 파라미터(매개변수)로 값을 받아야함
function log(message){
    console.log(message);
}
// 인자로 h2를 보낸다 >> message
log("h2");
log(2);
/* 
    typeScript홈페이지에 playground >> https://www.typescriptlang.org/play
    왼쪽에 타입스크립트 코드를 입력하면 컴파일된 자바스크립트를 확인 가능 
    맛보기
    function log(message: string): number{
        console.log(message);
        return 0;
    }
*/

/*
    2) Parameters
    원시타입(premitive)같은 경우 메모리에 value가 그대로 저장되기 때문에 value가 전달이 된다
    객체(Object)같은 경우 메모리에 reference(참조하는 값)을 저장하기 때문에 레퍼런스가 전달
*/
function changeName(obj){
    obj.name = 'coder';
}
const alice = {name: 'alice'};
changeName(alice);
console.log(alice);
/*
    여기서 alice객체 안의 name이 alice가 아닌 coder로 바뀔까?
    alice객체는 레퍼런스가 변경이 안되는 const이지만 name은 const가 아니기때문에 바뀌게 된다
    changeName(alice)를 하였기때문에 원래의 name값인 alice에서 coder로 변경되면서
    console.log(alice)를 하면 바뀐값이 출력된다
*/


/*
    3) default Parameters(es6에 추가됨)
    매개변수의 값이 인자로 안들어 올 것을 대비하여 매개변수명 옆에 default값을 먼저 지정해주는 것
*/
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage("HI!");
// HI by undefined로 나오게된다


// 예전에는 파라미터의 값이 전달되지 않을경우를 대비해서
function showMessageBefore(message, from){
    if(from === undefined){
        from = 'unkown';
    }
    console.log(`${message} by ${from}`);
}
showMessageBefore("HI!");
// 이런식으로 사용했다. 
// 하지만 이제는 원하는 값을 옆에 지정해주면된다
function showMessageAfter(message, from = 'default'){
    console.log(`${message} by ${from}`);
}
showMessageAfter("HI!");


/*
    4) rest Parameters(es6에 추가됨)
    ...매개변수명 << 배열형태로 전달됨
    대괄호를 쓰지않고 인자를 콤마를 이용해서 문자들을 파라미터로 보내면 자동적으로 배열의 형태가 된다
    []
*/
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('nct', '127', 'dream', 'wayv');

/*
    여기서 처음에 function은 Object라고 했다. << 객체임
    즉, 함수명. <<이렇게 하면 function이 Object로 바뀌면서 function안에있는 속성들을 선택할 수 있다.
*/

/*
    5) Local scope
    밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다 >> 유리창 생각하면 된다
*/
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message); // 지역변수
    console.log(globalMessage); // 전역변수
    function printAnother(){
        console.log(message);
        let childMessage = 'hello'; // 이아이는 자식함수안의 지역변수이기때문에 부모인 printMessage에서는 못본다
    }
    // console.log(childMessage); << 오류남
}
printMessage();

/*
    6) return a value
*/
function sum(a, b){
    return a + b;
}
const result = sum(1, 3);
console.log(`sum : ${sum(1, 3)}`);


/* 
    7) Early Return, early exit(현업에서 자주 지적을 받을 수 있음) >> 많이 쓰임
    함수안에서 무엇을 원하는 로직이있다면(if등) 블록안에서 로직을 작성하면 가독성이 떨어질 수 있다
    그렇기 때문에 조건이 먼저 맞지 않다면 return을 해버려서 함수를 종료시키게 하는 방법이다
    조건이 맞을시에만 다음 코드들을 실행하게끔 만듬
*/
// bad
function badCode(user){
    if(user.point > 10){
        // This is bad
    }
}
// good
function goodCode(user){
    if(user.point <= 10){
        // 조건이 맞지 않을때는 빨리 리턴을 하는 방법
        return;
    }
    // 조건이 맞을때만 다음 로직을 실행하게끔 만드는 것
}


/* 
    2. First-class function
    >> function은 다른것들과 마찬가지로 변수에 할당이 되고 function의 파라미터값으로 전달이 되며
       function의 return값으로도 function이 사용이 가능하다
       이것을 가능하게 하는 것 >> function expression

    1) function expression
    변수로 함수를 할당한 다음부터 호출이 가능하다
*/
const print = function(){ // 익명함수(anonymous function)
    console.log('print');
}
print();
// 다른변수에 함수를 담은 변수를 담을 수 있음
const print2 = print;
print2();
const sumPrint = sum;
console.log(sumPrint(1, 3));

/*
    2. function declaration
    변수로 함수를 할당안하고 사용해도 호이스트가 가능하다

    3. callback function
    파라미터로 함수를 전달해서 상황에 맞으면 전달된 함수를 부르는 것
*/

function randomQuiz(answer, printYes, printNo){
    if(answer === 'hello'){
        printYes();
    } else {
        printNo();
    }
}

// 익명함수
const printYes = function(){
    console.log('Yes');
}

// named function
const printNo = function print(){ // 디버깅을 할 때 함수가 나오게 하는것
    console.log('No');
    // 또다른 함수를 호출할때 사용한다
    // print() >> 무한값이 나옴
}

randomQuiz('hi', printYes, printNo);
randomQuiz('hello', printYes, printNo);

/*
    4. Arrow function
    함수를 간결하게 만들어 줌
    이름이 없는 익명함수
    => 를 사용한다
*/
const simplePrint = function (){
    console.log('simplePrint');
}
// 이것을
const simplePrint2 = () => console.log('simplePrint!');
// 이렇게 사용이 가능하다
// 파라미터는
const add = (a, b) => a + b;
/*
    이런식으로 사용이 가능하다
    풀어쓰면
    const add = function (a, b){
        return a + b;
    }
    다양한 일들을 해야해서 블록이 필요하다면
*/
const add2 = (a, b) => {
    // 이렇게도 사용이 가능하다
    return a + b;
}

/*
    5. IIFE : Immediately Invoked Function Expression
    함수를 선언하게 되면 호출을 해줘야한다
    선언과 동시에 호출을 원하면
 */
(function hello(){
    console.log("h2");
})();
// 이런식으로 사용한다
