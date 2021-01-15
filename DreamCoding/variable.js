// Whole-script strict mode syntax
'use strict';

// 2. Variable r/w(ReadAndWrite)
// let >> es6에 추가된 변수
let myname = 'ellie';
console.log(myname);
myname = 'hello';
console.log(myname);

/* 
    block scope
    스코프 생각하면 된다 >> 블록안에서 변수를 선언하면 블록밖에서 같은 변수를 사용할 시 아무값도 나오지않음
    전역변수
*/
let hi2 = 'alice11';
{
    // 지역변수
    let hi = 'alice';
    console.log(hi);
    console.log()
}
console.log(hi2);
// console.log(hi); // 아무값이 안나옴

/*
    let 전엔 var >> 이제는 사용하지 않는게 좋다
    두가지이유
    1) 선언하기전에 값을 나오게 한다
    이게 바로 호이스팅(어디에 선언했느냐에 상관없이 항상 최상위로 선언을 끌어올리는 것)
    hoisting >> 끌어올리다
*/
console.log(before); // undefined로 뜸
before = 4;
console.log(before); // 이렇게 하면 4가 뜬다
var before;

/*
    2) blockscope을 무시한다
    블록을 철저히 무시한다
    블록안에서 선언을 하고 값을 할당한 뒤 블록밖에서 console.log를 하면 블록안의 값이 나오게된다(let을 사용하면 오류가뜸 >> 이게 맞는것임)
    유연성을 이용해서 어느정도 대충만들 수는 있지만 규모있는 프로젝트를 만들게 되면 선언하지 않은 값이 나오게 된다
*/
{
    var a = 1;
    console.log(a);
}

console.log(a);

/*
    let은 es6에서 나온것이기때문에 호환성을 체크해야한다 >> 왠만한 메이져브라우저에서는 가능함(ie는 안됨)
    ie는 전세계에서 1%만 사용하기때문에 babel을 이용해서 es6이상으로 개발 뒤 배포할때는 es5로 개발하면된다
*/


/* 
    3. Contant / r(read만 가능)
    값을 한번 할당하면 값이 절대로 바뀌지 않는 것 / 값이 바뀔이유가 없으면 이거를 사용하는게 좋음
    let은 메모리 어딘가에 할당 된 박스를 가르키며 포인터를 이용하여 값을 바꿀수 있지만
    const는 포인터가 잠겨져있기때문에 값변경이 불가
    값이 변경되는 것을 Mutable데이터타입 이라고 한다
    변경이 불가한것을 Immutable데이터타입 이라고 한다.
    그래서 개발자들은 왠만하면 한번 선언하면 값이 변경되지않는 데이터 타입을 사용하라 라고 한다.
    - 보안상 이유(해커들이 코드들을 바꾸는것을 방지)
    - 안전한 스레드(동시에 프로세스들이 값을 변경할 수 있기 때문에)
    - 코드를 변경할 때 실수 방지
*/
const aa = 7;
const bb = 8;



/* 
    4. Variable types
    자바스크립트의 데이터 타입
    - 1. Primitive Type(single item) >> 더이상 작은단위로 나눠질 수 없는 타입(원시타입)
    number, string, boolen, null, undefinedn, symbol

    - 2. Object >> single item들을 여러개 묶어서 한단위(박스)로 만들어서 관리
    function, first-class function(변수에 할당가능, 함수에 파라미터(인자)로도 전달이 가능, return을 function으로도 가능)

    두개의 방식은 메모리에 값이 다른방식으로 저장된다

    primitive Type은 값 자체가 메모리에 저장된다.
    Object는 레퍼런스 메모리에 저장하게 된다.
*/

// 1) Number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`); // `를 사용한 것
console.log(`value: ${size}, type: ${typeof size}`);

