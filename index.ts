class Student {
  firstName: String
  lastName: String
  age: Number
  degree: String

  constructor(firstName: String, lastName: String, age: Number, degree: String) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.degree = degree
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

interface Person {
  firstName: String,
  lastName: String,
  age: Number
}

function hello(person: Person) {
  return `Hello, my name is ${person.firstName} ${person.lastName} and I have ${person.age} years old!`
}

const user = {firstName: 'David', lastName: 'Alves', age: 32}
const student = new Student('David', 'Alves', 32, 'Pós-graduação')
const fullName = student.getFullName()

console.log(hello(user))
console.log(hello(student))
console.log(fullName)
