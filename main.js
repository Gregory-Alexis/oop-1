const { Point } = require('./point')
const { Human } = require('./classinfos')

const alice = new Human('Alice', 'Liddell', 27, ['Javascript', 'C++', 'Python', 'Solidity', 'HTML', 'CSS'])
const bob = new Human('Bob', 'Lemon', 30, ['Javascript', 'C#', 'Ruby', 'Php', 'GO', 'Julia'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Casse-pieds'])

const p1 = new Point(1, 1)
const p2 = new Point(10, 12)


console.log(alice)
console.log(alice.canVote())
console.log(p1.distance(p2))
console.log(alice.mostSkilledDev(charlie))