/*
    1-1)특별한 숫자의 값들
    숫자를 0으로 나누게 되면 무한대의 숫자값이 나타나게 된다 >> Infinity
    마이너스숫자값을 0으로 나누게 되면 마이너스의 무한대의 값이 나타난다 >> negativeInfinity
    숫자가 아닌 경우(string을 숫자로 나누게 되면) >> NaN(Not a Number)
*/
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// << 특별한 숫자의 값들이 중요한 이유는?
// 나중에 DOM요소들을 자바스크립트를 이용하여 포지션을 바꾼다고 할 때 / 다양한 계산을 할 때 숫자인지 아닌지 확인을 안하고 연산을 하면
// 숫자가 아닌것들을 받을 수 있어 사용자들이 에러가 날 수 있다.

// 새롭게 추가된것 >> 크롬하고 파폭만 가능
// 자바스크립트에서 숫자범위는 -2**53 ~ 2*53까지이다
// 최근에 bigInt가 추가됨
// 마지막에 n만 붙이면 된다
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`bigInt: ${bigInt}, type: ${typeof bigInt}`);


/*
    2) string
    java에서는 문자열이 char나 string이있지만
    javascript에서는 모두 다 string으로 통합
*/
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 
// template literals(string) >> `(backtic)기호를 이용하여 원하는 문자를 적고 el처럼 적으면 문자열과 함께 원하는 변수의 값이 나온다
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


/*
    3) boolean
    false == 0, null, undefined, NaN, ''
    ture == false를 제외한 모든 값
*/
const canRead = true;
const test= 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

/*
    4) null
    null은 정확하게 아무것도 없는 값이야 라고 이야기해주는 것
*/
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

/*
    5) undefined
    선언은 되었지만 아무것도 값이 지정되어져있지않음 >> 값이 없는지 있는지 확실하게 지정되어있지않는 상태
*/
// let x; // or
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);


/*
    6) symbol
    map이나 다른곳에서 고유한 식별자가 필요하거나 동시다발적으로 일어나는 코드에서 우선순위를 주고싶을때
    정말 고유한 식별자가 필요할때 사용
    >> string으로 지정해주는 경우가 있는게 그럴 경우 다른 모듈이나 다른 파일에서 동일한 string을 사용할 경우
    동일한 식별자로 간주한다

    즉, symbole을 사용하게되면 같은 string을 사용하여도 다른 식별자로 인식하기때문에 좀 더 유용하다
*/
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 두개가 서로 다른 식별자이다
console.log(symbol1 === symbol2); //false

// 두개가 서로 같은 식별자로 만들 수도 있다
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
// 심볼은 바로 출력하면 오류가 뜬다
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); << 오류
// 변수명.description을 사용해야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

/*
    7) Object
    객체 
    물건과 물체를 대표하는 박스형태
    변수 age는 아무것도 설명이 되지않지만 ellie라는 객체를 만들어서 이름과 나이를 설명할 수 있다
*/
const ellie = { name: 'ellie', age: 20 };
// 여기서 ellie라는 변수는 const이기 때문에 값을 변경이 불가하다 >> 다른오브젝트로 변경이 불가하지만
// 객체안에있는 name이라는 변수와 age라는 변수는 각각 포인트가 가리키고 있는 값들은 변경이 가능하다
ellie.name = 'alice';
console.log(ellie.name); 


/*
    5. Dynamic typing
    javascript는 dynamically typed language이다
    java나 c언어는 statically typed language >> 변수를 선언할 때 어떤타입인지 결정해서 타입을 같이 선언
    자바스크립트는 어떤타입인지 선언하지 않고 runtime(프로그램이 동작 할 때) 할당된 값에 따라서 타입이 변경된다
*/
let text = 'hello';
console.log(text.charAt(0)); 
console.log(`value: ${text}, type: ${typeof text}`); // string변수가 된다
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 위에서 1로 바꿔주었기 때문에 number로 자동적으로 바뀜
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); 
// 여기서 7이 문자열이기 때문에 뒤에 5를 자동적으로 자바스크립트에서 문자열로 바꿔준다 / strig변수
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// 둘다 문자열이지만 나누기가 가운데 들어가있기때문에 자동적으로 숫자형으로 바꿔준다 / number변수
// console.log(text.charAt(0)); << 오류발생 

// 즉, 자바스크립트는 런타임시에 변환이 되기때문에 런타임으로 에러가 많이 난다 >> typescript가 나타난 이유!
// (bable을 이용하여 트랜스컴파일러된다 )




