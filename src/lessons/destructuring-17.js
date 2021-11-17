const [a,b] = ['Hello', 'Max']
const {name} = {name: 'Max', age: 28}
console.log(a)
console.log(b)

{
    const {name} = {name: 'Max', age: 28}
    console.log(name) //Max
    // console.log(age) //undefined
}
{
    const numbers = [1,2,3]
    const [num1,num2] = numbers
    console.log(num1,num2)
}