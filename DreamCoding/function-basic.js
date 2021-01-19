// 함수에서는 중요한게 딱 두가지!
// 1. 함수선언
// function 함수명(함수에게 전달할 인자값) { 함수를 호출하면 실행할 코드 }
// function doSomething() {
//     // 함수에는 두가지 기능이 있다
//     // 1) 어떤기능을 수행만 하는 함수
//     console.log('hello');
// }
function add(a, b){
    // 2) 계산 후에 값을 전달
    const sum = a + b;
    // 이것만 해놓으면 선언만 했기때문에 실행x >> 값을 내보내주는것이 없다
    // 그게 바로 return
    return sum;
}

function doSomething(add) {
    // 함수에는 두가지 기능이 있다
    // 1) 어떤기능을 수행만 하는 함수
    console.log(add);
    const result = add(1, 2); // << 이런식으로 
    console.log(result);
}


// 2. 함수호출
doSomething(add); // >> add함수 자체가 들어간 것 add함수전체가 출력이 된다 만약 add기능을 수행하고 싶으면 add()로 하거나
// doSomething함수 안에 add를 호출해야한다 (위에 보기)
const result = add(1, 2);
console.log(result); 
// result라는 값을 console에 출력할껀데 result안에는 add라는 함수가 있네? 그럼 함수를 실행! 해서
// 계산을 하고 그값을 sum이라는 변수로 내보내네? 그값이 result안에 들어간다! 
