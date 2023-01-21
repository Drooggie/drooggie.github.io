import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = ``;


let user = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: '${this.name}'}`;
  },

  valueOf() {
    return this.money
  }

};


console.log(user.toString())
console.log(+user)
console.log(user - 20)


