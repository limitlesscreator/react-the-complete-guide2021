const [a,b] = ['Hello', 'Max']
const {name} = {name: 'Max', age: 28}
console.log(a)
console.log(b)

{
    const {name} = {name: 'Max', age: 28}
    console.log(name) //Max
    // console.log(age) //undefined
}