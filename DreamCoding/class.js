'user strict';

/* 
    1. Class(tamplate)
    템플릿을 이용해서 데이터를 넣어서 만드는것 >> 객체(Object)
    클래스는 es6에 도입된 것 >> 그전에는 바로 객체로 만들 수 있었음
    기존에 존재하던 프로토타입 기반으로 문법만 추가된것임

    1) 클래스 선언
*/
class Person {
    // constructor >> 생성자(필요한 데이터를 전달)
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }
    // method
    speak() {
        console.log(`${this.name}: hello`);
    }
}

/* 
    2. Object생성
*/
const alice = new Person('alice', 20);
console.log(alice.name);
console.log(alice.age);
// 메소드 호출
alice.speak();

/*
    3. getter / setter
    클래스는 캡슐화가 되어있기때문에 getter와 setter를 이용해서만 접근이 가능하다
*/
class User{
    constructor(a, b, c){
        // field
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get c(){
        return this._c;
    }

    set c(value){
        return this._c = value;
    }
}

const user1 = new User('choi', 'hayoon', 28);
console.log(user1.c);

/*
    여기서 c라는 getter를 정의하는 순간 constructor의 this.c는 메모리에 저장되어있는 c값을 읽어오는 것이 아니라
    getter를 호출하게 되는 것이다.
    그리고 setter를 정의하는 순간 = c, 즉 값을 할당할때 값을 바로 메모리에 할당하는것이 아닌 setter를 호출하게 되는것이다
    이말은 c에 값을 전달 할때 setter가 실행되면서 value에 전달한 값이 들어가기 된다
    전달된 value를 this.c에 넣게되면서 메모리의 값을 업데이트 하는것이 아닌 setter를 호출하게 된다 >> 무한정 반복
    이것을 방지하기위해 getter와 setter안에서 사용하는 this를 조금 다르게 만들어줘야한다 

*/

/* 
    4. public / private
*/
class Experiment {
    publicField = 2;
    #privateField = 0; // private int privateField = 0; 과 같은것
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined


/* 
    5. static
    Object와 상관없이 class자체에 연결됨
*/
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

// static을 사용하지 않았다면
console.log(article1.publisher); // 출력이 가능함 but, static을 사용했기 때문에 undefined가 뜸
// 즉 static은 object마다 값이 할당되는 것이 아닌 class자체에 붙어있기때문에 호출을 하려면 클래스명.필드명을 해줘야한다
console.log(Article.publisher); // 값이 나옴
// static함수를 호출하려고 해도 똑같이 객체의 객체변수가 아닌 class명을 적어주고 호출해야한다
Article.printPublisher();
// 이 static은 들어오는 값에 상관없이 공통적으로 사용할 때 사용하기 좋다


/* 
    6. 상속과 다형성
    상속 >> 부모클래스의 모든 속성과 연산을 자식클래스에게 물려주는것
    다형성 
    >> 여러가지 형태를 가질 수 있는 능력 
    >> 하나의 코드가 여러 자료형으로 구현되어 실행되는 것, 여러객체가 각자 다른 행위를 수행
*/
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return width * this.height;
    }
}

// extends >> 상속
class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

// 다형성을 이용하여 상속받은 클래스의 메소드를 재정의(오버라이딩) 할 수 있다(삼각형의 면적구할때는 width * height / 2)
class Triangle extends Shape {
    draw(){
        // 상속받은 자식클래스에서 오버라이딩한 값뿐만아니라 부모클래스에서 지정한 값도 같이 가져오고싶다 >> SUPER
        super.draw();
        console.log('💕');
    }
    getArea(){
        return (width * this.height) / 2;
    }
}
const triangle = new Triangle(20, 15, 'white');
triangle.draw();

/*
    6. instanceOf
    왼쪽에 있는 객체가 오른쪽에 있는 클래스의 Instance인지 아닌지를 확인시켜줌
    즉, 왼쪽에 있는 객체가 오른쪽에 있는 클래스를 이용해서 만들어진 객체인지 아닌지 확인시켜줌
*/
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // 상속받았기 때문에 true
console.log(triangle instanceof Object); // Object는 모든 객체의 상속을 해주기때문에 true
// 모든객체는 Object를 상속받기 때문에 Object의 메소드들을 오버라이딩 해줄 수 있다 >> toString 등등
// JavaScript MDN Reference에 다 있음 >> MDNWebsite