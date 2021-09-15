let petnames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withsal = petnames
withsal.push('Sal')

console.log(`The third pet is named ${petnames[2]}.` )

let lengthsal = withsal.length

console.log(`The array has ${lengthsal} names in it. `)

let popped = withsal.pop()

console.log(`${popped}`)

