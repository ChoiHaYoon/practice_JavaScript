'use strict';

/*
    Promise란? 
    자바스크립트에서 제공하는 내장겍체
    비동기처리를 콜백함수 대신에 간편하게 처리할 수 있도록 도와주는 object
    정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행이 되어졌다면 >> 성공메세지와 함께 처리된 결과값 반환
    오류가 발생하면 >> 에러를 전달해준다

    콜백을 사용하지않고 promise를 통해서 비동기 통신을 깔끔하게 처리하는지 알 수 있다.

    두가지포인트
    1) state(상태) >> 프로세스가 무거운 오퍼레이션을 수행중인지 / 기능수행이 다 되어서 성공했는지 or 실패했는지 이해하는것
    2) producer와 consumer 
    >> 우리가 원하는 데이터를 producing(제공)하는 사람 -> producer
                And
    제공된 데이터를 쓰는사람(필요로 하는 사람) -> consumer
    두가지의 차이점을 이해하면 좋다

    더 정확히 설명을 쓰자면

    1) State >> 상태
    pending : promise가 만들어져서 우리가 지정한 오퍼레이션이 수행 중일 때
    fulfilled : 우리가 지정한 오퍼레이션이 성공적으로 수행 됐을 때(완벽하게 완료되었을 때)
    rejected : 파일을 찾을 수 없거나, 네트워크에 문제가 생겼을 경우(오류가 났을 때)

    2) Producer와 Consumer
    proucer : 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어냄(promise Object)
    consumer : 우리가 원하는 데이터를 소비


    1. Producer
    우리가 원하는 기능을 비동기적으로 실행하는 promise를 만들어보기
    promise는 class이기 때문에 객체를 생성할 수 있다.
    excutor라는 콜백함수를 전달해주어야한다 > 이 콜백함수는 또 다른 2가지의 콜백함수를 받는다
    - resolve >> 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달
    - reject >> 기능을 수행하다가 문제가 생기면 호출 

    excutor함수는 promise가 만들어지는 동시에 실행이 된다(밑에 설명 자세히 써져있음)
*/
const promise = new Promise(function(resolve, reject){
    /* 
        이것이 promise 객체를 만든 것이다
        여기서 조금 무거운 일들을 많이한다 why?
        우리가 네트워크에서 데이터를 받아오거나 파일에서 무언가의 큰 데이터를 읽어오는 과정은 시간이 꽤걸린다
        이것을 동기적으로 처리하게 되면 우리가 파일을 읽고 네트워크에서 데이터를 받아오는 동안 그다음 코드는 실행불가
        그렇기때문에 promise를 이용하여 큰파일을 받아오거나 네트워크의 데이터를 받아오는 것은 비동기처리 즉, promise를 사용하는 이유이다
    */
    console.log('doing somthing...');
    /* 
        여기서 알수있는 한가지!(중요하다! 외우고 있자!!!)
        promise를 만드는 순간 우리가 전달한 excutor라는 콜백함수가 바로 실행이 된다
        이 말은 promise안에 네트워크 통신을 하는 코드를 작성했다면 promise가 만들어지는 순간 바로 네트워크 통신을 수행한다
        만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면 >> ex) 사용자가 버튼을 눌렀을때만 네트워크를 요청하는 상황이라면
        위에처럼 작성하면 사용자가 요청을 안했는데 코드가 수행이 된다(불필요한 네트워크 통신)
        이 점을 조금 유의해서 사용해야 한다
    */


    /*
        이제 promise안에서 네트워크 통신을 하는 것처럼 setTimeout통해서 시간딜레이 줘보기
        setTimeout안에서는 기능을 성공적으로 수행했다라면 resolve를 콜백함수로 가져오면된다
        >> 성공적으로 파일에서 읽어온, 네트워크에서 데이터를 받아왔다 그것들을 가공한 데이터를 resolve라는 콜백함수를 통해서
        전달하면된다

        지금만든 promise는 어떤일을 2초정도 무언가를 하다가 결국에는 성공을 하여 resolve라는 콜백함수를 호출하면서
        alice라는 값을 전달해주는 것을 만들어봤다.
    */
    setTimeout(() => {
        resolve('alice!! 성공했다!');

    },2000);
});

/* 
    위에서 promise라는 producer를 만들어 놨으니
    이제 실행을 해 볼 것

    2. Consumers(promise를 이용)
    then, catch, finally를 이용해서 값을 받아올 수 있다.
    위에서 만든 promise변수를 이용해서 가져올 수 있음

    1) then
    promise가 정상적으로 잘 수행이 되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 값이
    value의 인자값으로 주어져서 들어온다

    promise에서 / . / 값이 정상적으로 잘 수행이 된다면 값을 받아올꺼야
*/
promise.then(function(value){
    // value >> promise가 정상적으로 수행이 되서 resolve콜백함수에서 전달된 값을 들어가게한다
    console.log(value);
});
/*
    그럼 여기서 잠깐 promise안에 resolve말고 reject라는 콜백함수도 있는데 이것을 사용하게 되면 어떻게 되나요!?
*/
const promise2 = new Promise(function(resolve, reject){
    console.log("do...something2...");
    setTimeout(function(){
        // reject라는 함수는 Error라는 객체를 통해서 값을 전달
        // Error >> Error라는 클래스는 자바스크립트에서 제공하는 객체(내장객체)
        // 무언가가 에러가 발생했다는 것을 나타내는 객체
        // Error는 어떤에러가 났는지 잘 명시를 해줘야한다.
        reject(new Error('no network'));
    }, 2000);
});

// 이것을 실행하면
// promise2.then((value) => {
//     console.log(value);
//     // >> Uncaught (in promise) Error: no network(잡히지 않은 코드가 발생했다)라는 에러가 뜬다
// });

/*
    then이라는 api를 이용해서 성공적인 케이스를 다뤘다면
    catch라는 api를 통해서 error가 났을 때 어떻게 처리할것인지 콜백함수를 등록 해 주면 된다 
    
    2) catch
*/
// promise2
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });

/* 
    위에서 Promise2의 then을 호출하게 되면 then은 결국 똑같은 promise2를 리턴하기 때문에
    그 리턴된 값에 다시 catch를 호출하는것이다
    >> 이것을 체이닝이라고 한다

    3) finally
    최근에 추가가 되었으며 성공이든 실패든 상관없이 아무인자를 받지 않고 작성한 값을 호출하는 것이다

*/
promise2
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});

/* 
    3. promise chaining
*/
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then((num) => num * 2) // 1 * 2 = 2
.then((num) => num * 3) // 2 * 3 = 6
.then((num) => {
    // 새로운 promise객체를 만들어서 setTimeout이 성공하면 받은 num-1을 1초뒤에 수행
    // then은 값을 바로 전달할 수도 있고 promise를 전달해도 된다
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000); // 5
    });
})
.then(num => console.log(num)); // 5

/* 
    4. Error Handling
    총 3가지의 promise를 리턴하는 함수
*/
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
/* 
    const getEgg = function(hen){
        new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(`${hen} => 🥚`)
            }, 1000);
        });
    }
*/
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen()
.then(getEgg) // 받아오는 매개변수 생략가능
.then(egg => cook(egg))
.then(console.log); // 얘도 생략가능 meal => console.log(meal)
// 만약 getEgg에서 에러가 난것을 처리하고 싶을때는 바로 다음에서 catch를 선언해줘야한다
// >> .then(getEgg).catch(error => { return '🍞' }); >> 이런식으로 




