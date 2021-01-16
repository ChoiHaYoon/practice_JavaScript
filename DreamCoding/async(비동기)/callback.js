'use strict';

/* 
    callback / promise / async await를 이용해서 비동기 프로그래밍을 배우고
    어떻게 사용하는지 현업에서 어떻게 사용하는지 배운다
    
    1. 동기와 비동기
    1) 동기
    자바스크립트는 동기적(synchronous)이다 >> 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나 동기적으로 실행된다
    호이스팅? var나 function들이 최상위로 선언되는것을 이야기한다 >> 이거때문에 var를 요즘에는 잘 사용하지 않는다고 했음
*/
console.log('1');
console.log('2');
console.log('3');

/*
    2) 비동기
    asynchronous >> 언제 코드가 실행될지 예측 할 수 없는 것
    예시로 setTimeout >> 브라우저에서 제공하는 api(지정한 시간이 지나면 전달한 콜백함수를 실행시킴)
    setTimeout(콜백함수, 얼마뒤에 실행할껀지 시간초);
    1초 === 1000

    여기서 다시 콜백함수란?
    전달한 함수를 나중에 불러달라는 함수!
*/
console.clear();
console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);
console.log('3');
// 1초뒤에 실행되기때문에 1 -> 3 -> 2로 나오게된다
/* 
    위에서 전달하는 콜백함수는 바로 실행되는 것이 아닌 setTimeout이라는 함수안에 하나의 인자로 지정한(만든)함수를 전달
    그래서 바로 실행하는 것이 아닌 setTimeout을 브라우저가 보고 1초뒤에 / 나중에 내 함수를 불러줘(callBack) 라는 것이다 >> callBack

    과연 콜백함수는 비동기에서만 사용하나?
    No! 콜백함수도 두가지의 경우가 있다
*/
// 1) 동기형식 callBack >> 즉각적
function printImmediately(print){
    print();
}
printImmediately(function(){
    console.log("하이");
})
// >> 하이가 먼저 실행된 뒤 위에서 setTimeout으로 지정해준 2가 그뒤에 나온다
// 순서 : 호이스팅에 의해 printImmediately함수가 먼저 선언 -> 1출력 -> setTimeout은 브라우저에게 요청만 함 -> 3출력 
//       -> printImmediately함수가 호출되어서 print()실행 -> setTimeout에 의해 1초뒤에 2출력


// 2) 비동기형식 callBack >> 나중에 언제실행될지 모르는(예측불가)
function printWithDelay(print, timeout){
    //  결국 printWithDelay함수는 setTimeout을 랩핑하는 함수
    setTimeout(print,timeout);
}

printWithDelay(function(){
    console.log("호호");
}, 2000);
// >> 위에가 먼저 실행 된 뒤에(2까지 다 나옴) 호호가 나타남
// 순서 : 호이스팅에 의해 printImmediately함수선언 후 밑에 printWithDelay가 선언 -> 1출력(동기) 
//       -> setTimeout은 브라우저에게 요청만 함 -> 3출력(동기) 
//       -> printImmediately함수가 호출되어서 print()실행(동기) -> setTimeout에 의해 1초뒤에 2출력(비동기)
//       -> printWithDelay함수가 요청이 되고 그 뒤에 동기실행이 없어서 2초뒤에 호호출력(비동기)

/*
    콜백함수는 난무하면 콜백지옥이 된다
    콜백지옥체험하기
*/
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(function(){
            if(
                (id === 'ellie' && password === 'dream')||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not fount'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(function(){
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}



/*
    콜백을 많이 사용할 시 문제점!
    1. 가독성이 떨어진다(비즈니스 로직을 한눈에 이해하기 어렵다)
    2. 나중에 에러가 생겨서 디버깅시 굉장히 어려움
    3. 유지보수가 어려움
 */

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해 주세요');
const password = prompt('비밀번호를 입력해 주세요');
userStorage.loginUser(id, password, function(user){
    userStorage.getRoles(user, function(userWithRole){
        alert(`Hello! ${userWithRole.name} / ${userWithRole.role}`);
    }, function(error){
        console.log(error);
    });
}, function(error){
    console.log(error);
});
