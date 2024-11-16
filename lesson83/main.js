const user = {
  name: 'Roma',
  age: 19,
  student: true,
  hobby: 'play guitar'
}

console.log(user)

// ==============================================================

const human = {
  sayHello: function (name) {
    return `Hello "${name}"`
  }
}

console.log(human.sayHello('Roma'))

// ===============================================================

const users = [
  {
    name: 'Alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'John',
    age: 20,
    isAdmin: true
  },
  {
    name: 'Tom',
    age: 30,
    isAdmin: false
  },
  {
    name: 'Mark',
    age: 50,
    isAdmin: true
  },
  {
    name: 'Ivan',
    age: 26,
    isAdmin: false
  }
]

let userSimple = 0

for (let user of users) {
  if (!user.isAdmin) {
    userSimple++
  }
}

console.log(userSimple)