'use strict';

// 콜 백 Hell원본
// class UserStorage {
//     loginUser(id, password, onSuccess, onError){
//         setTimeout(function(){
//             if(
//                 (id === 'ellie' && password === 'dream')||
//                 (id === 'coder' && password === 'academy')
//             ){
//                 onSuccess(id);
//             } else {
//                 onError(new Error('not fount'));
//             }
//         }, 2000);
//     }

//     getRoles(user, onSuccess, onError){
//         setTimeout(function(){
//             if(user === 'ellie'){
//                 onSuccess({name: 'ellie', role: 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// }
// const userStorage = new UserStorage();
// const id = prompt('아이디를 입력해 주세요');
// const password = prompt('비밀번호를 입력해 주세요');

// userStorage.loginUser(id, password, function(user){
//     userStorage.getRoles(user, function(userWithRole){
//         alert(`Hello! ${userWithRole.name} / ${userWithRole.role}`);
//     }, function(error){
//         console.log(error);
//     });
// }, function(error){
//     console.log(error);
// });




// 콜백Hell을 Promise로 변경해 보기
// class UserStorage{
//     loginUser(id, password){
//         return new Promise((resolve, reject) => {
//             setTimeout(function(){
//                 if(
//                     (id === 'ellie' && password === 'dream')||
//                     (id === 'coder' && password === 'academy')
//                 ){
//                     resolve(id);
//                 } else {
//                     reject(new Error('not fount'));
//                 }
//             }, 2000);
//         });
//     }

//     getRoles(user){
//         return new Promise((resolve, reject) => {
//             setTimeout(function(){
//                 if(user === 'ellie'){
//                     resolve({name: 'ellie', role: 'admin'});
//                 } else {
//                     reject(new Error('no access'));
//                 }
//             }, 1000);
//         });
//     }
// }

// const userStorage = new UserStorage();
// const id = prompt('아이디를 입력해 주세요');
// const password = prompt('비밀번호를 입력해 주세요');

// userStorage.loginUser(id, password)
// .then(user => userStorage.getRoles(user)) // 로그인에 성공하게 되면 getRoles를 실행하고 id를 인자로 보낸다
// .then(user =>  alert(`Hello! ${user.name} / ${user.role}`)) // 그후 아이디를 보내면 팝업창을 띄우게 한다
// .catch(alert);



// async와 await로 깔끔하게 작성하기
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(
                    (id === 'alice' && password === 'dream')||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                } else {
                    reject(new Error('not fount'));
                }
            }, 2000);
        });
    }

    getRoles(id){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(id === 'alice'){
                    resolve({name: 'alice', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    async getUserWithRole(user, password){
        const user1 = await this.loginUser(user, password);
        const role = await this.getRoles(user);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해 주세요');
const password = prompt('비밀번호를 입력해 주세요');

// userStorage
// .loginUser(id, password)
// .then(function(id){
//     return userStorage.getRoles(id);
// })
// .then(function(user){
//     alert(`${user.name}유저님 환영합니다`);
// })
// .catch(console.log);

userStorage.getUserWithRole(id, password) //
.catch(console.log)
.then(console.log);