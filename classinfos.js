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
    return this.age > 18 ? true : false
  }
  mostSkilledDev(person) {
    const dev1 = this.langage.length
    const dev2 = person.langage.length
    if (dev1 > dev2) {
      return this.firstName
    }
    else if (dev1 < dev2) {
      return person.firstName
    } else {
      return 'draw'
    }
  }
}

exports.Human = Human