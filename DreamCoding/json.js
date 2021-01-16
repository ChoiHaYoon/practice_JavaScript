'use strict';
/*
    HTTP >> 클라이언트가 서버에게 요청을 하고 서버는 클라이언트가 요청한것에 맞는 응답을 클라이언트에게 보내주는 방식
    AJAX >> Asynchronous JavaScript And XML
    웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술
    대표적인 예로는 
    XHR(XMLHttpRequest)Object
    >> 브라우저API에서 제공하는 Object / 간단하게 서버에게 데이터를 요청하고 받아올 수 있음
    최근 브라우저API에 추가된 fetch() API를 이용해서도 간단하게 데이터를 주고받을 수 있음(ie는 사용안됨)

    XML이란?
    HTML과 유사한 문자기반의 마크업언어(태그들을 이용해서 사용)

    서버와 데이터를 주고받을때는 XML만 사용가능한가?
    NO! 여러가지가 있다
    요즘에는 JSON을 많이 사용한다(JavaScript Object Notation)
    >> XML을 사용하면 너무 불필요한 태그들이 너무 많아져서 파일의 사이즈도 커지고 가독성이 떨어지기때문에 xml을 사용을 많이 안한다

    json도 key와 value로 쌍으로 묶여져있다
    json은 브라우저뿐만아니라 모바일에서도 서버와 데이터를 주고받을때 또는 서버와 통신을 하지 않아도 object를 FileSystem에 저장할때도
    많이 사용한다

    정리를 하면
    Json이란?
    1) 데이터를 주고받을 때 사용되는 가장 간단한 파일포맷이다
    2) text를 기반으로 해서 가볍다
    3) 사람이 읽기 편하다
    4) key와 value로 되어있는 포맷
    5) 데이터를 서버와 주고받을 때 직렬화(serialization)를 하기위해 사용되면서 전송할때 사용된다
    6) 프로그램언어나 플랫폼에 상관없이 사용할 수 있다(c, c++, c#, java, php, kotlin, go등등 상관없이 사용가능)

    json공부 포인트
    1) Object를 어떻게 직렬화해서 json으로 변환하는가
    2) 직렬화 된 json을 어떻게 역직렬화해서 Object로 변환하는가
*/

// 1. Object -> Json (직렬화)
// json은 인터페이스이다.(오버로딩된 메소드가 안에 있다)
// 두 메소드 다 콜백함수를 사용할 수 있다
// .stringify(obj)
let json = JSON.stringify(true); // boolean타입도 json으로 변환이 가능
console.log(json);

// 배열을 json으로 변환시키기
json = JSON.stringify(['apple', 'banana']);
console.log(json);
// JSON으로 변환하면 ''가 아닌 ""로 변환이 된다 >> json의 규격사항

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function(){
        console.log(`${this.name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);
// Json으로 변환하면 jump는 변환이 되지 않는다(함수는 object안에 있는 data가 아니기 때문에 함수는 제외된다 / simbol도 제외)


/* 
    콤마 뒤에 콜백함수는 배열이나 함수형태로 전달할 수 있다. 

    1) 배열형태
*/ 
json = JSON.stringify(rabbit, ['name']);
// 콤마뒤에는 내가 원하는 출력값만 지정할 수 있다 >> name만 지정하면 json으로 name만 나오게 된다.
console.log(json);
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

//  2) 함수형태 >> 콜백함수는 좀 더 세밀한 통제하고 싶을 때 사용
json = JSON.stringify(rabbit, function(key, value){
    // 이렇게 할때는 맨처음에는 겉을 감싸고있는 객체를 먼저 콘솔에 띄운다(rabbit) / 그다음값부터 key와 value값을 가져오게된다
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);



// 2. Json -> Object (역직렬화)
// .parse(json)
console.clear();
json = JSON.stringify(rabbit);

// const obj = JSON.parse(json); // 객체로 변환 끝!
// console.log(obj);
rabbit.jump();
// 우리가 역직렬화한 object는 직렬화가 된 Json으로 부터 객체를 만들었기 때문에 jump가 없다(함수나 simbol은 직렬화가 안되기 때문에) >> 오류발생
// obj.jump();

// Object와 json의 Date차이(?)
let test = rabbit.birthDate.getDate();
console.log(test);
// test = obj.birthDate//.getDate();
// console.log(test);
/* 
    json에서 역직렬화 한 객체에서 getDate메소드를 사용하면 오류가 난다. why?
    json에서 넘어온 값들은 Date객체가 아닌 string으로 넘어온 값들이여서 Date객체의 메소드 사용 불가
    다시 string을 Date객체로 바꿔주고 싶으면 콜백함수 사용해야함 >> parse시에 콜백함수 사용해야 함
    밑에 다시 json으로 만들어 보자
*/
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key},  value : ${value}`);
    // 만약 birthDate라는 키를 만나면 value를 Date객체로 만들어 줄꺼다
    return key === 'birthDate' ? new Date(value) : value;
});
test = obj.birthDate.getDate();
console.log(test); // 오류없이 잘 나온다


/*
    Json으로 유용한 사이트
    1) JSON Diff
    >> 서버에게 요청했을때 첫번째(왼쪽)로 받아온 값과 두번째(오른쪽)로 받아온 값이 어떤게 틀린지 모를때(문제 디버깅에 유용)

    2) JSON Beautifier
    >> 가끔 서버에서 받아온 json을 복붙할 경우 망가지는 경우가 있다. 포맷을 예쁘게 만들어준다

    3) JSON Parser
    >> Json타입을 객체형태로 보고싶을때 사용

    4) JSON Validator
    >> json만든 코드가 json데이터로 유효한지(어디서 오류가 나는지)
*/

