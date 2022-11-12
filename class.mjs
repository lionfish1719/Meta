class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email,'just logged in')
    }
    logout(){
        console.log(this.email, 'just logged out')
    }
}
var userOne = new User("sshaheryarm@gmail.com", 'shaheryar');
var userTwo = new User("komail123@gmail.com", 'Komail')

console.log(userOne);
console.log(userTwo);
userOne.login();
userTwo.logout();