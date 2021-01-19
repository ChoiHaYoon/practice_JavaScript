'use strict';

/*
    1. async 와 await
    promise를 조금 더 간결하고 간편하고 동기적으로 실행되는 것 처럼 만들어주는 것
    promise들은 chaning할 수 있는데(.than().than().than()등등등) 이렇게 하면 코드들이 난잡해질 수 있는데
    이것들을 간편한 api들을 사용하여 동기식으로 순서대로 작성하는 것 처럼 간편하게 작성할 수 있게 도와준다
    새로운것이 추가가 아니라 기존의 Promise위에 혹은 감싸서 간편하게 사용할 수 있게 api를 제공하는것을
    >> syntactic sugar 이라고 한다(예로 class가 있다)

    깔끔하게 promise를 사용할 수 있는것 >> 무조건 promise가 안좋다라는 뜻이 아님
    promise를 유지해서 아용해야하는 경우가 있고 async와 await으로 바꿔야 깔끔한 경우도 있다

    1. async
    1) 사용방법
*/
// function fetchUser() {
//     // 백엔드(서버)에서 받아오는 함수 >> 10초정도 걸리는 코드가 있다
//     return 'alice';
// }
// const user = fetchUser();
// console.log(user);

/*
    받아오는데 오래걸리는 코드를 비동기적 처리를 한게 아닌 동기적인 코드로 받아오게되면
    자바스크립트 코드는 동기적으로 수행하기 때문에 
    데이터가 많아지면 다음코드들 실행이 느려진다 >> 수행속도가 느려진다
 */

function fetchUser() {
    // 이것을 지난시간에는 promise를 이용해서 비동기적 처리를 하였다
    return new Promise(function(resolve, reject){
        // resolve와 reject라는 콜백함수를 받는 executor라는 콜백함수를 선언해주면
        // 비동기적으로 값을 return한다
        // return 'alice';
        // 이렇게만 하면 상태가 pending >> 수행중이거나 / rejected >> 무언가에 의해서 실패했거나 / fulfilled >> 완료
        // 지금은 resolve나 reject를 호출하지 않았기 때문에 계속 pending상태로 남아있게 된다
        // 그렇기때문에 resolve나 reject를 이용해서 완료를 해줘야 한다
        resolve('alice');
    });
}
const user = fetchUser();
// then을 이용해서 user가 들어오면 출력하게 할 수 있다
user.then(console.log);
console.log(user);


/*
    위의 처럼 promise를 이용하지 않아도 조금 더 간편하게 비동기를 작성하는 방법이 있다
    함수앞에 async를 붙여주면 번거롭게 promise를 붙여주지 않아도 된다
    >> 자동적으로 코드블럭들이 promise로 변환이 된다
*/
async function fetchuser() {
    return 'ellie';
}

const user2 = fetchuser();
user.then(console.log);
console.log(user2);


/* 
    2. await
    await은 async가 붙은 함수안에서만 사용이 가능하다
    동기적인 코드처럼 보이게 한다
*/
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
    // 정해진 ms가 지나면 resolve를 호출하는 promise를 리턴한다
}

async function getApple(){
    await delay(3000);
    // throw 'error'; // 에러를 강제적으로 발생시키게 함
    // 여기서 await을 쓰게되면 delay가 끝날때까지(3초가 지난뒤에) 기다려 준다.
    // 3초뒤에 사과를 return
    return '🍎';
}

async function getPeach(){
    await delay(1000);
    // 얘도 3초있다가 복숭아를 return한다
    return '🍑'
}

// 위에와 동일한 함수를 쓰자면
// function getPeach(){
//     return delay(3000).then(function(){
//         return '🍑';
//     });
// }
// 이렇게 된다

// 사과와 복숭아를 한번에 따오는 함수
// function pickFruits(){
//     return getApple().then((apple) => {
//         return getPeach().then((peach) => `${apple} + ${peach}`);
//     });
// }

// pickFruits().then(console.log);
// 이렇게 하면 콜백지옥처럼 비슷한 문제점발생

// 이것을 async를 이용해서 간단하게 만들 수있다
async function pickFruits(){
    // const apple = await getApple(); // 사과를 받는데 6초
    // const peach = await getPeach(); // 바나나를 받는데 6초 
    // 이런식으로 순차를 적용시켜(await) 받아오면 비효율적이다
    // apple과 peach는 연관되어 있지 않기때문에 서로 기다릴 필요가 없다
    //이것을 개선하기 위해서는
    // 1. 먼저 promise를 실행시켜주고 난 뒤 동기처리하기
    const applePromise = getApple(); // 프로미스를 만드는 순간 바로 promise안에 있는 코드들이 실행된다 >> 지난시간에 함
    const peachPromise = getPeach();
    // 병렬적으로 동시에 실행 시켜서 한번에 await(기다렸다가) 출력시킨다
    const apple = await applePromise; // 여기서 동기화를 시켜준다
    const peach = await peachPromise;
    return `${apple} + ${peach}`;  
}
pickFruits().then(console.log);

/* 
    3. promise APIs 사용하기 
    1) Promise.all()
    >> 프로미스 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 받아올때까지 모아주는 api
*/
function pickAllFruits(){
    return Promise.all([getApple(), getPeach()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getPeach()]);
    // race >> 이것은 먼저 실행 된 값만 가져오게 한다!
}
pickOnlyOne().then(console.log);