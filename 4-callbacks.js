setTimeout(() => {
    console.log(`two seconds are up`);
}, 2000)

const names = ['andrew', 'jen', 'jess']
const shortNames = names.filter((name)=> {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude : 0
        }
    
        callback(data)
    }, 2000)

}


geocode('newtown', (getdata)=> {
    console.log(getdata)
})


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2 , callback) => {
    setTimeout(() => {
        // this.num1 = num1;
        // this.num2 = num2;
        const sum = num1 + num2;
        callback(sum);
    }, 2000)
}

add(1, 4, (getsum) => {
    console.log(getsum) // Should print: 5
})