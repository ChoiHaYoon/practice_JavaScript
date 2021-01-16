'use strict';
/*
    1. 주어진 배열을 string으로 변환 
    >> .join(원하는 구분자(선택))
    배열의 모든 아이들을 더해서 string으로 return
    구분자를 통해서(전달해도 되고 안해도 되고)
*/
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' and ');
    console.log(result);
}

/*
    2. 주어진 string을 배열로 변환
    >> .split(구분자, 몇개를 배열에 넣고싶은지 갯수(선택));
*/
{
    const fruits = '🍎, 🍏, 🍑';
    const result = fruits.split(',', 2);
    console.log(result);
}

/* 
    3. 주어진 배열의 순서를 거꾸로 만들기
    reverse() >> 원본배열자체를 거꾸로
*/
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}
  
/* 
    4. 배열에서 첫번째와 두번째를 제외한 나머지만 들어있는 새로운 배열만들기
    slice(배열의 시작, 배열의 마지막(마지막은 배제됨));
*/
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result); // 삭제된 값을 출력(1, 2)
    // console.log(array); // 삭제된 나머지값들을 출력(3, 4, 5)
    // splice는 새로운 배열을 만드는 것이 아닌 삭제를 하는것
    // 새로운 객체를 만드는것은 slice
    const result = array.slice(2); // 마지막을 안써줘도 끝까지 담겨져 온다
    console.log(result);
}
  
// 이 뒤에서부터는 class를 이용
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

/* 
    5. 점수가 90점인 객체만 return
    .find(콜백함수(매개변수){});<< 첫번째로 찾아진 요소를 return(전달된 callback함수가 true일 때) >> 없을경우 undefined
*/
{
    // const result = students.find(function(student){
    //     return student.score === 90;
    // });
    // 이렇게도 사용가능
    const result = students.find((student) => student.score === 90 );
    console.log(result);
}
  
/* 
    6. 학생들 중에서 true값만 가져오기(등록한 학생들만 가져오기)
    .filter(콜백함수(매개변수){})
*/
{
    const result = students.filter(function(student){
        return student.enrolled === true;
    })
    
    for(let key of result){
        console.log(key);
    }
}
/* 
    7. 배열에서 점수만 뽑아서 배열에 집어넣기
    result should be: [45, 80, 90, 66, 88]
    .map(콜백함수(매개변수){})
    배열안에있는 요소 한가지 한가지를 다른 것으로 변환
    다른것들도 마찬가지로 매개변수를 지정해 줄때는 연관되어있는 단어로 지정해주기
*/
{
    const result = students.map(function(student){
        return student.score;
    });
    console.log(result);
}
  
/* 
    8. 50점 이하의 학생들이 있는지 확인하기
    .some() > 속성이 있는지 없는지 확인하기
    하나라도 조건에 만족하면 true를 반환
    .every() > 모든요소들이 조건에 충족해야지만 true반환
*/
{
    console.clear()
    // const result = students.some(function(student){
    //     return student.score <= 50;
    // });
    // console.log(result);

    // every는 모든요소들이 조건에 충족해야한다
    const result = students.every((student) => student.score > 50);
    console.log(result);
}
  
/* 
    9. 학생들의 평균점수 구하기
    .reduce(이전값매개변수, 현재값 매개변수) >> 누적값을 구할때 사용
    이전값매개변수(여기서는 prev)는 콜백함수에서 return한 값을 가져오게된다
    현재값매개변수(여기서는 curr)는 현재 배열에서 바라보고있는 값을 가져오게 된다.
    마지막에 대괄호 뒤에 숫자를 넣어주면 현재값매개변수안에 지정한 값이 들어가게 된다(출력하는 값)

    .reduceRight >> 똑같은데 뒤에서부터 시작하는 것(거꾸로 호출)
*/
{
    const result = students.reduce(function(prev, curr){
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}
  
/* 
    10. 학생들의 모든점수를 string으로 변환
    result should be: '45, 80, 90, 66, 88' 
*/
{
    // const result = students.map(function(student){
    //     return student.score;
    // });
    // const result2 = result.join(', ');
    // console.log(result2);

    // 이렇게도 가능 >> api섞어서 사용가능
    // const result = students.map((student) => student.score).join(', ');
    // console.log(result);

    // 50점이상인 값들만 출력원하면 똑같이 섞어서 사용가능
    // 이건 함수형 프로그래밍
    const result = students
    .map((student) => student.score) // return이 점수로 넘어가기때문에 다음 api인 filter에서는 점수만 매개변수로 받아오면됨
    .filter((score) => score >= 50)
    .join(', ');
    console.log(result);
}
  
    // Bonus! 학생들의 점수를 오름차순으로 정렬
    // result should be: '45, 66, 80, 88, 90'
    /* 
        정렬하기 : sort(콜백함수로 지정해주기)
        오름차순은 매개변수 a와 매개변수 b를 뺐을 때
        b의 값이 a보다 작다면 -이기때문에 b의 값이 a보다 작다는것을 알고 b를 앞으로 보낸다
        (a값이 b보다 작다면 +이기때문에 자동적으로 a가 앞으로 간다)

        내림차순은 그 반대이다.(받아오는 매개변수의 순서는 같게하고 연산만 바꾸면 됨)
    */
{
    const result = students
        .map((student) => student.score)
        .sort((prev, curr) => prev - curr)
        .join(', ');
    console.log(result);

    // 내림차순
    const result2 = students.map(function(student){
        return student.score;
    }).sort(function(prev, curr){
        return curr - prev;
    }).join(', ');
    console.log(result2);
}



