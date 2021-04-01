/*const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  langage: ['Javascript', 'C++', 'Python', 'Solidity', 'HTML', 'CSS']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  langage: ['Javascript', 'C#', 'Ruby', 'Php', 'GO', 'Julia']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  langage: ['Casse-pied']
}

const printInfo = (person) => {
  console.log(`first name : ${person.firstName}`)
  console.log(`last name : ${person.lastName}`)
  console.log(`age : ${person.age}\n`)
}

printInfo(alice)
printInfo(bob)
printInfo(charlie)

const canVote = (majority) => {
  return majority.age >= 18 ? true : false
}

console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))

const mostSkilledDev = (lang1, lang2) => {
  const dev1 = lang1.langage.length
  const dev2 = lang2.langage.length
  if (dev1 > dev2) {
    return lang1.firstName
  } else if (dev1 < dev2) {
    return lang2.firstName
  } else {
    return 'draw'
  }
}

console.log(mostSkilledDev(bob, bob)) */


class Human {
  constructor(firstName, lastName, age, langage) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.langage = langage
  }
  printInfo() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`langage:`)
    this.langage.forEach(element => {
      console.log(`\t${element}`)
    })
  }
  canVote() {
    this.age > 18 ? true : false
  }
  mostSkilledDev(lang1, lang2) {
    const dev1 = lang1.langage.length
    const dev2 = lang2.langage.length
    if (lang1.langage.length > lang2.langage.length) {
      return dev1.firsName
    }
    else if (lang1.langage.length < lang2.langage.length) {
      return dev2.firsName
    } else {
      return 'draw'
    }
  }
}


const alice = new Human('Alice', 'Liddell', 27, ['Javascript', 'C++', 'Python', 'Solidity', 'HTML', 'CSS'])
const bob = new Human('Bob', 'Lemon', 30, ['Javascript', 'C#', 'Ruby', 'Php', 'GO', 'Julia'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Casse-pied'])

console.log(alice)
console.log(bob)
console.log(charlie)
